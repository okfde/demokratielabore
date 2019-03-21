---
tool: tool1
title: "Programmieren lernen mit Construct: 2D-Gamedesign"
subtool: subtool19
owner: "owner2"
layout: untertool
hide_hero: true
teaser: |
    Du hast schon etwas Vorerfahrung mit anderen Gamedesign-Tools? Dann ist Construct genau das Richtige!
copy-infobox: |
    <ul><li>Hast du schon Vorerfahrungen mit anderen Gamedesign-Tools? Construct wirkt zunächst komplex. Wenn du aber schon ein paar Spiele entwickelt hast (und Wenn-Dann-Befehle, Variablen, Sieg- und Game-over-Bedingungen nichts Neues für dich sind), verkürzt es dir nach kurzer Einarbeitungszeit viele Wege. Starte trotzdem mit sehr kleinen Projekten – Construct kann zeitintensiv sein!</li><li>Wie wichtig sind dir die Grafik deines Spiels und die Auswahl an verfügbaren Objekten? Bei diesem Programm liegt der Fokus auf der schnellen Umsetzung deiner Ideen. Das Hinzufügen von eigenen Grafiken, Sounds und Spielmechaniken ist bei diesem Tool notwendig – und erlaubt dir eine Freiheit, die nur wenige andere Programme bieten.</li><li>Möchtest du programmieren lernen? Dann ist Construct ein guter Einstieg, weil du keine „richtige“ Sprache dafür erlernen musst und es dir die Programmierlogik auf einfache Weise näherbringt.</li></ul>
---
{% include content-infobox.liquid width="50%" float="right" headline="Bevor du startest, frage dich Folgendes:" copy=page.copy-infobox %}

**Was kann ich mit dem Tool machen?**<br>
*Construct ist ein 2-D-Gamedesign-Programm, in dem du dein eigenes Spiel gestalten kannst. Es ist eher für Fortgeschrittene geeignet, da es keine fertigen Objekte benutzt, sondern alles von dir selbst gestaltet werden muss. Das gibt dir aber auch mehr Freiheiten. Du kannst damit Spiele verschiedener Genres bauen: Jump’n’Runs, Point’n’Click Adventures, Rollen- und Strategiespiele … Da alles in HTML 5 erstellt wird, können deine selbst gebauten Spiele zudem auf allen Geräten laufen, die einen Browser haben, also z.B. auch auf deinem Smartphone, inklusive all seiner Sensoren (GPS, Neigung, Lautstärke, Licht etc.). Auch kannst du problemlos Spielcontroller anschließen und ihre Knöpfe umprogrammieren.*

## Tutorial
### SYSTEMVORAUSSETZUNGEN:
Construct gibt es in zwei Varianten:
[Construct 2](https://www.scirra.com/construct2): Du benötigst Windows XP oder ein neueres Windows-Betriebssystem. Du musst das Programm herunterladen, danach kannst du aber auch offline loslegen. Construct 2 bietet eine sehr große Auswahl an Plugins (Zusatzfunktionen, die von Leuten bereitgestellt werden und hinzugefügt werden können), ist allerdings nur auf Englisch verfügbar. In der kostenlosen Version kannst du 100 Events (Code-Zeilen) auf vier Ebenen anlegen. Das reicht für die meisten Projekte völlig aus.
[Construct 3](https://www.construct.net/en): Die aktuelle Construct-Version läuft direkt im Browser, d.h. auf jedem Gerät, mit dem du ins Internet kommst. Ist sie erst einmal geöffnet, kannst du auch offline weiterarbeiten. Übersetzungen werden unterstützt; Deutsch befindet sich allerdings noch in der Entwicklungsphase. In der kostenlosen Version kannst du 25 Events (bei kostenloser Registrierung 50) auf zwei Ebenen anlegen. Das genügt für kleine Projekte.
Am Ende kannst du dein Werk herunterladen (exportieren) und entweder auf einer eigenen Webseite oder auf den Videospielseiten Kongregate oder Scierra Arcade veröffentlichen.

### ERSTE SCHRITTE:
Bevor du anfängst, dein komplettes Spiel zu bauen, solltest du ein paar kleine Zwischenschritte umsetzen.

#### PHASE 1: Der Einstieg in die Bedienung
Mache dich zuerst mit dem Programm und seinen Funktionen vertraut. Dafür solltest du ca. eine Stunde einplanen. Wenn du auf diese Weise herausgefunden hast, welche Auswahlmöglichkeiten du hast, kannst du mit der Planung deines ersten Spiels anfangen!
* Überblick über alle Fenster verschaffen (Eigenschaften, Spielebene, Tabs für Layout und Events, Projekt-, Ebenen- und Objektübersicht)
* Objekte anlegen (Sprites als Spielfigur und Plattform)
* Verhalten (z.B. dem Sprite der Spielfigur als Eigenschaft das Verhalten „Platformer“ zuordnen, damit du die Figur steuern kannst; dem Sprite der Plattform das Verhalten „solid“ zuordnen, damit du auf ihr stehen kannst)
* Programmieren (einen Event-Tab öffnen und bei „Wenn“ und „Dann“ die verfügbaren Befehle durchstöbern)
Alternativ kannst du zum Start auch eines oder mehrere der zahlreichen Templates öffnen. Dabei handelt es sich um bereits angelegte „Baupläne“ für verschiedene Spielgenres, in denen du nur noch Level bauen und Grafiken einfügen musst.

#### PHASE 2: Ideenfindung und Planung
Nach dem grundlegenden Ausprobieren folgt in der zweiten Phase die Entwicklung deiner eigenen Spielidee. Sammle deine Ideen und halte sie in Stichpunkten fest. Danach kannst du das Gerüst deines Spiels programmieren und gestalten. Beantworte jedoch vorher für dich folgende Fragen:
* Worum geht es in meinem Spiel überhaupt? Welches Thema möchte ich darin behandeln?
* Welche Mechaniken (z.B. Punkte sammeln, Gegenstände finden, Mission erfüllen …) möchte ich unbedingt einbauen? Und welches Spielgenre (Strategiespiel, Rennspiel, Rollenspiel …) passt zum Thema meines Spiels?
* Auf welchem Gerät und wie soll mein Spiel spielbar sein? Wird es z.B. ein Handyspiel, bei dem die Spielenden sich bewegen müssen, oder spielen sie an einem großen Screen gegeneinander?
* Was ist das Besondere meines Spiels im Vergleich zu anderen Spielen?
* Für wen (welche Zielgruppe) mache ich das Spiel?

#### PHASE 3: „Testing“
Baue das grundlegende „Skelett“ deines Spiels. Die Prototypen (also einfache, unfertige Versionen) deines Spiels sollten von deinen Freund*innen oder Projektpartner*innen getestet werden, wie es auch bei professionellen Spieleproduktionen geschieht. Je mehr Feedback du von anderen erhältst, desto leichter kannst du Flüchtigkeitsfehler beheben. Anschließend kannst du dein Spiel anpassen und es erneut testen lassen. Dies kannst du so lange wiederholen, bis du voll und ganz damit zufrieden bist.

{% include content-infobox.liquid width="100%" border="yes" float="left" headline="" copy="Achtung! Construct verleitet sehr dazu, sich in Grafiken zu verlieren. Nutze zunächst einfache Boxen und schnell skizzierte Platzhalter für größere Bilder! Verzichte auf Sounds und konzentriere dich auf das Austesten deiner Haupt-Spielmechanik!" %}

#### PHASE 4: Details
Wenn das Grundgerüst steht und die wichtigsten Funktionen reibungslos klappen, kannst du dich den Details zuwenden (Deko, Nebenaufgaben, Hindernisse …).

### PROGRAMMÜBERSICHT
Nachdem du dir ein leeres Blatt in der gewünschten Größe erstellt hast, solltest du dir zunächst alles in Ruhe ansehen:

<div class="img-wrap-center">
<img src="/img/img_tools_gaming_6/construct_1.png" style="width: 100%; display: inline-block">
<div class="caption" style="text-align: right"></div>
</div>

#### Die Idee von Construct
Das Grundprinzip ist schnell erklärt: Erstelle Objekte, die du mit einem Klick auf sie oder in den rechten Seitenleisten auswählen und deren Eigenschaften du dann im linken Fenster verändern kannst. Jedes Layout entspricht einem Bildschirm, den die Spielenden sehen können. Jedes Layout kann einer Eventseite zugewiesen werden, auf der du programmieren kannst, wie sich alle Objekte verhalten sollen. Keine Sorge – das Programmieren ist visuell, du brauchst also keine Programmiersprache zu erlernen.

💡 Das [allererste Video](https://www.youtube.com/watch?v=5RlSmkSbleI) von Construct verdeutlicht diese Idee sehr gut.

{% include content-float-image.liquid float="left" src="/img/img_tools_gaming_6/construct_2.png" %}
#### Wie füge ich Objekte hinzu?
Klicke mit der rechten Maustaste in die Spielfläche und wähle „Insert new object“, um ein Fenster zu öffnen, in dem du verschiedenste Objekte zum Hinzufügen angezeigt bekommst. Das können Grafiken (Sprites) sein, aber auch Text und besondere Eingabemethoden wie Tastatur, Gamepad, Touch und Maus.

#### Was sind Sprites?
Sprites sind die einfachsten Objekte in Construct: die Grafiken. Sie lassen sich im Grafik-Editor (Doppelklick auf einen Sprite) öffnen und animieren. Alternativ kannst du bestehende Grafiken einfach auf die Spielfläche oder in den Animationsbereich (Animation Frames) eines Sprites ziehen.

<div class="img-wrap-center">
<img src="/img/img_tools_gaming_6/construct_3.png" style="width: 100%; display: inline-block">
<div class="caption" style="text-align: right"></div>
</div>

💡 Stellst du bei der Animation „Loop=0“ ein, dann wiederholt sie sich unendlich!

#### Wie nutze ich Verhalten?
Du kannst jedem Objekt „Behaviors“, also Verhaltensweisen, zuweisen. Sie ermöglichen es deiner Figur, sich zu bewegen, Dinge aneinander abprallen zu lassen oder so zu bewegen, dass die Kamera bestimmten Figuren folgt, oder Figuren wie Dinge aussehen zu lassen. Und all das, ohne dass du programmieren musst!

💡 Tipps für die Navigation<br>
* Strg + Mausrad	 = Rein- und rauszoomen
* Leertaste + Mausbewegung = Ausschnitt verschieben
* Strg + Linksklick auf Objekt = Objekt kopieren

#### Wie funktioniert das Programmieren?
Einfach! Mit Klick auf „Add event“ wählst du in den folgenden Fenstern aus, WANN etwas passieren soll (z.B. Taste gedrückt, Objekt berührt …), und bei „Add action“ wählst du aus, WAS passieren soll. Hier wird bei der Berührung der Spielfigur mit einer Münze die Münze ausgeblendet und 1 Punkt hinzugefügt.

<div class="img-wrap-center">
<img src="/img/img_tools_gaming_6/construct_4.png" style="width: 100%; display: inline-block">
<div class="caption" style="text-align: right"></div>
</div>

<p class="link-list">
    <span class="link-list-headline">Beispiele und Anregungen</span>
    <a class="external-link" href="https://www.scirra.com/construct2/games/airscape" target="_blank">In diesem Platformer-Spiel steuerst du einen Oktopus, der in einer anderen Welt gestrandet ist.</a>
    <a class="external-link" href="https://www.scirra.com/construct2/games/the-next-penelope" target="_blank">Rennspiel mit dem Maximum an möglichen Effekten.</a>
    <a class="external-link" href="https://moon-light-games.itch.io/quick-trigger" target="_blank">Ein simples Handyspiel für zwei, das im Wilden Westen spielt und in nur einer Woche von einem 14-jährigen Jugendlichen entwickelt worden ist.</a>
</p>

<p class="link-list">
    <span class="link-list-headline">Weiterführende Links</span>
    <a class="external-link" href="https://www.scirra.com/tutorials/37/de/de" target="_blank">Das offizielle Tutorial für Einsteigende</a>
    <a class="external-link" href="https://www.scirra.com/tutorials/top/page-1?lang=9&dmode=detailed" target="_blank">Alle deutschen Tutorials im offiziellen Forum (auf „de“ klicken)</a>
    <a class="external-link" href="https://demokratielabore.de/workshops/game-of-thoughts" target="_blank">Schnellanleitung für Plattform-Spiele im Material zum „Game of Thoughts“-Workshop der Demokratielabore</a>
    <a class="external-link" href="https://www.construct.net/en/forum/extending-construct-2/addons-29/c2-plugins-and-behaviors-list-42712" target="_blank">Construct 2 Plugins</a>
    <a class="external-link" href="https://www.construct.net/en/make-games/addons" target="_blank">Construct 3 Plugins</a>
    <a class="external-link" href="https://www.youtube.com/watch?v=69_Ou-AUllI" target="_blank">Deutsche Youtube-Kurzanleitung</a>
    <a class="external-link" href="https://www.youtube.com/user/ScirraVideos" target="_blank">Offizieller Youtube-Kanal mit vielen Tutorials</a>
</p>

