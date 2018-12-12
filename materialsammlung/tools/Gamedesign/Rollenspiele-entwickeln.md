---
tool: tool1
title: "Kreiere dein eigenes Rollenspiel"
subtool: subtool4
layout: untertool
hide_hero: true
teaser: |
    "Mit dem RPG-Maker kannst du Rollenspiele bauen und andere neue Horizonte erleben lassen."
copy-infobox: |
    <ul><li>Hast du schon Erfahrungen mit anderen Gamedesign-Tools gesammelt? Wenn nicht, dann ist dieses Programm ein sehr guter Einstieg, weil du damit spielerisch die Grundlagen des Programmierens erlernst.</li><li>Wie wichtig sind dir die Grafik deines Spieles und die Auswahl an verfügbaren Objekten? Bei diesem Programm liegt der Fokus auf dem Erzählen einer Geschichte und dem Erstellen von Aufgaben. Eigene Grafiken und Sounds können jedoch hinzugefügt werden.</li><li>Wenn du deine Geschichte oder dein Thema in einem storybasierten Spiel spannend und verständlich erzählen möchtest, brauchst du ein bisschen Geduld. Überlege, wie viel Zeit du in dein Projekt investieren möchtest. Wenn du nur zwei bis drei Stunden zur Verfügung hast, solltest du eventuell ein weniger visuelles Tool (z.B. Twine) benutzen.</li></ul>
---
{% include content-infobox.liquid width="50%" float="right" headline="Bevor du startest, frage dich Folgendes:" copy=page.copy-infobox %}

**Was kann ich mit dem Tool machen?**<br>
*Der Slogan auf der RPG-Maker-Webseite lautet: „Simpel genug für ein Kind, effizient genug für einen Entwickler.“*
*Der RPG Maker ist eine Software, mit der du dein eigenes Rollenspiel programmieren kannst. Programmierkenntnisse sind dafür nicht unbedingt nötig. Wegen seiner vielen vorgegebenen, aber leicht editierbaren Vorlagen lässt sich der RPG Maker einfach bedienen. Das Programm enthält einen erweiterbaren Map-Editor, eine große Datenbank für Charaktere, Gegner, Fähigkeiten, Ausrüstungen u.v.a.m., programmierbare Ereignisoptionen und einen eigenen Charaktergenerator. Es lassen sich aber auch selbst geschriebene Scripts sowie Musik oder Grafiken hinzufügen.*
*Deine selbst gebauten Spiele kannst du anschließend als EXE-Datei exportieren und mit anderen teilen. Der RPG Maker eignet sich, um sowohl einfache als auch komplexe Rollenspiele zu erstellen und umfangreiche Themen zu behandeln. Durch die große Online-Community ist es möglich, zu diversen Fragen schnell Hilfe bzw. Lösungsvorschläge zu erhalten.*

## Tutorial
### SYSTEMVORAUSSETZUNGEN:
Du benötigst ein Windows-Betriebssystem (XP und höher), 400 MB Speicherplatz und eine Bildschirmauflösung von mindestens 1024 x 768 Pixeln.
Das Programm kannst du in mehreren Sprachen entweder auf der offiziellen Webseite oder bei Steam (meist günstiger) kaufen. Da es recht teuer ist, könntest du zuerst die kostenlose englischsprachige, etwas eingeschränkte LITE-Version ausprobieren.

### ERSTE SCHRITTE:
Bevor du anfängst, dein komplettes Spiel zu bauen, solltest du ein paar kleine Zwischenschritte umsetzen.

#### PHASE 1: Der Einstieg in die Bedienung
Mache dich zuerst mit dem Programm und seinen Funktionen vertraut.<br>
💡 Plane für die folgenden Funktionen maximal 30 Minuten ein: (1) Mapping, (2) Character Editor, (3) Datenbank, (4) Events

#### PHASE 2: Ideenfindung und Planung
Nach dem grundlegenden Ausprobieren folgt in der zweiten Phase die Grobplanung deiner eigenen Spielidee. Sammle deine Ideen und halte sie in Stichpunkten fest. Danach kannst du das Gerüst deines Spiels programmieren und gestalten. Beantworte jedoch vorher für dich folgende Fragen:
* Worum geht es in meiner Geschichte überhaupt? Möchte ich in meinem Spiel ein bestimmtes Thema bearbeiten? Was muss ich dafür im Vorfeld recherchieren?
* Wo, wann und in welchem Setting (Fantasy, Science Fiction …) spielt meine Geschichte?
* Wer ist meine Hauptfigur? Welche Vorgeschichte hat sie?
* Welche Hauptaufgabe soll es in meinem Spiel geben?
* Welche Motivation hat mein Held?
* Welche Probleme treten beim Lösen der Hauptaufgabe auf und wie können sie gelöst werden?
* Was ist das Ziel bzw. das Ende des Spiels?

💡 Bei der Entwicklung deiner Geschichte könnte dir die „Heldenreise“ als Vorbild dienen.

#### PHASE 3: „Testing“
Baue das grundlegende „Skelett“ deines Spiels. Die Prototypen deines Spiels sollten von deinen Freunden oder Projektpartnern getestet werden, wie es auch bei professionellen Spieleproduktionen geschieht. Je mehr Feedback du von anderen erhältst, desto leichter kannst du Flüchtigkeitsfehler beheben. Anschließend kannst du dein Spiel anpassen und es erneut testen lassen. Dies kannst du so lange wiederholen, bis du voll und ganz damit zufrieden bist.

#### PHASE 4: Details
Wenn das Grundgerüst steht und die wichtigsten Funktionen reibungslos klappen, kannst du dich den Details zuwenden (Deko, Nebenquests, Hindernisse …). Wenn du Bilder oder Musikdateien anderer Künstler verwendet hast, vergiss die Credits und die Danksagung nicht.

### PROGRAMMÜBERSICHT
Nachdem du ein neues Projekt erstellt hast (Datei → Neues Projekt), kannst du dich erst einmal mit der Programmoberfläche vertraut machen.
<br>*Was ist wo? Und was passiert da jeweils?*<br>
Die vier wichtigsten Funktionen für den Anfang sind deine Maps, die Datenbank, die Eventfunktion und die Kartenbaufunktion.

<div class="img-wrap-center">
<img src="/img/img_tools_gaming_4/bild_a1.jpg" style="width: 100%; display: inline-block">
<div class="caption" style="text-align: right"></div>
</div>

### RPG Maker – Grundlagen
{% include content-infobox.liquid float="right" image="true" width="30%" src="/img/img_tools_gaming_4/bild_b1.jpg" copy="Das Gestalten und Programmieren der Map wird über diese drei Funktionen gesteuert. Achte darauf, in welchem Modus du dich jeweils befindest." %}

* 🎴 Karte<br>In diesem Modus kannst du deine Map gestalten: Du kannst einzelne Teile der Hintergründe, Gegenstände und Charaktere nach Belieben verändern oder selbst etwas zeichnen.
* 📅 Events<br>In diesem Modus fügst du an bestimmten Stellen Ereignisse ein, die bei Betreten der betreffenden Felder auf der Map ausgelöst werden. (z.B.: In diesem Busch findet ihr ein Item oder Ihr betretet einen neuen Raum)
* 🎯 Regionen<br>Hier kannst du bestimmte Bereiche deiner Map markieren und festlegen, was dort jeweils passieren soll. (z.B.: In einer Baumgruppe (Region 1) erscheinen zufällig immer nur Gegner A und B, in einer Region mit Steinen (Region 2) erscheint immer nur Gegner C)
* 🎴 Karten-Ebenen<br>Es gibt zwei Hauptebenen: eine für den Hintergrund (z.B. Gras, Sand, Wasser …) und eine für darauf liegende Gegenstände (z.B. Büsche, Steine, Bäume …). Aus diesen Ebenen setzt du deine Map zusammen. Zuerst solltest du den Hintergrund definieren und erst dann Objekte hinzufügen. Für die meisten Objekte ist schon eingestellt, ob du durch sie hindurchlaufen kannst oder an ihnen abprallst. Solltest du die Eigenschaften der Objekte verändern wollen, kannst du das folgendermaßen machen: Öffne die Datenbank (F9). Dort kannst du unter „Tilesets“ die Eigenschaften der Umgebung und der Objekte bearbeiten.
* Die Spielfigur verändern:<br>Öffne in der Menüleiste den Charaktergenerator. Erstelle deinen Charakter und speichere ihn ab. Danach öffnest du die Datenbank (F9) und änderst das Maximum. Dort kannst du deinen neu erstellten Charakter bearbeiten, ihn mit Gegenständen ausrüsten, die Klasse einstellen usw. Danach musst du im System (13. Tab in der Datenbank) unter „Startgruppe“ noch einstellen, welche Helden du zu Beginn deines Spiels steuerst. [Zum Bild](/img/img_tools_gaming_4/bild_c1.jpg)
* 🎴 Kartengröße & -namen verändern<br>Nach dem Öffnen eines neuen Projekts siehst du links (etwa mittig) dein Projekt und darunter die Map. Mit einem Rechtsklick auf „Maps“ lassen sich die Karteneinstellungen öffnen. Dort kannst du u.a. den Namen der Map und auch ihre Größe bearbeiten.
* 👱 Startposition der Spielfigur<br>Gehe in der Menüleiste (ganz oben) auf den Reiter „Modus“ und dann auf „Events“. Auf der Map erscheint nun ein Gitternetz. Jetzt kannst du deine Spielfigur mithilfe der linken Maustaste verschieben oder durch Rechtsklick auf ein Feld ihre Startposition festlegen.
* 🦹🏽 Gegner einbauen<br>Nachdem du die Regionen der Map festgelegt hast, kannst du sie mit Gegnern besetzen. Dafür gehst du in die Karteneinstellungen und stellst bei „Zufallskämpfe“ die Gegner und deren Regionen ein. Über die Datenbank (F9) kannst du unter dem Reiter „Feinde“ noch einstellen, wie viele Erfahrungspunkte, Gold und Gegenstände der Spieler nach dem Sieg über diesen Feind erhält.
* 🎴 Von einer Karte zur nächsten:<br>Nachdem du die Maps (also die, auf der du bist, und die, auf die du gehen willst) fertiggestellt und dir einen Punkt ausgesucht hast, wo du einen Übergang von der ersten zur zweiten Map einfügen willst (z.B.: von draußen in das Innere eines Hauses), wählst du den Modus „Events“ aus. Klicke mit der rechten Maustaste auf die Stelle, wo dieses Event stattfinden soll, und wähle „neues Event“ aus. Dann öffnet sich ein Event-Fenster, in dem du diverse Einstellungen vornehmen kannst. [Zum Bild](/img/img_tools_gaming_4/bild_c1.jpg)

### Zusatzmaterial für den Einstieg:
* Ein paar Übungen für die ersten Schritte findest du als [PDF hier](https://drive.google.com/file/d/1h-WEQ-oEY0K35jMiUnVE75dGQPaY_LiF/view?usp=sharing).
* Wie programmiere ich eine Quest? Zunächst ist es wichtig, dass du dich mit Bedingungsabfragen, Schaltern und Variablen beschäftigst.
    * Anhand dieses Beispiels kannst du sehen, wie Bedingungsabfragen funktionieren: [Bedingungsabfragen](https://www.dropbox.com/s/44mx87nnlpuh5eo/RPG%20Maker%20Tutorial%20Bedingungsabfrage.pdf?dl=0)
* Hier kannst du sehen, wie Eigenschalter erstellt werden und funktionieren: [Eigenschalter](https://www.dropbox.com/s/so54k3n948qnhny/RPG%20Maker%20Tutorial%20Eigenschalter.pdf?dl=0)
* Hier kannst du sehen, wie Variablen erstellt werden und funktionieren: [Variablen](https://www.dropbox.com/s/ym77x6lzi1fv4zr/RPG%20Maker%20Tutorial%20Variablen.pdf?dl=0)


<p class="link-list">
    <span class="link-list-headline">Weiterführende Links</span>
    <a class="external-link" href="https://store.steampowered.com/app/206440/To_the_Moon/?snr=1_tags_4__201" target="_blank">Beispielspiel: Schlüpfe in das Leben von Johnny - to the Moon</a>
    <a class="external-link" href="https://store.steampowered.com/app/318130/Doom__Destiny/?snr=1_tags_4__201" target="_blank">Beispielspiel: ein phantastisches Abenteuer - Doom & Destiny</a>
    <a class="external-link" href="https://play.google.com/store/apps/details?id=com.tscs.pixellutherrelease&hl=de" target="_blank">Ein Spiel zu Martin Luthers Leben, gebaut von Jugendlichen - Pixel Luther</a>
    <a class="external-link" href="https://forums.rpgmakerweb.com/index.php" target="_blank">Das Community-Forum von RPG Maker (englischsprachig)</a>
    <a class="external-link" href="http://www.rpg-studio.org/forum/index.php" target="_blank">Eine deutschsprachige Plattform findest du hier</a>
    <a class="external-link" href="https://www.youtube.com/user/NefertarisTutorials/videos" target="_blank">Toll Video-Tutorials findest du hier</a>
</p>

