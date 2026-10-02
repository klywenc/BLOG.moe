---
title: "Asking your CPU who it is with CPUID"
description: "A tiny tour of the x86 CPUID instruction, inline asm in C and Rust, and what the vendor string actually is."
date: 2026-10-02
tags: ["x86", "c", "rust", "hardware"]
---

`CPUID` is one of those instructions that feels like magic the first time you use it:
you put a number in `eax`, execute one opcode, and the processor tells you about itself.

## Leaf 0: the vendor string

Calling `CPUID` with `eax = 0` returns the highest supported leaf in `eax` and a 12-byte
vendor string spread across `ebx`, `edx`, `ecx` — in that (slightly cursed) order.

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

On my machine:

```text
max leaf: 22
vendor:   GenuineIntel
```

## Same thing in Rust

Rust exposes it as an intrinsic in `core::arch`, so no inline asm required:

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

## Why the weird register order?

Honestly? History. The string `GenuineIntel` happens to spell out nicely when you dump
`ebx:edx:ecx` as little-endian bytes, and everyone else followed along.

## Further reading

- Intel SDM, Vol. 2A — the `CPUID` entry is a novel on its own
- `/proc/cpuinfo` on Linux is mostly this, pre-chewed
