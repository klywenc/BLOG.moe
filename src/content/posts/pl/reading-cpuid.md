---
title: "Pytamy procesor, kim jest, przez CPUID"
description: "Krótki przegląd instrukcji CPUID na x86, wstawki w C i Ruście, i czym właściwie jest vendor string."
date: 2026-10-02
tags: ["x86", "c", "rust", "hardware"]
---

`CPUID` to jedna z tych instrukcji, które za pierwszym razem wyglądają jak magia:
wkładasz liczbę do `eax`, wykonujesz jeden opcode, a procesor opowiada o sobie.

## Liść 0: vendor string

Wywołanie `CPUID` z `eax = 0` zwraca najwyższy obsługiwany liść w `eax` oraz 12-bajtowy
vendor string rozrzucony po `ebx`, `edx`, `ecx`, w tej (lekko przeklętej) kolejności.

```c
#include <cpuid.h>
#include <stdio.h>
#include <string.h>

int main(void) {
    unsigned int eax, ebx, ecx, edx;
    char vendor[13] = {0};

    __get_cpuid(0, &eax, &ebx, &ecx, &edx);
    memcpy(vendor + 0, &ebx, 4);
    memcpy(vendor + 4, &edx, 4);
    memcpy(vendor + 8, &ecx, 4);

    printf("max leaf: %u\nvendor:   %s\n", eax, vendor);
    return 0;
}
```

Na mojej maszynie:

```text
max leaf: 22
vendor:   GenuineIntel
```

## To samo w Ruście

Rust udostępnia to jako intrinsic w `core::arch`, więc nie trzeba pisać asemblera:

```rust
use std::arch::x86_64::__cpuid;

fn main() {
    let r = unsafe { __cpuid(0) };
    let bytes: Vec<u8> = [r.ebx, r.edx, r.ecx]
        .iter()
        .flat_map(|reg| reg.to_le_bytes())
        .collect();
    println!("vendor: {}", String::from_utf8_lossy(&bytes));
}
```

## Skąd ta dziwna kolejność rejestrów?

Szczerze? Historia. `GenuineIntel` ładnie się składa, gdy zrzucisz `ebx:edx:ecx` jako
bajty little-endian, a wszyscy inni po prostu poszli tym samym tropem.

## Do poczytania

- Intel SDM, tom 2A: hasło `CPUID` to osobna powieść
- `/proc/cpuinfo` na Linuksie to w większości właśnie to, tylko przeżute
