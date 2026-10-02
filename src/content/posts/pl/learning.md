---
title: "Samorozwój w dobie Sztucznej Inteligencji"
description: "Nauka programowania i Technologii w dobie sztucznej inteligencji gdzie wszystko mamy podane "Na tacy"."
date: 2026-10-02
tags: ["AI", "Nauka", "C", "problemy_współczenego_świata"]
---

Dzisiejsze czasy w dziedzinie Nauki i Technologii, wszelkie newsy, posty i nagłówki na portalach oraz na X'ie (dawniej Twitterze) trąbią i buczą na temat Sztucznej Inteligencji.
Ludzie zaczynają dostrzegać problemy związane z tą technologią m.in "Co z ludźmi?, Co z inżynierami?,  Co z programowaniem?", oraz to, że jest to niekoniecznie technologia która jest na tzw plus
dla ludzkości oraz stabilności społeczeństwa, gdyż premiuje raczej ona gigantów technologicznych i w dużej mierze oznacza zabetonowanie kapitału w rękach garstki ludzi, ale nie o tym ma być post,
jednym z niewątpliwych plusów tej technologii jest to, że bardzo mocno wspomaga ona przyswajanie nowej wiedzy, jednakże najpierw trzeba przebrnąć przez pare barier

## Przebrnąć przez złe myśli.

Wraz z rozwojem sztucznej inteligencji ludzie najbardziej na nią narażeni zaczynają dostrzegać, jak wielkie spustoszenie może ona wywołać w dzisiejszym świecie i w całych branżach. Ja, jako programista, patrzę na to przez pryzmat własnego podwórka, bo siedzę w nim po uszy.
My, programiści, od zawsze chcemy automatyzować. Nie tylko pracę innych, ale też swoją własną. Stąd wzięły się generatory kodu, frameworki, skrypty i autouzupełnianie. Ten rodzaj leserstwa i lenistwa był wpisany w nasz zawód od początku: jeśli robisz coś drugi raz, napisz do tego narzędzie.
W ostatnich miesiącach sztuczna inteligencja przestała się ograniczać do boilerplate'u. Pisze coraz więcej kodu, który jeszcze niedawno pisałbym sam, z palca. Przyjęliśmy to z dużym entuzjazmem. Wszędzie było słychać: „w końcu nie będę klepał boilerplate'u i robił refaktoru”. Brzmiało to jak wybawienie przynajmniej dla niektórych.
Tyle że w bardzo krótkim czasie modele stały się dużo lepsze, szybsze i dokładniejsze. Wzrost ich możliwości wygląda na wykładniczy, a my wciąż nie wiemy, w którym miejscu krzywej jesteśmy/
Rozwój każdej technologii przypomina literę S: najpierw powolny start, potem gwałtowny wzrost, na końcu wypłaszczenie.
Problem w tym, że będąc w środku, nie da się odróżnić początku wypłaszczenia od kolejnego przyspieszenia. Może jesteśmy blisko sufitu. A może dopiero się rozpędzamy.
I tu pojawia się pytanie, które wielu z nas odkłada na później: co czeka nasz zawód? Co z samym programowaniem, z tą zabawą kodem i maszynami, którą tak wielu ludzi szczerze pokochało?
Mnie to dopadło, kiedy zobaczyłem, co model „Astra” od OpenAI potrafi zrobić w trybie computer use, czyli wtedy, gdy sam obsługuje komputer, tak jak robiłby to człowiek. Wpadłem w marazm. Przez jakiś czas nie miałem ochoty uczyć się czegokolwiek, bo po co, skoro za rok maszyna zrobi to lepiej?
Z tego stanu nie wyciągnęła mnie żadna wielka odpowiedź. Wyciągnęło mnie proste uświadomienie sobie, że nikt tej odpowiedzi nie ma. Ani ja, ani firmy budujące te modele, ani ludzie, którzy na YouTube co tydzień ogłaszają koniec programistów.
To wszystko jest jedną wielką niewiadomą. A skoro tak, to rezygnacja z nauki „na wszelki wypadek” też jest zakładem, tylko gorszym, bo przegrywa się go niezależnie od wyniku.
Jest też zrozumienie, jak coś działa od środka, ma wartość samo w sobie i nie znika tylko dlatego, że ktoś napisał narzędzie, które robi to szybciej.
trzeba po prostu robić to co się lubi.

## Język C 

W pewnym momencie, może właśnie przez AI, doszedłem do wniosku, że trzeba wrócić do korzeni. Embedded był jednym z pierwszych działów informatyki, z jakim się zetknąłem. Jeszcze w szkole średniej kupiłem Arduino i za pomocą Arduino IDE oraz gotowych bibliotek zrobiłem kilka ciekawych, choć dość prostych projektów. Był wśród nich kontroler do japońskich gier rytmicznych i klawiatury oparte na mikrokontrolerze firmy Atmel, siedzącym na płytkach Arduino Leonardo i Pro Micro.
Te dwie płytki nie wzięły się tam przypadkiem: ich mikrokontroler ma wbudowaną obsługę USB, więc komputer może go widzieć jako zwykłą klawiaturę albo gamepad, bez żadnych dodatkowych układów.
Co ciekawe, próg wejścia w Arduino jest absurdalnie niski. Na tyle niski, że nie trzeba nic wiedzieć o architekturze komputera, mikroprocesora czy mikrokontrolera. Wystarczy znać podstawy. Piszesz digitalWrite(13, HIGH) i dioda się zapala, a to, że pod spodem jest zapis do konkretnego rejestru portu, pozostaje ukryte. To nie jest wada, tylko świadomy wybór.
Arduino powstało raczej z myślą o ludziach, którzy chcą szybko zrobić hobbystyczny projekt, na przykład z robotyki, a nie rozkładać procesor na części.
Na studiach programowałem już w C++ na mikrokontrolerach STM32, korzystając z biblioteki HAL, Zephyra albo FreeRTOS-a. Każde z tych narzędzi też coś przede mną chowało, tylko na nieco niższym poziomie niż Arduino. Teraz chciałem zrobić coś na bare metalu, czyli bez systemu i bez gotowych bibliotek, pisząc bezpośrednio do rejestrów sprzętu.
I wtedy zdałem sobie sprawę z jednej prostej rzeczy: kompletnie zapomniałem, jak się programuje w C, a moje umiejętności w tym języku są na bardzo niskim poziomie.

## AI Jako nauczyciel

Dość łatwo zauważyć, że AI w roli nauczyciela sprawdza się naprawdę dobrze. Masz praktycznie nieograniczony feedback i kogoś w rodzaju osobistego mentora. Czasem się myli, tak jak człowiek, ale zajmuje się tylko tobą. To duża różnica w porównaniu ze szkołą czy studiami, 
gdzie prowadzący musiał ogarnąć całą grupę i nie miał czasu, żeby przy każdym niezrozumiałym zdaniu zatrzymywać się z jedną osobą.
Przerabiając biblię, czyli K&R, można w bardzo fajny sposób łatać dziury w wiedzy i wyjaśniać sobie niejasności na bieżąco. A w niektórych przypadkach nawet poprosić Klaudiusza o przygotowanie specjalnych samouczków w PDF-ie, które pomogą zrozumieć na przykład architekturę mikrokontrolera.
Najważniejsza zasada, jaką sobie ustaliłem: kod piszę ja, a nie AI. Model tłumaczy, podpowiada i przepytuje, ale klawiaturę trzymam ja. Gdybym kazał mu pisać rozwiązania za mnie, skończyłbym dokładnie tam, gdzie zacząłem, czyli z kodem, który działa, i głową, która nie wie dlaczego.
Wygląda to mniej więcej tak. Czytam rozdział K&R, a kiedy coś jest dla mnie niejasne, pytam. Nie zadowalam się odpowiedzią „tak po prostu jest”, tylko dopytuję, co się dzieje pod spodem: gdzie w pamięci ląduje zmienna, co dokładnie przechowuje wskaźnik, dlaczego tablica w pewnych sytuacjach zachowuje się jak wskaźnik, a w innych nie. Potem piszę ćwiczenia i wrzucam swój kod do oceny. Na koniec model mnie przepytuje, często pytaniami, na które nie da się odpowiedzieć, jeśli tylko przeczytało się tekst, a nie zrozumiało go.
Kolejność też ma znaczenie. Na początku chciałem od razu rzucić się na bare metal, ale szybko okazało się, że startup code, linker i rejestry naraz to za dużo, kiedy człowiek nie czuje się pewnie ze wskaźnikami. Dlatego najpierw sam język na zwykłym komputerze, a dopiero potem powrót do mikrokontrolerów.
Druga rzecz to wspomniane samouczki. Równolegle do nauki C powstaje mój własny poradnik o tym, jak embedded działa od środka: architektura ARM i STM32, trochę RISC-V i różnice w stosunku do x86. Ogólne pojęcia typu DMA znam, ale nie do końca rozumiem, co w tym czasie dzieje się w rejestrach, i właśnie tę lukę chcę zapełnić. Poradnik powstaje rozdział po rozdziale, jako PDF z rysunkami, i czytam go wieczorem przed snem. Jeden rozdział na raz, w porcji, którą da się zapamiętać, a nie sto stron, które przelecą przez głowę.
## Gdzie trzeba uważać:

Sekcję o tym, jak korzystasz z AI, napisałem na podstawie tego, jak faktycznie wygląda Twoja nauka: K&R z tłumaczeniem i przepytywaniem, najpierw wskaźniki na PC, potem sprzęt, oraz poradnik PDF czytany przed snem. Od siebie dodałem zasadę „kod piszę ja”, część o weryfikowaniu odpowiedzi i ostatni akapit, który spina ten wpis z pierwszym. Śródtytuły możesz usunąć, jeśli wolisz jednolity tekst.

