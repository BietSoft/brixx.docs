# Brixx-Decision-Script

### Package: `@brixx/decision-script`

### Version: `1.1.0` (Release, 08.07.2023)

#

# What is Brixx-Decision-Script

## Decisions are the most important part of programming

**Brixx-Decision-Script** is a free JavaScript library for rule-based decision systems. With Brixx-Decision-Script and the integrated **Rule-Engine**, the programming can be reduced to a minimum and replaced by a technical configuration (low-code development) for extensions and adjustments via rules with a Brixx decision table. In particular, with [Brixx-Script (smart web components)](https://brixx.it/brixx-script.html) as Brixx HTML elements or as Brixx-Script components in JavaScript applications and frameworks, rapid integration into any HTML document is possible and also supports JavaScript environments such as [Node.js®](https://nodejs.org/en/)(cross platform JavaScript runtime environment). Rules can be easily managed in an external decision table definition file with the ([DMN (Decision Model Notation)](https://en.wikipedia.org/wiki/Decision_Model_and_Notation)). No programming tasks or complicated deployments are required for changes or adjustments and basic configurations from a decision table definition file can also be expanded with Brixx-Decision-Script HTML elements. Brixx-Decision-Script was developed for systems for automation and process control with [BPMN (Business Process Model and Notation)](https://de.wikipedia.org/wiki/Business_Process_Model_and_Notation) and is used for our web-based process engine **Brixx-Process-Script**. With Brixx-Decision-Script you can implement processes in your web projects or your own process engine systems with JavaScript. For this we use our Brixx script to create a building bricks-oriented project architecture.

## Why a rules engine especially for JavaScript?

We have decided to publish Brixx-Decision-Script as a decision table and rule engine for JavaScript. As a result, Brixx-Decision-Script can be used in common frameworks, development environments, programming languages and platforms as a web application or web service for low-code development without a special platform. In addition, Brixx-Decision-Script enables direct integration into an HTML document, which makes it special. This also gives non-programmers the opportunity to design dynamic websites. Ask about integration into your applications, whether Python, Java, as a RESTful API or as a Docker solution.

#

# Was ist Brixx-Decision-Script

**Brixx-Decision-Script** ist eine kostenlose JavaScript-Bibliothek für regelbasierte Entscheidungssysteme. Mit Brixx-Decision-Script und der integrierten **Regel-Engine** kann die Programmierung auf ein Minimum reduziert und durch eine technische Konfiguration (Low-Code-Entwicklung) für Erweiterungen und Anpassungen über Regeln mit einer Brixx-Entscheidungstabelle ersetzt werden. Insbesondere mit [Brixx-Script (Webkomponenten)](https://brixx.it/brixx-script.html) als Brixx HTML-Elemente oder als Brixx Script-Components in JavaScript-Anwendungen und Frameworks ist eine schnelle Integration in jedes HTML-Dokument möglich und unterstützt auch JavaScript-Umgebungen wie [Node.js®](https://nodejs.org/en/) (plattformübergreifende JavaScript-Laufzeitumgebung). Regeln können mit der ([DMN (Decision Model Notation)](https://en.wikipedia.org/wiki/Decision_Model_and_Notation)) einfach in einer externen Entscheidungstabellen-Definitionsdatei verwaltet werden. Für Änderungen oder Anpassungen sind keine Programmieraufgaben oder komplizierten Bereitstellungen erforderlich und grundlegende Konfigurationen aus einer Entscheidungstabellen-Definitionsdatei können auch mit Brixx-Decision-Script HTML-Elementen erweitert werden. Brixx-Decision-Script wurde für Systeme zur Automatisierung und Prozesssteuerung mit [BPMN (Business Process Model and Notation)](https://de.wikipedia.org/wiki/Business_Process_Model_and_Notation) entwickelt und wird für unsere webbasierte Prozess-Engine **Brixx-Process-Script** verwendet. Mit Brixx-Decision-Script können Sie Prozesse in Ihren Webprojekten oder Ihren eigenen Prozess-Engine-Systemen mit JavaScript implementieren. Hierzu verwenden wir unser Brixx-Script, um eine bausteinorientierte Projektarchitektur zu erstellen.

## Warum eine Regel-Engine speziell für JavaScript?

Wir haben uns entschieden, Brixx-Decision-Script als Entscheidungstabelle und Regel-Engine für JavaScript zu veröffentlichen. Dadurch kann Brixx-Decision-Script in gängigen Frameworks, Entwicklungsumgebungen, Programmiersprachen und Plattformen als Webanwendung oder Webservice für Low-Code-Entwicklung ohne spezielle Plattform verwendet werden. Darüber hinaus ermöglicht Brixx-Decision-Script die direkte Integration in ein HTML-Dokument, was es besonders macht. Dadurch erhalten auch Nicht-Programmierer die Möglichkeit, dynamische Websites zu gestalten. Fragen Sie nach der Integration in Ihre Anwendungen, egal ob Python, Java, als RESTful API oder als Docker-Lösung.

-   [Erste Schritte](#getstarted)
    -   [Brixx Web-Baustein [brixx-check-age] erstellen](#brixx-check-age-web)
-   [Brixx-Decision-Script Tutorial](#tutorial)
    -   [Brixx Web-Baustein [brixx-check-age] erweitern](#brixx-check-age-styles)
    -   [Node.js Application [brixx-check-age] erstellen](#brixx-check-age-node)
    -   [JavaScript Web-Application [brixx-check-age] erstellen](#brixx-check-age-class)
    -   [Brixx Web-Baustein mit dynamischem content erstellen](#brixx-check-age-dynamic)
-   [Brixx-Decision-Script Referenz](#reference)
-   [Downloads](#downloads)

# <div id='getstarted' /> Erste Schritte

Wir verwenden Brixx-Script zur Erstellung einer **Entscheidungstabelle** (decision table). Brixx-Script ist Bestandteil in Brixx-Decision-Script und ermöglicht einen minimalen Programmieraufwand und schnelle Integration in ein HTML-Dokument (siehe [Brixx-Script Dokumentation](../brixx-script/README.md)). Dabei ist neben der JavaScript-Engine für Web-/Entwickler auch eine komplette Erstellung im HTML-Code für Web-/Designer möglich. Es können auch beide „Welten” kombiniert werden, was Brixx-Decision-Script besonders interessant und leistungsfähig macht. Im ersten Schritt erstellen wir einen einfachen Brixx Web-Baustein (Brixx web component) mit einer Entscheidungstabelle für eine Altersüberprüfung (`brixx-check-age-web`) und anschließend als Node.js Application (`brixx-check-age-node`).

## <div id='brixx-check-age-web' /> Brixx Web-Baustein [brixx-check-age] erstellen

Wir erstellen eine Brixx Entscheidungstabelle für eine Altersüberprüfung mit Aufruf einer entsprechenden „altersgerechten“ Webseite. Dazu erstellen wir einen Ordner `./components` im Projektordner `[brixx-check-age-web]` wodurch die Projekt-Ordnerstruktur wie folgt aussieht.

    brixx-check-age-web/
    ├── components/
    │   └── brixx-check-age.js
    └── index.html

Darin erstellen wir den Brixx Web-Baustein `[brixx-check-age]` in der Brixx Script-Component Datei `brixx-check-age.js`, und zuerst die Funktion `checkDecisionTable` ([JavaScript Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp)), die wir als sogenannte _Callback_-Funktion nur zur Überprüfung der Ergebnisse während der Entwicklung verwenden (dient aber auch als Beispiel für eine weiterführende Programmierung).

    // Check decision table callback function (optional)
    const checkDecisionTable = (output) => {
        console.log("Output:", output);
    }

> Wir verwenden in den Beispielen [ECMAScript 2015+](https://en.wikipedia.org/wiki/ECMAScript) (ES6) als JavaScript Standard und erstellen im Beispiel für die Callback-Funktion eine [JavaScript Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp). Das wird nicht in allen älteren Browsern oder Umgebungen unterstützt, und gleichen wir mit Babel aus. Das hat den Vorteil dass man mit dem aktuellem Standard entwickeln kann, und sich nicht um eine Abwärtskompatibilität kümmern muss. Dadurch muss man den Code später nicht anpassen sondern „nur“ Babel weglassen; ist aber auch notwendig, da Benutzer unterschiedliche Browser und Versionen verwenden, und man oftmals keinen Einfluss darauf hat.

Die Callback-Funktion als klassisches Function-Object, oder was Babel daraus macht.

    // Check decision table callback function (optional)
    function checkDecisionTable(output) {
        console.log("Output:", output);
    }

Die Callback-Funktion kann optional verwendet werden, und wird nach Überprüfung der Entscheidungstabelle aufgerufen (Callback). Die Funktion erhält im Beispiel das Ergebnis (Output) der Überprüfung im Parameter `output` und gibt das Ergebnis in der Browserkonsole aus.

> **Tip:** Browserkonsole öffnen mit `Strg + Shift + J` bei Windows oder `Command [⌘] + Option-Taste + J` bei MacOS

<img src="../assets/images/browserconsole.webp" style="margin-bottom: -5px; width: 600px;" />
  
Werkzeuge für Webentwickler mit Konsole im Firefox Browser ( `Strg + Shift + I`)

Anschließend erstellen wir ein Standard `Brixx.element` mit der Brixx Entscheidungstabelle.

    // Create a Brixx default element
    Brixx.element = (
        <div>
            <p>HTML element &lt;brixx-check-age&gt; created with Brixx-Script.</p>
            <DecisionTable>
                <ul>
                    <li>Baby (0 years old) - <i>It's still a baby!</i></li>
                    <li>Preschool (under 5 years old) - <i>Unfortunately too young!</i></li>
                    <li>Kids (under 13 years old) - <i>https://www.youtube.com/kids/</i></li>
                    <li>Teens (13 years or older) - <i>https://www.youtube.com/</i></li>
                </ul>
                <Input name={"age"} type={"number"}>
                    <div>Please enter age</div>
                    <Field />
                </Input>
                <Output name={"info"}>
                    <Field readonly />
                </Output>
                <Output name={"url"}>
                    <Link />
                </Output>
                <Rule age={""} priority={30} info={"Please enter a valid age!"} url={"https://github.com/BietSoft/brixx.docs/"} />
                <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
                <Rule age={"< 5"} priority={20} info={"Unfortunately too young!"} />
                <Rule age={">= 13"} url={"https://www.youtube.com/"} />
                <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
                <Check button label={"Check age"} action={checkDecisionTable} />
            </DecisionTable>
        </div>
    );

Mit Brixx-Decision-Script werden HTML-Elemente zur Erstellung für eine Brixx Entscheidungstabelle im HTML-Dokument zur Verfügung gestellt, und wir erstellen die Brixx Entscheidungstabelle mit dem HTML-Element `<DecisionTable>`.

    ...
    <DecisionTable>
        ...
    </DecisionTable>
    ...

Mit dem HTML-Element `<Input>` erstellen wir ein Eingabefeld zur Dateneingabe mit dem HTML-Attribut (Eigenschaft) `name` und der optionalen Eigenschaft `type` für die Brixx Entscheidungstabelle. Zusätzlich erstellen wir im `<Input>`-Bereich eine Benutzer-Information und mit dem HTML-Element `<Field>` wird ein Brixx Eingabefeld erzeugt. Für die Entscheidungstabelle kann es beliebig viele Eingabefelder geben.

    ...
    <Input name={"age"} type={"number"}>
        <div>Please enter age</div>
        <Field />
    </Input>
    ...

Eingabefelder sind optional und müssen nicht verwendet werden. Dateneingaben können auch aus einem HTML-Formular, Webservice oder einer Datenbank kommen, und die verschiedenen Eingabearten mit Brixx-Decision-Script auch kombiniert werden.

> **Tip:** Brixx-Decision-Script HTML-Elemente können wie HTML Standard Elemente mit CSS-Stylesheets für eigen Anforderungen angepasst werden.

Danach werden Ausgabefelder erstellt und wir erstellen mit dem HTML-Element `<Output>` die Ausgabefelder `info` und `url`. Für die Entscheidungstabelle kann es beliebig viele Ausgabefelder geben. Wir verwenden für das Ausgabefeld _info_ ein HTML-Element `<Field>`, und wie bei der Dateneingabe wird ein „Eingabefeld” erzeugt, erhält aber zusätzlich die Eigenschaft `readonly`. Dadurch wird das Feld zur Datenausgabe verwendet und kann nicht beschrieben werden. Eine Besonderheit ist das HTML-Element `<Link>` für das Ausgabefeld _url_. Enthält die Datenausgabe eine gültige URL-Adresse wird automatisch ein Browser-Fenster mit der URL geöffnet. Es gibt noch eine Reihe weiterer Einstellungsmöglichkeiten (siehe [Brixx-Decision-Script Referenz](#reference)).

    ...
    <Output name={"info"}>
        <Field readonly />
    </Output>
    <Output name={"url"}>
        <Link />
    </Output>
    ...

Ausgabefelder sind optional und müssen nicht verwendet werden. Datenausgaben können auch, wie im Beispiel, mit einer Callback-Funktion verarbeitet werden, und die verschiedenen Ausgabeearten mit Brixx-Deision-Script auch kombiniert werden.

Das Herzstück der Brixx Entscheidungstabelle sind die **Regeln** (rules). Eine Regel wird mit dem HTML-Element `<Rule>` erstellt und wie bei anderen auf [DMN (Decision Model Notation)](https://en.wikipedia.org/wiki/Decision_Model_and_Notation) basierenden Systemen verwendet. Dabei werden die Bedingungen für die Dateneingabe, im Beispiel für das Eingabefeld _age_, sowie die Ergebnisswerte für die Ausgabefelder _info_ und _url_ erstellt. Dabei müssen nicht für jede Regel alle Eingabe- oder Ausgabefelder verwendet werden.

    ...
    <Rule age={""} priority={30} info={"Please enter a valid age!"} url={"https://github.com/BietSoft/brixx.docs/"} />
    <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
    <Rule age={"< 5"} priority={20} info={"Unfortunately too young!"} />
    <Rule age={">= 13"} url={"https://www.youtube.com/"} />
    <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
    ...

Für die Entscheidungstabelle können beliebig viele Regeln definiert werden und bei „überschneidenden” Regeln können Prioritäten mit der optionalen Eigenschaft `priority` vergeben werden. Das ist notwendig da wir keine `hitPolicy` definiert haben und standardmäßig `Priority` verwendet wird. Das bedeutet, die erste gefundene passende Regel unter Berücksichtigung der Prioritäten wird ausgegeben (siehe [Brixx-Decision-Script Referenz](#reference)).

Mit dem HTML-Element `<Check>` und den Eigenschaften `button` und `label` wird eine Schaltfläche erstellt. Die Eigenschaft `action` ist optional und legt die _Callback_-Funktion fest, die nach Überprüfung der Entscheidungstabelle aufgerufen werden soll. Im Beispiel wird die Funktion `checkDecisionTable` vom Anfang aufgerufen.

> Die Callback-Funktion wird für die Eignenschaft `action` als Objekt (ohne Anführungszeichen) übergeben und nicht der Objektbezeichner (String)

    ...
    <Check button label={"Check age"} action={checkDecisionTable} />
    ...

Abschließend wird das `Brixx.element` als HTML-Elemet `<brixx-chack-age>` registriert.

    // Register a Brixx HTML-Element <brixx-check-age>
    Brixx.registerElement({ name: "check-age" });

Kompletter Brixx Web-Baustein in der Brixx Script-Component Datei `./components/brixx-check-age.js`

    // Check decision table callback function (optional)
    const checkDecisionTable = (output) => {
        console.log("Output:", output);
    }

    // Create a Brixx default element
    Brixx.element = (
        <div>
            <p>HTML element &lt;brixx-check-age&gt; created with Brixx-Script.</p>
            <DecisionTable>
                <ul>
                    <li>Baby (0 years old) - <i>It's still a baby!</i></li>
                    <li>Preschool (under 5 years old) - <i>Unfortunately too young!</i></li>
                    <li>Kids (under 13 years old) - <i>https://www.youtube.com/kids/</i></li>
                    <li>Teens (13 years or older) - <i>https://www.youtube.com/</i></li>
                </ul>
                <Input name={"age"} type={"number"}>
                    <div>Please enter age</div>
                    <Field />
                </Input>
                <Output name={"info"}>
                    <Field readonly />
                </Output>
                <Output name={"url"}>
                    <Link />
                </Output>
                <Rule age={""} priority={30} info={"Please enter a valid age!"} url={"https://github.com/BietSoft/brixx.docs/"} />
                <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
                <Rule age={"< 5"} priority={20} info={"Unfortunately too young!"} />
                <Rule age={">= 13"} url={"https://www.youtube.com/"} />
                <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
                <Check button label={"Check age"} action={checkDecisionTable} />
            </DecisionTable>
        </div>
    );

    // Register a Brixx HTML-Element <brixx-check-age>
    Brixx.registerElement({ name: "check-age" });

### Brixx Web-Baustein verwenden

Zur Integration in ein HTML-Dokument verwenden wir für das Beispiel **Brixx-Decision-Script Standalone** vom Brixx CDN-(Content Delivery Network)-Server um eine direkte Integration der Entscheidungstabelle mit dem Brixx Web-Baustein zu ermöglichen.

    <!-- Load Brixx-Decision-Script standalone for development -->
    <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>

Brixx-Decision-Script kann von CDN-Systemen wie [jsDelivr - A free global CDN](https://www.jsdelivr.com/) verwendet werden. Hier muss beachtet werden, dass es sich z. B. bei _jsDelivr_ um ein automatisiertes System handelt, und dort nicht die Brixx-Script Standalone, sondern das Brixx-Script NPM-Package bereitgestellt wird. Das erfordert gegenüber der Dokumentation von _jsDelivr_ einen zusätzlichen Babel import.

    <!-- Load Babel -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- Load Brixx-Decision-Script from jsDelivr CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@brixx/decision-script@1.1.0/dist/index.min.js"></script>

> **Info:** Der import von _jsDelivr_ darf mit Ausnahme verwendet werden, auch wenn die Lizenzbestimmungen nicht eingehalten werden.

Der Brixx Web-Baustein `[brixx-check-age]` in der Brixx Script-Component Datei `./components/brixx-check-age.js"` wird mit einen HTML-`<script>`-Element im HTML-Dokument eingefügt.

    <!-- Include the Brixx script component files for development -->
    <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>

Für Brixx-Decision-Script Standalone verwenden wir Babel mit `type="text/babel"` um die Brixx Webkomponente in den unterschiedlichen Browsern nutzen zu können. Dann werden die Eigenschaften `data-type="module"` und `data-presets="brixx"` festgelegt, und der Brixx Web-Baustein kann als HTML-Element `<brixx-check-age>` verwendet werden. Die Eigenschaft _data-type_ ist optional und wird zum Import von ECMAScript 2015+ (ES6) Modulen benötigt. Zur Verwendung als HTML-Element werden keine weiteren Programmierkentnisse benötigt.

Jetzt müssen wir nur noch das HTML-Element `<brixx-check-age>` im `<body>`-Bereich einfügen.

    <body>
      <!-- Add the Brixx HTML element -->
      <brixx-check-age></brixx-check-age>
    </body>

Komplettes HTML-Dokument in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html>
    <head>
        <!-- Load Brixx-Decision-Script standalone for development -->
        <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>
        <!-- Include the Brixx script component files for development -->
        <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>
    </head>

    <body>
        <!-- Add the Brixx HTML element -->
        <brixx-check-age></brixx-check-age>
    </body>
    </html>

Komplettes Beispiel [[brixx-check-age-web] (ZIP-Archiv)](../assets/downloads/brixx-check-age-web.zip) herunterladen.

### Brixx Web-Baustein testen

Zum testen öffnen wir den Projektordner `[brixx-check-age]` in Visual Studio Code und starten die HTML-Datei `index.html` mit dem _Live Server_. Dazu gibt es verschiedene Möglichkeiten.

1. Klick auf `[Go Live]` in der Visual Studio Code Status Bar (`Click to run live server`)
2. Öffnen der HTML-Datei im Editor-Fenster mit der Tastenkombination `[ALT+L Alt+O]`
3. Rechtsklick auf die HTML-Datei im **Editor-Fenster** und Auswahl von `[Open with Live Server]`
4. Rechtsklick auf die HTML-Datei in der **Explorer-Ansicht** und Auswahl von `[Open with Live Server]`

    <img src="../assets/images/brixx-check-age.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual Studio Code - Explorer-Ansicht `[Open with Live Server]`

    > **Tip:** Der Browser kann bei den _Live Server_ Einstellungen unter `[Custom Browser]` festgelegt werden (`default=null`).

Die HTML-Datei `index.html` wird mit dem _Live Server_ bereitgestellt und im Standard-Browser geöffnet.

<img src="../assets/images/brixx-check-age-web-01.webp" style="margin-bottom: -5px; width: 600px;" />

Der Brixx Web-Baustein `<brixx-check-age>` im Browser-Fenster

# <div id='tutorial' /> Brixx-Decision-Script Tutorial

## <div id='brixx-check-age-styles' /> Brixx Web-Baustein [brixx-check-age] erweitern

Wie erweitern die Brixx Webkomponente `[brixx-check-age]` mit HTML Styles. Dafür erstellen wir einen Projektordner `[brixx-check-age-styles]` und kopieren die Dateien aus dem vorherigen Beispiel in den Projektordner.

### HTML Styles hinzufügen

Wir „stylen“ die Brixx Webkomponente mit **CSS** (Cascade Style Sheet) und erstellen dafür einen Ordner `./styles` im Projektordner. Wir nutzen [Bootstrap](https://getbootstrap.com/) und fügen die CSS-Datei `bootstrap.min.css` vom Cloudflare CDN-(Content Delivery Network)-Server mit einem HTML Stylesheet `<link>` im HTML-Dokument ein.

    <!-- Load Bootstrap styles from cdnjs.cloudflare.com -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet"></head>

Danach erstellen eine CSS-Datei `brixx-check-age.css` im Ordner `[styles]` für die Brixx Entscheidungstabelle und fügen die CSS-Datei im HTML-Dokument ein

    <link href="./styles/brixx-check-age.css" rel="stylesheet"></head>

Komplette Styles der CSS-Datei `brixx-check-age.css`

    body {
        margin: 10px;
    }

    .brixx-decision-button {
        padding: 0px 10px 5px;
        margin-top: 5px;
    }

    div.brixx-decision-field {
        color: #8ebf42;
        font-size: 14px;
        margin-top: 0px;
    }

    input.brixx-decision-field {
        margin-top: 2px;
    }

Die verwendeten HTML Styles dienen als Beispiel und werden im Einzelnen nicht betrachtet. Damit sieht die Projekt-Ordnerstruktur folgendermaßen aus.

    brixx-check-age-web/
    ├── components/
    │   └── brixx-check-age.js
    ├── styles/
    │   └── brixx-check-age.css
    └── index.html

Komplettes HTML-Dokument in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html>
        <head>
            <!-- Load Bootstrap styles from cdnjs.cloudflare.com -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet">
            <!-- Load Brixx-Decision-Script standalone for development -->
            <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>
            <!-- Include the Brixx script component files for development -->
            <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>
            <link href="./styles/brixx-check-age.css" rel="stylesheet">
        </head>

        <body>
            <!-- Add the Brixx HTML element -->
            <brixx-check-age></brixx-check-age>
        </body>
    </html>

Komplettes Beispiel [[brixx-check-age-stles] (ZIP-Archiv)](../assets/downloads/brixx-check-age-styles.zip) herunterladen.

### Brixx Webkomponente testen

Die Brixx Webkomponente können wir mit dem _Live Server_ testen und starten die HTML-Datei `index.html`

<img src="../assets/images/brixx-check-age-web-02.webp" style="margin-bottom: -5px; width: 600px;" />

Der Brixx Web-Baustein `<brixx-check-age>` im Browser-Fenster

## <div id='brixx-check-age-node' /> Node.js Application [brixx-check-age] erstellen

Um die Brixx Entscheidungstabelle aus dem Beispiel vorher für eine Node.js (JavaScript) app zu verwenden erstellen wir für das Beispiel den Projektordner `[brixx-check-age-node]` und weil wir mit JavaScript keine HTML-Elemete zur Definition der Entscheidungstabelle verwenden können erstellen wir als „Ersatz” die JSON-**Definitionsdatei** (Brixx decision table definition) `brixx-check-age.json` im Projektordner.

Komplette JSON-Definitionsdatei `brixx_check_age.json`

    {
        "description": "Check age",
        "hitPolicy": "Priority",
        "input": {
            "age": {
                "description": "The age to check",
                "type": "number",
                "default": 0
            }
        },
        "output": {
            "info": {
                "description": "An additional information"
            },
            "url": {
                "description": "The url to link to"
            }
        },
        "rules": {
            "No entry": {
                "age": "",
                "info": "Please enter a valid age!",
                "url": "https://github.com/BietSoft/brixx.docs/",
                "priority": 30
            },
            "Baby": {
                "age": "0",
                "info": "It's is still a baby!",
                "priority": 40
            },
            "Preschool": {
                "age": "< 5",
                "info": "Unfortunately too young!",
                "priority": 20
            },
            "Teens": {
                "age": ">= 13",
                "url": "https://www.youtube.com/"
            },
            "Kids": {
                "age": "< 13",
                "info": "Internet Safety for Kids",
                "url": "https://www.youtube.com/kids/",
                "priority": 10
            }
        }
    }

Dann erstellen wir die JavaScript-Datei (Node.js Application) `brixx-check-age.js` im Projektordner und importieren das Brixx-Decision-Script Package mit `require("@brixx/decision-script/node")` für Node.js in der Konstanten `BrixxDecisionTable`.

    // Imports
    const BrixxDecisionTable = require("@brixx/decision-script/node").default

Um das Package `@brixx/decision-script/node` in der JavaScript-Datei importieren zu können muss es installiert werden. Wir installieren das NPM-Package `@brixx/decision-script`, z.B. mit Visual Studio Code im Terminal-Fenster, im Projektordner mit `npm i @brixx/decision-script` (siehe [NPM-Packages installieren](../docs/NPM-install.md)).

    > npm i @brixx/decision-script

Dadurch wird das NPM-Package im Ordner `node_modules` installiert und die _npm_-Konfigurationsdatei `package.json` und `package-lock.json` im Projektordner erstellt. In der `package.json` Datei wird das NPM-Package mit `@brixx/decision-script` im Feld `dependencies` eingetragen.

    {
        "dependencies": {
            "@brixx/decision-script": "1.1.0"
        }
    }

Wir erweitern die `package.json` Datei, das ist nicht erforderlich, aber wir können dadurch u. a. für eine weitere Bearbeitung in Visual Studio Code in der Explorer-Ansicht die Erweiterung `[NPM-SCRIPTS]` verwenden.

Wir legen einen Namen für das Package mit dem Feld `name` fest und den Einstiegspunkt `main` für den Projektstart.

    ...
    "name": "brixx-check-age",
    "main": "brixx-check-age.js",
    ...

Danach erstellen wir das NPM-Script `start` zu starten der Node.js Application.

    ...
    "scripts": {
        "start": "node brixx-check-age.js"
    },
    ...

Abschließend entfernen das Caretzeichen ( `^` ) bei der Version wodurch nicht mehr automatisch die neueste Version von Brixx-Decision-Script installiert wird ([mehr über Versionen in npm](https://docs.npmjs.com/cli/v6/using-npm/semver)).

    ...
    "dependencies": {
        "@brixx/decision-script": "1.1.0"
    }
    ...

Komplette `package.json` Datei

    {
        "name": "brixx-check-age",
        "main": "brixx-check-age.js",
        "scripts": {
            "start": "node brixx-check-age.js"
        },
        "dependencies": {
            "@brixx/decision-script": "1.1.0"
        }
    }

Die Projekt-Ordnerstruktur sieht damit wie folgt aus.

    brixx-check-age-web/
    ├── node_modules
    ├── brixx-check-age.json
    ├── brixx-check-age.js
    ├── package-lock.json
    └── package.json

Nach dem Import vom Brixx-Decision-Script Package `BrixxDecisionTable` erstellen wir eine Liste `input_data` ([JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)), die mögliche Eingabe- oder Datenquellen für die Node.js Application repräsentieren soll, z. B. aus einem Webservice oder einer Datenbank.

    /**
    *  Set the decision table input data list to check
    *  represents e.g. data from a web service or a database
    */
    const input_data = [
        { age: "" },
        { age: 0 },
        { age: 3 },
        { age: 12 },
        { age: 13 }
    ]

Danach erstellen wir ein Objekt (Instanz) von `BrixxDecisionTable` mit dem Instanznamen `table` und geben mit einem Konfigurationsobjekt im _constructor_ mit der Eigenschaft `file` die JSON-Definitionsdatei an, die für die Erstellung der Brixx Entscheidungstabelle verwendet werden soll.

    // Create a BrixxDecisionTable instance
    const table = new BrixxDecisionTable({ file: "./brixx_check_age.json" })

Die einzelnen Einträge `input` der Liste `input_data` werden mit `const output = table.check(input)` mit der Brixx Entscheidungstabelle überprüft, in der Konstanten `output` gespeichert, und mit einer _JavaScript Array map()_ nacheinander in der Browserkonsole mit `console.log(output)` ausgegeben.

    // Imports
    const BrixxDecisionTable = require("@brixx/decision-script/node").default

    // Check the decision table input data list
    input_data.map((input) => {
        // Get the output from decision table input data
        const output = table.check(input)
        // Prints the output to console
        console.log(output)
    })

Komplette Node.js Application in der JavaScript-Datei `./brixx-check-age.js`

    // Imports
    const BrixxDecisionTable = require("@brixx/decision-script/node").default

    /**
    *  Set the decision table input data list to check
    *  represents e.g. data from a web service or a database
    */
    const input_data = [
        { age: "" },
        { age: 0 },
        { age: 3 },
        { age: 12 },
        { age: 13 }
    ]

    // Create a BrixxDecisionTable instance
    const table = new BrixxDecisionTable({ file: "./brixx_check_age.json" })

    // Check the decision table input data list
    input_data.map((input) => {
        // Get the output from decision table input data
        const output = table.check(input)
        // Prints the output to console
        console.log(output)
    })

Komplettes Beispiel [[brixx-check-age-node] (ZIP-Archiv)](../assets/downloads/brixx-check-age-node.zip) herunterladen.

### Node.js Application testen

Die Node.js Application kann in der Eingabeaufforderung mit `node brixx-check-age.js` im Projektordner `[brixx-check-age-node]` getestet werden, oder direkt in der Entwicklungsumgebung Visual Studio Code. Wir starten die Node.js Application durch Klick mit der rechten Maustaste auf den Eintrag `[start]` in der Explorer-Ansicht unter `[NPM-SCRIPTS]` und Auswahl von `[Run]` im Kontextmenü oder Klick auf das Symbol **[** <img src="../assets/images/vscode-run.png" width="8px" /> **]**

<img src="../assets/images/brixx-check-age-node.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Run start

Die Node.js Application `[brixx-check-age]` wird anschließend in der Browserkonsole ausgeführt.

## <div id='brixx-check-age-class' /> JavaScript Web-Application [brixx-check-age] erstellen

Wir können auch beide „Welten” verbinden und beliebig kombinieren. Dabei ist es sogar möglich dynamisch neue Regeln durch vorhandene Regeln zu erzeugen und bietet dadurch nahezu unbegrenzte Möglichkeiten. Wir erstellen eine JavaScript Web-Application mit einem Brixx Web-Baustein im Projektordner `[brixx-check-age-class]` und verwenden die JSON-Definitionsdatei in der Datei `brixx_check_age.json` aus dem Beispiel vorher. Danach erstellen wir auch hier wieder einen Ordner `[components]`, darin die Brixx Script-Component Datei `brixx-check-age.js`, und kopieren die HTML-Datei `index.html` aus dem Beispiel für den Brixx Web-Baustein. Die Projekt-Ordnerstruktur sieht dann wie folgt aus.

    brixx-check-age-slass/
        ├── components/
        │   └── brixx-check-age.js
        ├── brixx-check-age.json
        └── index.html

Von der Definitionsdatei verwenden wir die Beschreibung, Hit-Policy und zwei „Basis”-Regeln als „Basis”-Konfiguration. Die „individuelle” Konfiguration erstellen wir anschließed in der Web-Application.

Komplette JSON-Definitionsdatei `brixx_check_age.json`

    {
        "description": "Check age",
        "hitPolicy": "Priority",
        "rules": {
            "No entry": {
                "age": "",
                "info": "Please enter a valid age!",
                "url": "https://github.com/BietSoft/brixx.docs/",
                "priority": 30
            },
            "Baby": {
                "age": "0",
                "info": "It's is still a baby!",
                "priority": 40
            }
        }
    }

Wir erstellen die Web-Application mit einem Brixx Web-Baustein in der Brixx Script-Component Datei `brixx-check-age.js` und importieren zuerst die JSON-Definitionsdatei in die Variable `DecisionTableDefinition`.

    // Load the decision table definitions
    const DecisionTableDefinition = DecisionTable.load('./brixx_check_age.json')

Alternativ kann die Definition für die Brixx Entscheidungstabelle im Code zu erstellt werden.

    // Set the  decision table definitions
    const DecisionTableDefinition = {
        "description": "Check age",
        "hitPolicy": "Priority",
        "rules": {
            "No entry": {
                "age": "",
                "info": "Please enter a valid age!",
                "url": "https://github.com/BietSoft/brixx.docs/",
                "priority": 30
            },
            "Baby": {
                "age": "0",
                "info": "It's is still a baby!",
                "priority": 40
            }
        }
    }

> Quellcode- und Konfigurationsdateien ermöglichen als Baustein (Bricks) System eine bessere Projektorganisation. Quellcode und Konfigurationen können leichter bearbeitet, getestet, versioniert werden, aber auch einfacher veröffentlicht und verteilt.

Anschließend erstellen wir die Brixx Entscheidungstabelle als Brixx Standard-Element.

    // Create a Brixx default element
    Brixx.element = (
        <div>
            <p>HTML element &lt;brixx-check-age&gt; created with Brixx-Script.</p>
            <DecisionTable definition={DecisionTableDefinition}>
                <ul>
                    <li>Baby (0 years old) - <i>It's still a baby!</i></li>
                    <li>Preschool (under 5 years old) - <i>Unfortunately too young!</i></li>
                    <li>Kids (under 13 years old) - <i>https://www.youtube.com/kids/</i></li>
                    <li>Teens (13 years or older) - <i>https://www.youtube.com/</i></li>
                </ul>
                <Input name={"age"} type={"number"}>
                    <div>Please enter age</div>
                    <Field />
                </Input>
                <Output name={"info"}>
                    <Field readonly />
                </Output>
                <Output name={"url"}>
                    <Link />
                </Output>
                <Rule age={"< 6"} priority={20} info={"Unfortunately too young!"} />
                <Rule age={">= 13"} url={"https://www.youtube.com/"} />
                <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
                <Check button label={"Check age"} />
            </DecisionTable>
        </div >
    )

### JavaScript Web-Application verwenden

Für die Integration in ein HTML-Dokument nutzen wir wieder die _Brixx-Decision-Script Standalone_ Version und kopieren die HTML-Datei `index.html` aus dem Beispiel für einen Brixx Web-Baustein in den Projektordner.

Komplettes HTML-Dokument in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html>
    <head>
        <!-- Load Brixx-Decision-Script standalone for development -->
        <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>
        <!-- Include the Brixx script component files for development -->
        <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>
    </head>

    <body>
        <!-- Add the Brixx HTML element -->
        <brixx-check-age></brixx-check-age>
    </body>
    </html>

Komplettes Beispiel [[brixx-check-age-class] (ZIP-Archiv)](../assets/downloads/brixx-check-age-class.zip) herunterladen.

### JavaScript Web-Application testen

Die JavaScript Web-Application können wir jederzeit während der Entwicklung testen und starten die HTML-Datei `index.html` mit dem _Live Server_.

<img src="../assets/images/brixx-check-age-class.webp" style="margin-bottom: -5px; width: 600px;" />

Die JavaScript Web-Application `<brixx-check-age>` im Browser-Fenster

## <div id='brixx-check-age-dynamic' /> Brixx Web-Baustein mit dynamischem content erstellen

Wir erstellen den Projektordner `[brixx-check-age-dynamic]` und kopieren die Dateien von dem erweiterten Brixx Web-Baustein aus Projektordner `[brixx-check-age-styles]`. Darin bearbeiten wir nur die Brixx Script-Component Datei `./components/brixx-check-age.js`.

Kompletter Brixx Web-Baustein in der Brixx Script-Component Datei `./components/brixx-check-age.js`

    // Brixx JSX kids element
    const kids_element = (
        <div>
            <h5>[Kids area]</h5>
            <h6><a href="https://www.youtube.com/kids/" target="_blank">Go to YouTube for Kids ...</a></h6>
        </div>
    )

    // Brixx JSX teens element
    const teens_element = (
        <div>
            <h5>[Teens area]</h5>
            <h6><a href="https://www.youtube.com/kids/" target="_blank">Go to YouTube ...</a></h6>
        </div>
    )

    // Create a Brixx default element
    Brixx.element = (
        <div>
            <p>HTML element &lt;brixx-check-age&gt; created with Brixx-Script.</p>
            <DecisionTable>
                <ul>
                    <li>Baby (0 years old) - <i>It's still a baby!</i></li>
                    <li>Preschool (under 5 years old) - <i>Unfortunately too young!</i></li>
                    <li>Kids (under 13 years old) - <i>Show [Kids area] in component section!</i></li>
                    <li>Teens (13 years or older) - <i>Show [Teens area] in component section!</i></li>
                </ul>
                <hr />
                <Output component name={"element"}>
                    <i>Decision table component section ...</i>
                </Output>
                <hr />
                <Input name={"age"} type={"number"}>
                    <div>Please enter age</div>
                    <Field />
                </Input>
                <Output name={"info"}>
                    <Field readonly />
                </Output>
                <Rule age={""} priority={30} info={"Please enter a valid age!"} />
                <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
                <Rule age={"< 6"} priority={20} info={"Unfortunately too young!"} />
                <Rule age={">= 13"} element={teens_element} info={""} />
                <Rule age={"< 13"} priority={10} element={kids_element} info={""} />
                <Check button label={"Check age"} />
            </DecisionTable>
        </div>
    );

    // Register a Brixx HTML-Element <brixx-check-age>
    Brixx.registerElement({ name: "check-age" });

Komplettes Beispiel [[brixx-check-age-dynamic] (ZIP-Archiv)](../assets/downloads/brixx-check-age-dynamic.zip) herunterladen.

# <div id='reference' /> Brixx-Decision-Script Referenz

## Brixx-Decision-Script Standalone

Für die Entwicklung steht eine Brixx-Decision-Script Standalone Version zur Verfügung. Dadurch kann Brixx-Decision-Script direkt ohne precompiling verwendet werden. Die Brixx-Decision-Script Standalone Datei [`brixx-decision.min.js`](https://brixx.it/@brixx/standalone/brixx-decision.min.js) kann dazu einfach mit einem HTML-`<script>`-Element vom Brixx CDN-(Content Delivery Network)-Server importiert (referenziert) werden.

    <!-- Load Brixx-Decision-Script standalone for development -->
    <src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>

Brixx-Script ist Bestandteil in Brixx-Decision-Script und ermöglicht einen minimalen Programmieraufwand und schnelle Integration in ein HTML-Dokument (siehe [Brixx-Script Dokumentation](../brixx-script/README.md)) und ein Brixx Web-Baustein kann danach mit einem HTML-`<script>`-Element importiert werden, wie z. B. die Brixx Script-Component-Datei `./components/brixx-animal-list.js`

    <!-- Include the Brixx script component files for development -->
    <script type="text/babel" src="./components/brixx-animal-list.js" data-type="module" data-presets="brixx"></script>

Brixx-Decision-Script Standalone verwendet Babel, um ECMAScript 2015+ Code in eine abwärtskompatible Version von JavaScript in aktuellen und älteren Browsern oder Umgebungen zu konvertieren.

Die Eigenschaft `type` gibt den Medientyp des Skripts an. Für Brixx-Decision-Script verwenden wir Babel mit `type="text/babel"` und hat den Vorteil dass man mit aktuellem Standard entwickeln kann, und sich nicht um Abwärtskompatibilität kümmern muss, da Benutzer unterschiedliche Browser und Versionen verwenden.

Die Eigenschaft `src` gibt die URL einer extern verwendeten Brixx Script-Component Datei an, im Beispiel mit `src="./components/brixx-animal-list.js"`

Die Eigenschaft `data-type` ist optional, wird benötigt wenn ECMAScript 2015+ (ES6) Modulen verwendet werden und für Babel mit `data-type="module"` angegeben.

Die Eigenschaft `data-preset` wird angegeben dass Brixx-Script verwendet wird und für Babel mit `data-preset="brixx"` angegeben.

Es wird empfohlen Brixx-Decision-Script Standalone nicht in einer Produktionsumgebung zu verwenden. Beim Start wird in der Browserkonsole folgende Information ausgegeben.

> `You are using the in-browser Brixx transformer. Be sure to precompile scripts for production - https://brixx.it/brixx-script`

## Brixx-Decision-Script Package

### Brixx-Decision-Script Package installieren

    `npm i @brixx/decision-script`

### Brixx-Decision-Script Package importieren

Das Modul `BrixxDecisionTable` vom Package `@brixx/decision-script` für eine Web-Anwendung importieren.

    import { BrixxDecisionTable } from '@brixx/decision-script'

Das Modul `BrixxDecisionTable` für eine Nodejs-Anwendung importieren.

    const BrixxDecisionTable = require("@brixx/decision-script/node").default;

## Brixx-Decision-Script Library

Das Modul `BrixxDecisionTable` von der Brixx-Decision-Script Library importieren. Dafür kann man die Brixx-Decision-Script Library (minified) [brixx-decision.js](https://brixx.it/@brixx/script/brixx-decision.js) vom Brixx CDN-(Content Delivery Network)-Server in den Projektordner kopieren und anschließend für eine Web-Anwendung importieren.

    import { BrixxDecisionTable } from './brixx-decision'

Das Modul `BrixxDecisionTable` für eine Nodejs-Anwendung importieren.

    const BrixxDecisionTable = require("./brixx-decision/node").default;

> **Tip:** Die Brixx-Decision-Script Library vom Brixx CDN-(Content Delivery Network)-Server ist immer die _Latest_ Version und kann die Version in der npm-Registry überholen. Hier hat man die Möglichkeit vorab die neueste Versionen zu testen.

# <div id='definition' /> Decision table definition

The Bixx decision table can be defined in JSON format and is used like other [DMN (Decision Model Notation)](https://en.wikipedia.org/wiki/Decision_Model_and_Notation) based systems.

## name

The field `name` defines Brixx decision table object identifier and will be used for the [DecisionTable.check](#decision-table-check) method. The field is optional and not required. If `name` is not set it will set to the `DecisionTable.defaults.description`.

**Example**

    {
        "name": "BrixxDecisionTable"
    }

## description

The field `description` defines Brixx decision table description and could be used for the decision table output. The field is optional and not required. If `description` is not set it will set to the `DecisionTable.defaults.description`.

**Example**

    {
        "description": "Check age"
    }

## hitPolicy

The field `hitPolicy` defines the Brixx decision table hit policy. The field is optional and not required. If `hitPolicy` is not set it will set to `Priority`.

-   `Any` - Multiple matching rules must not make a difference: all matching rules must lead to the same output. (_not available in this version_).
-   `Collect` - Rules do not overlap. Only a single rule can match (_not available in this version_).
-   `First` - Rules are evaluated from top to bottom. Rules may overlap, but only the first match counts.
-   `Priority` (default) - Rule outputs are prioritized. Rules may overlap, but only the match with the highest output priority counts.
-   `Unique` - Rules do not overlap. Only a single rule can match. (_not available in this version_).

**Example**

    {
        "hitPolicy": "Priority"
    }

## input

The field `input` defines the Brixx decision table input object list.

### The input object

**Attributes**

`{String} [{name}: {...}]` - the decision table input object identifier.

`{String} [default] (optional)` - the decision table input object default value.

`{String} [description]` - the decision table input object description.

`{String} [type='text'] (optional)` - the decision table input object type.

The input object format.

    {name}: {
        {description}: {value},
        {type}: {value},
        {default}: {value}
    }

An input object sample.

    "age": {
        "description": "The age to check",
        "type": "number",
        "default": 0
    }

**Example**

    {
        "input": {
            "age": {
                "description": "The age to check",
                "type": "number",
                "default": 0
            }
        }
    }

## output

The field `output` defines the Brixx decision table output object list.

### The output object

**Attributes**

`{String} [{name}: {...}]` - the decision table output object identifier.

`{String} [description]` - the decision table output object description.

The output object format.

    {name}: {
        {description}: {value}
    }

An output object sample.

    "info": {
        "description": "An additional information"
    }

**Example**

    {
        "output": {
                "info": {
                "description": "An additional information"
            },
                "url": {
                "description": "The url to link to"
            }
        }
    }

## rules

The field `rules` defines the Brixx decision table rule object list.

### The rule object

**Attributes**

`{String} [{name}: {...}]` - the decision table rule object identifier.

`{String} [input] (1,...,n)` - the decision table rule input condition attribut.

`{String} [output] (1,...,n)` - the decision table rule output value attribut.

`{Number} [priority] (optional)` - the decision table rule priority attribut.

The rule object format.

    {name}: {
        {input}: {condition},
        ...
        {output}: {value},
        ...
        {priority}: {value}
    }

A rule object sample.

    {
        "Preschool": {
            "age": "< 5",
            "info": "Unfortunately too young!",
            "priority": 20
        }
    }

**Condition**

The input oject rule conditions. Multiple conditions can be used and combined for a rule. However, it is recommended to use one rule per condition.

"`{value}`" - The value is equal ...

    "age": ""

###

    "age": "0"

"`not {value}`" or "`! {value}`" - The value is not ...

    "age": "not 0"

"`>= {value}`" - The value is greater than or equal...

    "age": ">= 13"

"`<= {value}`" - The value is lower than or equal...

    "age": "<= 12"

"`< {value}`" - The value is lower than ...

    "age": "< 6"

"`> {value}`" - The value is greater than ...

    "age": "> 0"

**Example**

    {
        "rules": {
            "No entry": {
                "age": "",
                "info": "Please enter a valid age!",
                "url": "https://github.com/BietSoft/brixx.docs/",
                "priority": 30
            },
            "Baby": {
                "age": "0",
                "info": "It's is still a baby!",
                "priority": 40
            },
            "Preschool": {
                "age": "< 5",
                "info": "Unfortunately too young!",
                "priority": 20
            },
            "Teens": {
                "age": ">= 13",
                "url": "https://www.youtube.com/"
            },
            "Kids": {
                "age": "< 13",
                "info": "Internet Safety for Kids",
                "url": "https://www.youtube.com/kids/",
                "priority": 10
            }
        }
    }

# The HTML way

The other way to define a Brixx decision table are the special HTML elements that are available with Brixx-Decision-Script. All HTML elements and attributes are optional. Brixx-Decision-Script HTML elements and attributes override predefined values from the decision table `definition` attribute and child elements and attributes override parent definitions. For example, a `Check` element overrides the `check` attribute in the `DecisionTable` element. Each Brixx-Decision-Script HTML element can contain subordinate elements and enables free design in the HTML document.

## The HTML elements

## &lt;DecisionTable&gt;

Defines a Brixx decision table `root` element.

**Attributes**

`{Object} [check]` - the decision table check callback function.

`{Boolean} [checkAtStart]` - the decision table check at start flag.

`{Object} [data]` - the decision table input data.

`{String|Object} [definition={}]` - the decision table definition. This can be a JSON string or a JSON object.

`{String} [description]` - the decision table description.

`{String} [hitPolicy='First']` - the rixx decision table hit policy.

`{String} [name]` - the decision table object identifier.

**Example**

## &lt;Action&gt;

Adds an `Action` object for the Brixx decision table. Can be used for `output` objects. Must be included in the `output` section.

**Attributes**

`{Object} [callback]` - the decision table output action callback function.

`{Object} [data]` - the decision table output data callback function.

`{Boolean} [link]` - the decision table output action link flag. Defines the output value as link and if is set opens a link in a browser window. The output value must be a valid link (URL) adress.

`{String} [process]` - the decision table output action process id. Runs a Brixx process (_not available in this version_).

`{String} [target='_blank']` - the decision table output action link target.

**Example**

## &lt;Check&gt;

Adds a `Check` object for the Brixx decision table. Must be included in the `root` section.

`{Object} [action]` - the decision table check callback function.

`{Boolean} [button]` - the decision table check button flag. Defines the check object as a button.

`{Boolean} [checkAtStart]` - the decision table check at start flag.

`{String} [label='Check decision table']` - the decision table check button label.

**Attributes**

**Example**

## &lt;Condition&gt;

Adds an `Condition` object for the Brixx decision table. Can be used for `input` and `output` objects. Must be included in the `rule` section. For the available rule conditions, see [Decision table definition](#definition).

**Attributes**

`{Object} [element={condition}]` - the decision table rule condition attribut.

**Example**

    <Condition x={'> 5'}>

## &lt;Component&gt;

Adds a `Component` object for the Brixx decision table. Can be used for `output` objects. Renders a Brixx element (component) in the target element section. The output value must be a valid HTML element. Must be included in the `output` section.

**Attributes**

`{Object} [target]` - the decision table component target. Renders a Brixx element as default in the component section and if the attribut target is set in the output object renders in the `output` section.

**Example**

## &lt;Field&gt;

Adds a `Field` object for the Brixx decision table. Must be included in a `input` or `output` section.

`{String} [default]` - the decision table field default input value.

`{String} [description]` - the decision table field input description.

`{Boolean} [readonly]` - the decision table field readonly flag.

`{String} [type='text']` - the decision table field input type.

`{String} [value]` - the decision table field default output value.

**Attributes**

**Example**

## &lt;Input&gt;

Adds a `Input` object for the Brixx decision table.

**Attributes**

`{Object} [data]` - the decision table input object data.

`{String} [default]` - the decision table input object default value.

`{String} [element]` - the decision table input element id. Can be every input element in the HTML document and will be searchd by `getElementById(element)`.

`{String} [description]` - the decision table input object description.

`{String} [name]` - the decision table input object identifier.

`{String} [type='text']` - the decision table input object type.

**Example**

## &lt;Link&gt;

Adds a `Link` object for the Brixx decision table. Can be used for `output` objects. Opens a link in the target browser window. The output value must be a valid link (URL) adress. Must be included in the `output` section.

**Attributes**

`{String} [target='_blank']` - the decision table link target.

**Example**

## &lt;Output&gt;

Adds a `Output` object for the Brixx decision table.

**Attributes**

`{Object} [action]` - the decision table output action callback function.

`{Object} [component]` - the decision table output component flag. Defines the output value as component and if is set renders a Brixx element (component) in the target element section. The output value must be a valid Brixx element (HTML element).

`{Object} [data]` - the decision table output data callback function.

`{String} [description]` - the decision table output object description.

`{String} [element]` - the decision table input (output) element id. Can be every input (output) element in the HTML document and will be searchd by `getElementById(element)`.

`{Boolean} [link]` - the decision table output link flag. Defines the output value as link and if is set opens a link in the target browser window. The output value must be a valid link (URL) adress.

`{String} [process]` - the decision table output process id. Runs a Brixx process (_not available in this version_).

`{String|Object} [target]` - the decision table output target. If the `component` flag is set renders a Brixx element as default in to the `output` section and if the `link` flag is set opens a link in a new (`_blank`) browser window.

`{String} [name]` - the decision table output identifier.

**Example**

## &lt;Process&gt;

Adds a `Process` object for the Brixx decision table. Runs a Brixx process (_not available in this version_). Must be included in the `output` section.

**Attributes**

`{String} [id]` - the decision table process id.

**Example**

## &lt;Rule&gt;

Adds an `Rule` object for the Brixx decision table. Can be used for `input` and `output` objects. Must be included in the `rule` section. For the available rule conditions, see [Decision table definition](#definition).

**Attributes**

`{String} [name]` - the decision table rule object identifier.

`{String} [input]` - the decision table rule input condition attribut.

`{String} [output]` - the decision table rule output attribut.

`{Number} [priority]` - the decision table rule priority attribut.

**Example**

# The JavaScript way

## BrixxDecisionTable class

### constructor(table=null || { file=null, table=null })

Constructs a BrixxDecisionTable instance and creates a Brixx decision table with the optional given decision table definition.

**Parameters**  
`{String|Object} [table=null] (optional)` - the decision table definition. This can be a JSON string or a JSON object.

`{String|Object} [object.table=null] (optional)` - the decision table JSON string or JSON object. This can be a JSON string or a JSON object.

`{String} [object.file=null] (optional)` - the decision table definition file name. The file must be in Brixx decision table JSON format.

**Returns**  
`{Object}` - BrixxDecisionTable instance.

**Example**

    const instance = new BrixxDecisionTable()

###

    const instance = new BrixxDecisionTable({ file: './brixx_decision_table.json' })

### .check(input)

Cheks the input data with the Brixx decision table.

**Parameters**  
`{Object} [input]` - the data to check as JSON object.

**Returns**
`{Object}` - Output data as JSON object.

**Example**

    const input = { age: 3 }
    const output = instance.check(input)

###

    > Object { age: 3, info: "Unfortunately too young!", url: undefined }

### .create(table=null || { file=null, table=null })

Creates a Brixx decision table with the given decision table definition.

**Parameters**  
`{String|Object} [table=null] (optional)` - the decision table definition. This can be a JSON string or a JSON object.

`{String|Object} [object.table=null] (optional)` - the decision table JSON string or JSON object. This can be a JSON string or a JSON object.

`{String} [object.file=null] (optional)` - the decision table definition file name. The file must be in Brixx decision table JSON format.

**Returns**  
`{Object}` - Brixx decision table.

**Example**

    const instance = new BrixxDecisionTable()
    instance.create({ file: './brixx_decision_table.json' })

### .parse(table)

Creates a Brixx decision table with the given decision table definition.

**Parameters**  
`{Object} [table]` - the decision table definition as JSON object.

**Returns**
`{Object}` - Brixx decision table.

**Example**

    const brixx_check_age = {
        "description": "Check age",
        "hitPolicy": "Priority",
        "input": {
            "age": {
                "description": "The age to check",
                "type": "number",
                "default": 0
            }
        },
        "output": {
            "info": {
                "description": "An additional information"
            },
            "url": {
                "description": "The url to link to"
            }
        },
        "rules": {
            "No entry": {
                "age": "",
                "info": "Please enter a valid age!",
                "url": "https://github.com/BietSoft/brixx.docs/",
                "priority": 30
            },
            "Baby": {
                "age": "0",
                "info": "It's is still a baby!",
                "priority": 40
            },
            "Preschool": {
                "age": "< 5",
                "info": "Unfortunately too young!",
                "priority": 20
            },
            "Teens": {
                "age": ">= 13",
                "url": "https://www.youtube.com/"
            },
            "Kids": {
                "age": "< 13",
                "info": "Internet Safety for Kids",
                "url": "https://www.youtube.com/kids/",
                "priority": 10
            }
        }
    }

    instance.parse(brixx_check_age)

## BrixxDecisionTable static properties

### .defaults

Returns the BrixxDecisionTable default values in JSON format.

`Readonly`

**Returns**  
`{Object}` - BrixxDecisionTable default values.

**Example**

    console.log('BrixxDecisionTable defaults: ', BrixxDecisionTable.defaults)

Console output

    BrixxDecisionTable defaults: Object {"checkLabel": "Check decision table", "description": "Decision table", "hitPolicy": "Priority"}

### .version

Returns the BrixxDecisionTable version in semantic versioning format.

`Readonly`

**Returns**  
`{String}` - BrixxDecisionTable version.

**Example**

    console.log('BrixxDecisionTable version: ', BrixxDecisionTable.version)

Console output

    BrixxDecisionTable version: 1.1.0

## DecisionTable static class

The static Brixx class `DecisionTable` is available with the HTML element `<DecisionTable>`.

### <div id='decision-table-check' /> .check(name)

Cheks the found Brixx decision tables in the browser window with the given `name`. If the name is not set it will set to the `DecisionTable.defaults.description`. Usually only one Brixx decision table is used in an HTML document, but several decision tables can also exist at the same time.

**Parameters**  
`{String} [name='Decision table'] (optional)` - the name of the Brixx decision table to check. Checks all

**Examples**

    DecisionTable.check()

###

    <DecisionTable name={'BrixxDecisionTable'}>
        ...
    </DecisionTable>
    ...
    DecisionTable.check('BrixxDecisionTable')

### .defaults

Returns the DecisionTable default values in JSON format.

`Readonly`

**Returns**  
`{Object}` - DecisionTable default values.

**Example**

    console.log('DecisionTable defaults: ', DecisionTable.defaults)

Console output

    DecisionTable defaults: Object {"checkLabel": "Check decision table", "description": "Decision table", "hitPolicy": "Priority"}

### .load(file)

Load Brixx decision table definition The file must be in Brixx decision table JSON format.

**Parameters**  
`{String} [file]` - the decision table definition file name.

**Returns**
`{Object}` - Brixx decision table JSON object.

**Example**

    const DecisionTableDefinition =  DecisionTable.load('./brixx_check_age.json')

### .version

Returns the DecisionTable version in semantic versioning format.

`Readonly`

**Returns**  
`{String}` - DecisionTable version.

**Example**

    console.log('DecisionTable version: ', DecisionTable.version)

Console output

    DecisionTable version: 1.1.0

# <div id='downloads' /> Downloads

-   ### [Beispiel [brixx-check-age-dynamic] (ZIP-Archiv)](../assets/downloads/brixx-check-age-dynamic.zip)
-   ### [Beispiel [brixx-check-age-class] (ZIP-Archiv)](../assets/downloads/brixx-check-age-class.zip)
-   ### [Beispiel [brixx-check-age-web] (ZIP-Archiv)](../assets/downloads/brixx-check-age-web.zip)
-   ### [Beispiel [brixx-check-age-styles] (ZIP-Archiv)](../assets/downloads/brixx-check-age-styles.zip)
-   ### [Beispiel [brixx-check-age-node] (ZIP-Archiv)](../assets/downloads/brixx-check-age-node.zip)

## Copyright and License

Copyright © [BRIXX.it](https://brixx.it/) 2022-present
