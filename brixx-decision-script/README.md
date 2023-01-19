# Brixx-Decision-Script

### Package: `@brixx/decision-script`

### Version: `1.0.1` (Stable, 18.01.2023)

#

> This document is being processed and is currently only available in German. However, we have decided to make Brixx-Decision-Script version 1.0.1 available for use. For further information on the use of Brixx-Decision-Script please feel free to contact [`info@brixx.it`](info@brixx.it)

# Was ist Brixx-Decision-Script

## “Decisions make up more than 90% of programming!”

Brixx-Decision-Script is a free JavaScript library for rule-based decision-making systems. With Brixx-Decision-Script, the programming can be reduced to a minimum and replaced by a technical configuration (low-code development) for extensions and adjustments via rules with a **Brixx decision table**. In particular, with [Brixx-Script (smarte web components)](https://brixx.it/brixx-script.html) as Brixx HTML elements or as Brixx-Script components in JavaScript applications and frameworks, rapid integration into any HTML document is possible and also supports JavaScript environments such as [Node.js®](https://nodejs.org/en/ "Opensource cross platform JavaScript runtime environment").
(cross-platform JavaScript runtime environment).

-   [Erste Schritte](#getstarted)
    -   [Brixx Web-Baustein [brixx-check-age] erstellen](#brixx-check-age-web)
-   [Brixx-Decision-Script Tutorial](#tutorial)
    -   [Brixx Web-Baustein [brixx-check-age] erweitern](#brixx-check-age-styles)
    -   [Node.js app [brixx-check-age] erstellen](#brixx-check-age-node)
-   [Brixx-Decision-Script Referenz](#reference)
-   [Downloads](#downloads)

# <div id='getstarted'/> Erste Schritte

Wir verwenden Brixx-Script zur Erstellung einer **Brixx Entscheidungstabelle** (Brixx decision table). Brixx-Script ist Bestandteil in Brixx-Decission-Script und ermöglicht uns einen minimalen Programmieraufwand und schnelle Integration in ein HTML-Dokument (siehe [Brixx-Script Dokumentation](https://github.com/BietSoft/brixx.docs/blob/main/brixx-script/README.md)). Dabei ist neben der JavaScript-Engine für Programmierer und erfahrene Webentwickler auch eine komplette Erstellung im HTML-Code möglich. Es können auch beide Systeme kombiniert werden, was Brixx-Decision-Script besonders interessannt und leistungsfähig macht. Im ersten Schritt erstellen wir einen Brixx Web-Baustein (Brixx web component) mit einer Entscheidungstabelle für eine Altersüberprüfung (`brixx-check-age-web`) und danach das Beispiel auch als Node.js App (`brixx-check-age-node`).

## <div id='brixx-check-age-web'/> Brixx Web-Baustein `[brixx-check-age]` erstellen

Wir erstellen eine einfache Brixx Entscheidungstabelle zur Altersüberprüfung mit Aufruf einer entsprechenden „altersgerechten“ Webseite. Dazu erstellen wir einen Ordner **`./components`** im Projektordner **`[brixx-check-age-web]`** wodurch die Projekt-Ordnerstruktur wie folgt aussieht.

    brixx-check-age-web/
    ├── components/
    │   └── brixx-check-age.js
    └── index.html

Darin erstellen wir den Brixx Web-Baustein **`[brixx-check-age]`** in der Brixx Script-Component Datei **`brixx-check-age.js`**. Zuersterstellen wir die Funktion **`checkDecisionTable`** ([JavaScript Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp)) die wir als sogenannte _Callback_-Funktion nur zur Überprüfung der Ergebnisse in der Entwicklung verwenden, dient aber auchgleichzeitig als Beispiel für eine weiterführende Programmierung.

    // Check decision table callback function (optional)
    const checkDecisionTable = (output) => {
        console.log("Output:", output);
    }

> Wir verwenden in den Beispielen [ECMAScript 2015+](https://en.wikipedia.org/wiki/ECMAScript) (ES6) als JavaScript Standard, und erstellen im aktuellen Beispiel für die Callback-Funktion eine _JavaScript Arrow Function_. Ältere Browser unterstützen den aktuellen ECMAScript-Standard teilweise nicht und wir gleichen das mit Babel als Transpiler aus. Das hat den Vorteil dass wir modern entwickeln können, nicht die Entwicklung alten Browsern anpassen, und trotzdem in allen Browsern kompatibel bleiben. Den Code muss man so später nicht ändern sondern „nur“ Babel weglassen. Das ist ohnehin notwendig, da man nicht wissen kann welchen der unzähligen Browser und Versionen der Benutzer verwendet.

Die Callback-Funktion alternativ als Function-Object, oder was Babel daraus macht.

    // Check decision table callback function (optional)
    function checkDecisionTable(output) {
        console.log("Output:", output);
    }

Die Callback-Funktion kann optional verwendet werden, und wird nach Überprüfung der Entscheidungstabelle aufgerufen (Callback). Die Callback-Funktion erhält im Beispiel das Ergebnis (Output) der Überprüfung im Parameter **`output`** und gibt das Ergebnis in der Browserkonsole aus.

> **Tip:** Browserkonsole öffnen mit `Strg + Shift + J` bei Windows oder `Command [⌘] + Option-Taste + J` bei MacOS

<img src="../images/browserconsole.webp" style="margin-bottom: -5px; width: 600px;" />
  
Werkzeuge für Webentwickler mit Konsole im Firefox Browser ( `Strg + Shift + I`)

Anschließend erstellen wir ein **`Brixx.element`** mit der Brixx Entscheidungstabelle.

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

Mit Brixx-Decision-Script werden HTML-Elemente zur Erstellung einer Brixx Entscheidungstabelle im HTML-Dokument bereitgestellt und wir erstellen die Entscheidungstabelle mit dem HTML-Element **`<DecisionTable>`**.

    ...
    <DecisionTable>
        ...
    </DecisionTable>
    ...

Mit dem HTML-Element **`<Input>`** erstellen wir ein Eingabefeld zur Dateneingabe mit dem HTML-Attribut (Eigenschaft) **`name`** und der Eigenschaft **`type`** (optional) für die Brixx Entscheidungstabelle. Zusätzlich erstellen wir im `<Input>`-Tag eine Benutzer-Information mit `<div>Please enter age</div>` und mit dem HTML-Element **`<Field>`** wird ein Eingabefeld erzeugt. Für eine Entscheidungstabelle kann es beliebig viele Eingabefelder geben.

    ...
    <Input name={"age"} type={"number"}>
        <div>Please enter age</div>
        <Field />
    </Input>
    ...

Eingabefelder sind optional und müssen nicht verwendet werden. Dateneingaben können auch aus einem HTML-Formular, Webservice oder einer Datenbank kommen, und die verschiedenen Eingabearten mit Brixx-Deision-Script auch kombiniert werden.

> **Tip:** Brixx-Decision-Schript HTML-Elemente können wie normale HTML-Elemente mit CSS-Stylesheets für eigen Anforderungen angepasst werden.

Danach werden Ausgabefelder zur Datenausgabe erstellt. Wir erstellen mit dem HTML-Element **`<Output>`** die Ausgabefelder **`info`** und **`url`**. Für eine Entscheidungstabelle kann es beliebig viele Ausgabefelder geben. Wir verwenden für das Ausgabefeld _`info`_ wieder ein HTML-Element **`<Field>`**, und wie bei der Dateneingabe wird ein „Eingabefeld” erzeugt, erhält aber zusätzlich das Attribut _`readonly`_. Dadurch wird das Feld zur Datenausgabe verwendet und kann nicht beschrieben werden. Eine Besonderheit ist das HTML-Element **`<Link>`** für das Ausgabefeld _`url`_. Enthält die Datenausgabe eine gültige URL-Adresse wird automatisch ein Browser-Fenster mit der URL geöffnet. Es gibt noch eine Reihe weiterer Einstellungsmöglichkeiten (siehe [Brixx-Decision-Script Referenz](#reference)).

    ...
    <Output name={"info"}>
        <Field readonly />
    </Output>
    <Output name={"url"}>
        <Link />
    </Output>
    ...

Ausgabefelder sind optional und müssen nicht verwendet werden. Datenausgaben können auch wie im Beispiel mit einer Callback-Funktion verarbeitet werden, und die verschiedenen Ausgabeearten mit Brixx-Deision-Script auch kombiniert werden.

Das Herzstück der Brixx-Decision-Script Entscheidungstabelle sind die **Regeln** (rules). Eine Regel wird mit dem HTML-Element **`<Rule>`** erstellt und wie bei anderen auf [DMN (Decision Model Notation)](https://en.wikipedia.org/wiki/Decision_Model_and_Notation) basierenden Systemen verwendet. Dabei werden die Bedingungen für die Dateneingabe, im Beispiel das Eingabefeld _`age`_, sowie die Ergebnisswerte für die Ausgabefelder _`info`_ und _`url`_ erstellt (definiert). Dabei müssen nicht für jede Regel alle Eingabe- oder Ausgabefelder verwendet werden.

    ...
    <Rule age={""} priority={30} info={"Please enter a valid age!"} url={"https://github.com/BietSoft/brixx.docs/"} />
    <Rule age={"0"} priority={40} info={"It's is still a baby!"} />
    <Rule age={"< 5"} priority={20} info={"Unfortunately too young!"} />
    <Rule age={">= 13"} url={"https://www.youtube.com/"} />
    <Rule age={"< 13"} priority={10} info={"Internet Safety for Kids"} url={"https://www.youtube.com/kids/"} />
    ...

Für die Entscheidungstabelle können beliebig viele Regeln definiert werden und bei „überschneidenden” Regeln können Prioritäten mit der optionalen Eigenschaft _`priority`_ vergeben werden. Das ist notwendig da wir keine **`hitPolicy`** definiert haben und standardmäßig _`Priority`_ verwendet wird. Das bedeutet, die erste gefundene passende Regel unter Berücksichtigung der Prioritäten wird ausgegeben (siehe [Brixx-Decision-Script Referenz](#reference)).

Mit dem HTML-Element **`<Check>`** wird zum Schluß mit dem HTML-Attribut _`button`_ eine Schaltfläche mit der Eigenschaft _`label`_ erstellt. Die Eigenschaft _`action`_ ist optional und legt die _Callback_-Funktion fest, die nach Überprüfung der Entscheidungstabelle aufgerufen werden soll. Im Beispiel wird die Funktion _`checkDecisionTable`_ vom Anfang aufgerufen.

> Die Callback-Funktion wird für die Eignenschaft _`action`_ als Objekt (ohne Anführungszeichen) übergeben und nicht als Objektname (String)

    ...
    <Check button label={"Check age"} action={checkDecisionTable} />
    ...

Abschließend wird das Brixx Element als HTML-Elemet **`<brixx-chack-age>`** registriert.

    // Register a Brixx HTML-Element <brixx-check-age>
    Brixx.registerElement({ name: "check-age" });

Kompletter Brixx Web-Baustein in der Brixx Script-Component Datei **`./components/brixx-check-age.js`**

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

Die integration in ein HTML-Dokument ist nicht kompliziert. Wir verwenden für das Beispiel <b>Brixx-Decision-Script Standalone</b> vom Brixx CDN-(Content Delivery Network)-Server um eine direkte Integration der Entscheidungstabelle mit dem Brixx Web-Baustein zu ermöglichen.

    <!-- Load Brixx-Decision-Script standalone for development-->
    <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>

Der Brixx Web-Baustein **`[brixx-check-age]`** in der Brixx Script-Component Datei **`./components/brixx-check-age.js"`** wird mit einen HTML-**`<script>`**-Element im HTML-Dokument eingefügt.

    <!-- Include the Brixx script component files for development -->
    <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>

Für Brixx-Decision-Script Standalone verwenden wir Babel mit **`type="text/babel"`** um die Brixx Webkomponente in den unterschiedlichen Browserversionen nutzen zu können. Dann werden die Attribute **`data-type="module"`** und **`data-presets="brixx"`** festgelegt, und der Brixx Web-Baustein kann als HTML-Element **`<brixx-check-age>`** verwendet werden. Das Attribute _data-type_ ist optional und wird zum Import von ECMAScript 2015+ (ES6) Modulen benötigt. Zur Verwendung als HTML-Element werden keine weiteren Programmierkentnisse benötigt.

Zum Schluss müssen wir nur noch das HTML-Element **`<brixx-check-age>`** in den `<body>`-Tag einfügen und sind fertig.

    <body>
      <!-- Add the Brixx HTML element -->
      <brixx-check-age></brixx-check-age>
    </body>

Komplettes HTML-Dokument in der HTML-Datei **`index.html`**

    <!DOCTYPE html>
    <html>
    <head>
        <!-- Load Brixx-Decision-Script standalone for development-->
        <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>
        <!-- Include the Brixx script component files for development -->
        <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>
    </head>

    <body>
        <!-- Add the Brixx HTML element -->
        <brixx-check-age></brixx-check-age>
    </body>
    </html>

Komplettes Beispiel v1.0.0 herunterladen [[brixx-check-age-web] (ZIP-Archiv)](../downloads/brixx-check-age-web.zip)

### Brixx Web-Baustein testen

Zum testen von unserem Brixx Web-Baustein öffnen wir den Projektordner **`[brixx-check-age]`** in Visual Studio Code und starten die HTML-Datei **`index.html`** mit dem _Live Server_. Dazu gibt es verschiedene Möglichkeiten.

1. Klick auf **`[Go Live]`** in der Visual Studio Code Status Bar (**`Click to run live server`**
2. Öffnen der HTML-Datei im Editor-Fenster mit der Tastenkombination **`[ALT+L Alt+O]`**
3. Rechtsklick auf die HTML-Datei im **Editor-Fenster** und Auswahl von **`[Open with Live Server]`**
4. Rechtsklick auf die HTML-Datei in der **Explorer-Ansicht** und Auswahl von **`[Open with Live Server]`**

    <img src="../images/brixx-check-age.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual-Studio-Code - Explorer-Ansicht **`[Open with Live Server]`**

    Die HTML-Datei **`index.html`** wird mit dem _Live Server_ unter der Adresse **`http://127.0.0.1:5500/index.html`** bereitgestellt und im Standard-Browser geöffnet.

    > **Tip:** Der Browser kann bei den _Live Server_ Einstellungen unter **`[Custom Browser]`** festgelegt werden (**`default=null`**).

    <img src="../images/brixx-check-age-web-01.webp" style="margin-bottom: -5px; width: 600px;" />

    Der Brixx Web-Baustein `<brixx-check-age>` im Browser-Fenster

# <div id='tutorial'/> Brixx-Decision-Script Tutorial

## <div id='brixx-check-age-styles'/> Brixx Web-Baustein `[brixx-check-age]` erweitern

Wie erweitern die Brixx Webkomponente [brixx-check-age] mit zusätzlichen CSS-Dateien.

### HTML Styles hinzufügen

Wir „stylen“ die Brixx Webkomponente mit **CSS** (Cascade Style Sheet) und erstellen dafür einen Ordner **`./styles`** im Projektordner. Wir nutzen zum einen [Bootstrap](https://getbootstrap.com/) und fügen die CSS-Datei **`bootstrap.min.css`** vom Cloudflare CDN-(Content Delivery Network)-Server mit einem HTML Stylesheet `<link>` im HTML-Dokument ein.

    <!-- Load Bootstrap styles from cdnjs.cloudflare.com -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet"></head>

Dann erstellen eine weitere CSS-Datei **`brixx-check-age.css`** im Ordner **`[styles]`** für die Brixx Entscheidungstabelle und fügen die CSS-Datei auch mit einem HTML Stylesheet `<link>` im HTML-Dokument ein

    <link href="./styles/brixx-check-age.css" rel="stylesheet"></head>

Komplette Styles der CSS-Datei **`brixx-check-age.css`**

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

Die verwendeten Styles dienen als einfaches Beispiel und müssen nicht im Einzelnen betrachtet werden. Damit sieht die Projekt-Ordnerstruktur folgendermaßen aus.

    brixx-check-age-web/
    ├── components/
    │   └── brixx-check-age.js
    ├── styles/
    │   └── brixx-check-age.css
    └── index.html

Komplettes HTML-Dokument in der HTML-Datei **`index.html`**

    <!DOCTYPE html>
    <html>
        <head>
            <!-- Load Bootstrap styles from cdnjs.cloudflare.com -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet"></head>
            <!-- Load Brixx-Decision-Script standalone for development-->
            <script src="https://brixx.it/@brixx/standalone/brixx-decision.min.js"></script>
            <!-- Include the Brixx script component files for development -->
            <script type="text/babel" src="./components/brixx-check-age.js" data-type="module" data-presets="brixx"></script>
            <link href="./styles/brixx-check-age.css" rel="stylesheet"></head>
        </head>

        <body>
            <!-- Add the Brixx HTML element -->
            <brixx-check-age></brixx-check-age>
        </body>
    </html>

### Brixx Webkomponente testen

Die Brixx Webkomponente können wir während der Entwicklung jederzeit testen und starten die HTML-Datei **`index.html`** mit dem _Live Server_.

<img src="../images/brixx-check-age-web-02.webp" style="margin-bottom: -5px; width: 600px;" />

Der Brixx Web-Baustein `<brixx-check-age>` im Browser-Fenster

## <div id='brixx-check-age-node'/> Node.js app `[brixx-check-age]` erstellen

Um die Brixx Entscheidungstabelle aus dem Beispiel vorher für eine Node.js (JavaScript) app zu verwenden erstellen wir zuerst den Projektordner **`[brixx-check-age-node]`** und weil wir mit JavaScript keine HTML-Elemete zur Definition verwenden können erstellen wir als „Ersatz” die JSON Konfigrationsdatei (Brixx decision table definition) **`brixx-check-age.json`** für die Brixx Entscheidungstabelle im Projektordner.

Komplette JSON Konfigrationsdatei **`brixx_check_age.json`**

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

Anschließend erstellen wir die JavaScript-Datei (Node.js app) **`brixx-check-age.js`** im Projektordner und importieren das Brixx-Decision-Script Package mit `require("@brixx/decision-script/node")` für Node.js in der Konstanten **`BrixxDecisionTable`**.

    // Imports
    const BrixxDecisionTable = require("@brixx/decision-script/node").default

Um das Package `@brixx/decision-script/node` in der JavaScript-Datei importieren zu können muss es vorher installiert werden. Dafür installieren wir das NPM-Package **`@brixx/decision-script`**, z.B. mit Visual Studio Code im Terminal-Fenster, im Projektordner mit `npm i @brixx/decision-script` (siehe [NPM-Packages installieren](../NPM-install.md)).

    > npm i @brixx/decision-script

Dadurch wird das NPM-Package im Ordner `node_modules` installiert und die _npm_-Konfigurationsdateien `package.json` und `package-lock.json` im Projektordner erstellt und die Projekt-Ordnerstruktur sieht wie folgt aus.

    brixx-check-age-web/
    ├── node_modules
    ├── brixx-check-age.json
    ├── brixx-check-age.js
    ├── package-lock.json
    └── package.json

Nach dem Import vom Brixx-Decision-Script Package `BrixxDecisionTable` erstellen wir eine Liste **`input_data`** ([JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)) die mögliche Eingabe- oder Datenquellen für die Node.js app repräsentieren soll z. B. aus einem Webservice oder einer Datenbank.

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

Anschließend erstellen wir ein Objekt (Instanz) von `BrixxDecisionTable` mit dem Instanznamen `table` und geben mit einem Konfigurationsobjekt im _Constructor_ mit der Eigenschaft `file` die JSON Konfigurationsatei an, die für die Erstellung der Brixx Entscheidungstabelle verwendet werden soll.

    // Create a BrixxDecisionTable instance
    const table = new BrixxDecisionTable({ file: "./brixx_check_age.json" })

Die einzelnen Einträge **`input`** der Liste **`input_data`** werden dann mit **`const output = table.check(input)`** mit der Brixx Entscheidungstabelle überprüft, in der Konstanten `output` gespeichert und mit Unterstützung einer _`JavaScript Array map()`_ nacheinander in der Browserkonsole mit `console.log(output)` ausgegeben.

    // Imports
    const BrixxDecisionTable = require("@brixx/decision-script/node").default

    // Check the decision table input data list
    input_data.map((input) => {
        // Get the output from decision table input data
        const output = table.check(input)
        // Prints the output to console
        console.log(output)
    })

Komplette Node.js app in der JavaScript-Datei **`./brixx-check-age.js`**

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

Komplettes Beispiel v1.0.0 herunterladen [[brixx-check-age-]node (ZIP-Archiv)](../downloads/brixx-check-age-node.zip)

### Node.js app testen

Um die Node.js app zu testen können wir die JavaScript-Datei `brixx-check-age.js` z.B. mit Visual Studio Code in einem Terminal-Fenster im Projektordner mit **`node brixx-check-age.js`** starten.

<img src="../images/brixx-check-age-node.webp" style="margin-bottom: -5px; width: 600px;" />

Die Node.js app `[brixx-check-age]` in der Browserkonsole

# <div id='reference'/> Brixx-Decision-Script Referenz

Under Construction ...

## Decision table definition

`@param {string} [name='Decision table']`  
`@param {string} [description='Decision table']`  
`@param {string} [hitPolicy='Priority']`  
`@param {string} [definition={ input: {}, output: {}, rules: {} }]`  
`@param {string} [data={}]`

## input

## output

## rules

# <div id='downloads'/> Downloads

-   ### [Beispiel v1.0.1 [brixx-check-age-web] (ZIP-Archiv)](../downloads/brixx-check-age-web.zip)
-   ### [Beispiel v1.0.1 [brixx-check-age-node] (ZIP-Archiv)](../downloads/brixx-check-age-node.zip)

## Copyright and License

#

Copyright © BRIXX.it 2022-present
