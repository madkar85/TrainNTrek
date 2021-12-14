#

---

==Motivering till användning av tester==

Då vi hade problem med att genomföra integrationstester med react så utökade vi antalet andra tester till tre stycken utöver unit- och integrationstester.

Användna testmetoder: Smoke test, Sanity test och Acceptance testing.

Smoke Test: Genom att testa funktionalitet, t.ex. inloggning och registrering och föra ned resultatet i ett excel-ark (bifogat)
får utvecklarna möjlighet att åtgärda eventuella fel.

Sanity Test: Under utvecklingen av produkten hade vi ett fall där en större feature som inte tidigare hade integreras med
övrig kod skulle integreras. För att dokumentera eventuella fel som behövde åtgärdas efter denna integration dokuemnterades denna merge.

Acceptance Test: För att komplettera funktionstestet i Smoke test gjordes även ett acceptance test där hela projektgruppen gemensamt
gick genom sidan för att komma med synpunkter på visuella förbättringar som kunde göras. Detta dokuemnterades i ett excel-ark (bifogat).

---

Sanity test av TrekNTrain

==Scenario==

Integration av branch ”Dennis” in i developmentmiljö. Anledning att detta används som testscenario är då ny funktionalitet
bedöms påverka övriga programmet i större utsträckning än övriga.
Bland annat då routing har uppdaterats samt att flera bibliotek har använts som inte använts vid övriga komponenter.
Featuren innehåller utöver ny routing även en ny vy där dietmål kan sättas.

==Utfall==

Inloggningsvy:
Till utseende i stort sett lika innan.
Väderkomponent är nu något större än navigationsbar. Inloggningsfunktion intakt.

Hemvy:
Knapp för hämtning av senaste aktivitet har ett förändrat utseende, footer ligger fel i förhållande till övriga komponenter.
När View-knapp används trycks rubriktext upp i navigationsbaren.

Searchvy:
Orienteringen på komponenter fel då sökfält, rubrik samt knapp vänsterställts istället för att vara centerorienterade.

Statistikvy:
Converter och användarfeed ligger ovanpå varandra. Detta är ett tidigare fel och bedöms inte ha påverkats av den nya featuren

Dietvy:
Ser bra ut men blir något felorienterad i förhållande till övriga sidan.

Generellt:
Stylingen för tidigare delar av hemsidan har blivit förändrad.

==Föreslagen åtgärd==

Den feature som importeras använder bibliotek som inte använts i övriga programmet och det kan därför finnas en risk
att importerat bilbiotek använder sig av CSS-kod som skriver över kod från tidigare features.
Återställ developmentbranch från innan det att inkommande branch infogades. Avinstallera sedan stilbibliotek och skapa
ny css för att stilsätta dietsidan på samma vis som övriga sidan. Konflikter skall förhoppningsvis då inte uppstå.

---

Github Wiki

==Översikt==

Wiki funktionen av Github kan man använda sig av för att skapa en informationsida för sitt projekt, vilket andra sedan kan titta på och förstå vad projektet går ut på för att sedan kunna arbeta vidare på projektet. Det är en sorts hjälpfunktion där man kan dela projektets roadmap samt bygga en mer påtaglig version av sin vision.

Man kan också dela upp wikin i olika sidor/kapitel så att man lätt och snabbt kan navigera sig till den delen man är intresserad.

Github wiki gör det också möjligt om man skulle vilja, till att visa sidan på ett sätt så att man slipper starta hemsidan för att förstå vad den ska göra. Utan man ser den direkt på Github och kan på så sätt bilda sin uppfattning av appen/hemsidan.

---
