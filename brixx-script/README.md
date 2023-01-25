# Brixx-Script

### Package: `@brixx/script`

### Version: `1.0.9` (Release, 23.01.2023)

#

> This document is being processed and is currently only available in German. However, we have decided to make Brixx-Script version 1.0.9 available for use. For further information on the use of Brixx-Script please feel free to contact [`info@brixx.it`](info@brixx.it)

# Was ist Brixx-Script

Brixx-Script is a free JavaScript library for creating independent web components. **“Smart” web components** (brixx) publish for websites and web applications can be created with Brixx-Script. This reduces the programming effort and project complexity for **low-code development** to a minimum. **Brixx web components** are created with [JSX (JavaScript XML)](<https://en.wikipedia.org/wiki/JSX_(JavaScript)>) and can be used as _Brixx HTML elements_ in HTML documents or _Brixx script components_ in JavaScript applications and frameworks. JSX was introduced in 2014 with [React](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>) and has the same syntax as [E4X (ECMAScript for XML)](https://en.wikipedia.org/wiki/ECMAScript_for_XML) for integrating XML into JavaScript. Brixx-Script has its origins in 1998 as LaSSiE as a platform-independent web development and was expanded in 2005 with E4X. Coinciding with the advent of JSX, E4X was marked as deprecated by the Mozilla Foundation in 2014 and consequently replaced by JSX in LaSSiE as well. LaSSiE was initially used as an integrated building block system in other libraries, but due to the great popularity and spread of JSX, it was released in December 2022 as a free JavaScript library **Brixx-Script** for creating Brixx web components. Brixx-Script is primarily used to create a building block-oriented project architecture, but it can also be a lightweight alternative to other frameworks and libraries.

-   [Was wird alles benötigt?](#required)
    -   [Install Visual Studio Code for Windows](../docs/VSCode-install.md)
    -   [Install Node.js and npm for Windows](../docs/Nodejs-install.md)
-   [Erste Schritte](#getstarted)
    -   [Brixx Web-Baustein [brixx-animal-list] erstellen](#brixx-animal-list)
-   [Brixx-Script Tutorial](#tutorial)
    -   [Projekt-Konfiguration package.json](../docs/NPM-config.md)
    -   [NPM-Packages installieren](../docs/NPM-install.md)
    -   [Webpack-Konfiguration webpack.config.js](../docs/Webpack-config.md)
    -   [Brixx Web-Baustein [brixx-simple-element] erstellen](#brixx-simple-element)
    -   [Brixx Web-Baustein [brixx-complex-element] erstellen](#brixx-complex-element)
-   [Brixx-Script Referenz](#reference)
-   [Downloads](#downloads)

# <div id='required'/> Was wird alles benötigt?

## Quellcode Editor

Für die Entwicklung kann ein einfacher Texteditor, wie der in der Linux Community beliebte [Vim](https://www.vim.org/), oder ein Quellcode Editor wie [Notpad++](https://notepad-plus-plus.org/downloads/) oder [Sublime Text](https://www.sublimetext.com/) verwendet werden. Ein kostenfreie Alternative zu einer professionellen integrierten Entwicklungsumgebung (IDE) ist [Visual Studio Code](https://code.visualstudio.com/) (VS Code) als leichtgewichtiger Quellcode Editor mit vielen IDE Erweiterungen. Visual Studio Code ist damit mehr als nur ein Quellcode Bearbeitungstool und derzeit der wohl der beliebteste Quellcode Editor ([Install Visual Studio Code for Windows](../docs/VSCode-install.md)).

## Node.js und npm

Um Brixx Webkomponenten zu erstellen verwenden wir [Node.js®](https://nodejs.org/en/ "Opensource cross platform JavaScript runtime environment") (cross-platform JavaScript runtime environment) und [npm](https://www.npmjs.com/ "Node package manager") (Node Package Manager) als Entwicklungswerkzeuge ([Install Node.js and npm for Windows](../docs/Nodejs-install.md)).

### Node.js

Node.js wird zum einen für die Entwicklung mit npm benötigt, wir haben damit aber auch die Möglichkeit **State-of-the-art** Entwicklungswerkzeuge wie _Webpack_ und _Babel_ zu verwenden. Node.js wird nicht zur Laufzeit von Brixx Webkomponenten benötigt und für die Verwendung mit Brixx-Script keine Node.js Kentnisse.

### npm

npm ist ein fester Bestandteil bei der Installation von Node.js und ist der **Node Package Manager** zur Verwaltung der verwendeten JavaScript-Packages, sowohl für die Brixx Webkomponente, als auch für die Entwicklungswerkzeuge. Wie Node.js wird npm nur für die Entwicklung verwendet.

## Webpack

Mit dem Modul-Bundler [Webpack](https://webpack.js.org/ "Opensource JavaScript modul packer") können für moderne JavaScript-Anwendungen **Bundles** erstellt werden, in die alle benötigten Projektdateien gepackt (gebündelt) werden. Dadurch ist eine einfache Intergration und Verteilung von Brixx Webkomponenten möglich. Zur Erstellung einer Brixx Webkomponente mit Webpack stehen Beispiele und Templates zur Verfügung und erfordert für die Verwendung mit Brixx-Script keine Vorkenntnisse.

## Babel

Der JavaScript Compiler [Babel](https://babeljs.io/ "Opensource JavaScript transcompiler") wird verwendet um aktuellen JavaSript Code (ECMAScript 2015+) in eine Version für nicht kompatible oder ältere Browser zu konvertieren. Dadurch können Brixx Webkomponenten in allen Browsern und JavaScript-Umgebungen verwendet werden. Babel wird als Erweiterung mit Webpack verwendet und für die Verwendung stehen Beispiele und Templates zur Verfügung. Babel erfordert für die Verwendung mit Brixx-Sript keine Vorkenntnisse.

# <div id='getstarted'/> Erste Schritte

Wir verwenden moderne State-of-the-art Werkzeuge und Technologien zur Erstellung von Brixx Webkomponenten, um eine einfache Entwicklung und Integration in HTML-Dokumenten oder JavaScript-Projekten zu ermöglichen. Hierzu zählen neben [Node.js](https://nodejs.org/en/ "Opensource cross platform JavaScript runtime environment") und [npm](https://www.npmjs.com/ "Node package manager") auch [Webpack](https://webpack.js.org/ "Opensource JavaScript modul packer") und [Babel](https://babeljs.io/ "Opensource JavaScript transcompiler"). Zusätzlich steht für die Entwicklung aber auch eine Standalone Version zur Verfügung, die eine direkte Integration von Brixx Web-Bausteinen in ein HTML-Dokument ermöglicht.

## <div id='brixx-animal-list'/> Brixx Web-Baustein [brixx-animal-list] erstellen

Brixx Web-Bausteine (Brixx Webkomponenten) werden in der Regel im Ordner `[components]` erstellt und erwartet. Dazu erstellen wir einen Ordner `./components` im Projektordner `[brixx-element-sample]` wodurch die Projekt-Ordnerstruktur wie folgt aussieht.

    brixx-element-sample/
    ├── components/
    │   └── brixx-animal-list.js
    └── index.html

> Als **Brixx Web-Baustein** bezeichnet man eine nicht compilierte Brixx Webkomponente (_Brixx web component_) und als **Brixx Script-Component** die JavaScript-Datei (_Brixx script component_) von einem Brixx Web-Baustein.

Darin erstellen wir den Brixx Web-Baustein `[brixx-animal-list]` in der JavaScript-Datei `brixx-animal-list.js` (Brixx Script-Component). Zuerst erstellen wir eine Liste `anials` ([JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)) die mögliche Eingabe- oder Datenquellen für den Web-Baustein repräsentieren soll z. B. aus einem HTML-Formular, Webservice oder einer Datenbank.

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

Anschließend erstellen wir ein Brixx „Standard“-Element `Brixx.element` mit einer untergeordneten HTML-Liste.

> Ein **Brixx.element** kann für „einfache“ Brixx Web-Bausteine verwendet werden und einmal pro Web-Baustein vorkommen. Mit dem Brixx Standard-Element wird eine schnelle Entwicklung mit Brixx-Script ermöglicht, und reduziert Programmieraufwand und Projektkomplexität auf ein Minimum (Low-Code-Entwicklung).

    // Create a Brixx default element
    Brixx.element =
    <div>
      <h2>Animals</h2>
      <ul>
        ...
      </ul>
    </div>

> **Tip:** Die Code-Formatierung mit Brixx-Sript ist frei. Für eine bessere Projektstruktur ist aber empfohlen JSX-Code in _Parentheses_ `()` als _Code-Block_ zu verwenden.

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <h2>Animals</h2>
        <ul>
          ...
        </ul>
      </div>
    );

Die einzelnen Einträge `anial` der Liste `anials` werden in einer Schleife im HTML-Listenelement `<h3>{animal}</h3>` mit der JavaScript `Array map()` Funktion nacheinander ausgegeben. JavaScript-Erweiterungen können in JSX sehr einfach mit _Curly Brackets_ `{}` als _Code-Block_ integriert werden.

    ...
    {
      animals.map((animal) => (
        <li>
          <h3>{animal}</h3>
        </li>
      ))
    }
    ...

> Wir verwenden in den Beispiel [ECMAScript 2015+](https://en.wikipedia.org/wiki/ECMAScript) (ES6) als JavaScript-Standard und erstellen im aktuellen Beispiel für die Schleife eine [JavaScript Array map()](https://www.w3schools.com/jsref/jsref_map.asp). Das wird nicht in allen älteren Browsern oder Umgebungen unterstützt und gleichen wir mit Babel aus. Das hat den Vorteil dass man mit Brixx-Script mit aktuellem Standard entwickeln kann, und sich nicht um Abwärtskompatibilität kümmern muss. Dadurch muss man den Code später nicht ändern sondern „nur“ Babel weglassen; ist aber auch notwendig, da Benutzer unterschiedliche Browser und Versionen verwenden.

Die Schleife alternativ als JavaScript-for-Schleife, oder was Babel daraus macht.

    ...
    {
      for (var i = 0; i < animals.length; i++) {
        return (
          <li>
            <h3>{animals[i]}</h3>
          </li>
        )
      }
    }
    ...

Abschließend wird das `Brixx.element` als HTML-Elemet `<brixx-animal-list>` registriert.

    // Register the Brixx HTML element <brixx-animal-list>
    Brixx.registerElement({ name: "animal-list" });

Kompletter Brixx Web-Baustein in der Brixx Script-Component-Datei `./components/brixx-animal-list.js`

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <h2>Animals</h2>
        <ul>
          {
            animals.map((animal) => (
              <li>
                <h3>{animal}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    );

    // Register the Brixx HTML element <brixx-animal-list>
    Brixx.registerElement({ name: "animal-list" });

### Brixx Web-Baustein verwenden

Die integration in ein HTML-Dokument ist nicht kompliziert. Wir verwenden für das Beispiel <b>Brixx-Script Standalone</b> vom Brixx CDN-(Content Delivery Network)-Server um eine direkte Integration von unserem Brixx Web-Baustein zu ermöglichen.

    <!-- Load Brixx-Script standalone for development -->
    <script src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>

Der Brixx Web-Baustein `[brixx-animal-list]` in der Brixx Script-Component-Datei `./components/brixx-animal-list.js"` wird mit einen HTML-`<script>`-Element im HTML-Dokument eingefügt.

  <!-- Include the Brixx script component files for development -->
  <script type="text/babel" src="./components/brixx-animal-list.js" data-type="module" data-presets="brixx"></script>

Für Brixx-Script Standalone verwenden wir Babel mit `type="text/babel"` um die Brixx Webkomponente in den unterschiedlichen Browsern nutzen zu können. Dann werden die Attribute `data-type="module"` und `data-presets="brixx"` festgelegt, und der Brixx Web-Baustein kann als HTML-Element `<brixx-animal-list>` verwendet werden. Das Attribute _data-type_ ist optional und wird zum Import von ECMAScript 2015+ (ES6) Modulen benötigt. Zur Verwendung als HTML-Element werden keine weiteren Programmierkentnisse benötigt.

Zum Schluss müssen wir nur noch das HTML-Element `<brixx-animal-list>` in den `<body>`-Tag einfügen und sind fertig.

    <body>
      <!-- Add the Brixx HTML element -->
      <brixx-animal-list></brixx-animal-list>
    </body>

Komplettes HTML-Dokument in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html>
      <head>
        <!-- Load Brixx-Script standalone for development -->
        <script src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>
        <!-- Include the Brixx script component files for development -->
        <script type="text/babel" src="./components/brixx-animal-list.js" data-type="module" data-presets="brixx"></script>
      </head>

      <body>
        <!-- Add the Brixx HTML element -->
        <brixx-animal-list></brixx-animal-list>
      </body>
    </html>

Komplettes Beispiel v1.0.9 herunterladen [[brixx-element-sample] (ZIP-Archiv)](../assets/downloads/brixx-element-sample.zip)

### Brixx Web-Baustein testen

Zum testen von unserem Brixx Web-Baustein öffnen wir den Projektordner `[brixx-element-sample]` in Visual Studio Code und starten die HTML-Datei `index.html` mit dem _Live Server_. Dazu gibt es verschiedene Möglichkeiten.

1. Klick auf `[Go Live]` in der Visual Studio Code Status Bar (`Click to run live server`)
2. Öffnen der HTML-Datei im Editor-Fenster mit der Tastenkombination `[ALT+L Alt+O]`
3. Rechtsklick auf die HTML-Datei im **Editor-Fenster** und Auswahl von `[Open with Live Server]`
4. Rechtsklick auf die HTML-Datei in der **Explorer-Ansicht** und Auswahl von `[Open with Live Server]`

    <img src="../assets/images/brixx-element-sample.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual-Studio-Code - Explorer-Ansicht `[Open with Live Server]`

    Die HTML-Datei `index.html` wird mit dem _Live Server_ unter der Adresse `http://127.0.0.1:5500/index.html` bereitgestellt und im Standard-Browser geöffnet.

    > **Tip:** Der Browser kann bei den _Live Server_ Einstellungen unter `[Custom Browser]` festgelegt werden (`default=null`).

    <img src="../assets/images/vscode-live-server-01.webp" style="margin-bottom: -5px; width: 600px;" />

    Der Brixx Web-Baustein `<brixx-animal-list>` im Browser-Fenster

# <div id='tutorial'/> Brixx-Script Tutorial

## <div id='brixx-simple-element'/> Brixx Webkomponente [brixx-simple-element] erstellen

Wie erstellen eine „einfache“ **Brixx Webkomponente** und verwenden im Beispiel die Webkomponente wieder als **HTML-Element**. Als erstes erstellen wir wieder einen Projektordner `[brixx-simple-element]` und darin die [Projekt-Konfiguration package.json](../docs/NPM-config.md) als Konfigurationsdatei für das Projekt. Dafür nutzen wir das Template [package.json.windows](../assets/downloads/package.json.windows) und speichern die Datei als `package.json` im des Projekts. Anschließend können wir die Datei _package.json_ in Visual Studio Code bearbeiten und für unsere Webkomponente anpassen. Das erleichtert den Einstig im Umgang mit der _package.json_ und den Abhängigkeiten durch die benötigten JavaScript-Packages.

Brixx _package.json_ Template für Windows

    {
      "name": "{brixx-component-name}",
      "scripts": {
        "build": "webpack --env package_name=%npm_package_name%",
        "start": "webpack-dev-server --env package_name=%npm_package_name%"
      },
      "dependencies": {
        "@brixx/script": "{brixx-script-version}"
      },
      "devDependencies": {
        "@babel/core": "7.19.6",
        "@babel/preset-env": "7.19.4",
        "@babel/plugin-transform-react-jsx": "7.19.0",
        "babel-loader": "8.2.5",
        "css-loader": "6.7.1",
        "html-webpack-plugin": "5.5.0",
        "style-loader": "3.3.1",
        "webpack": "5.74.0",
        "webpack-cli": "4.10.0",
        "webpack-dev-server": "4.11.1"
      }
    }

In der _package.json_ ersetzen wir den Platzhalter `{brixx-component-name}` für die Eigenschaft `name` mit dem Namen für das JavaScript-Package der neuen Brixx Webkomponente. Der Name muss aus Kleinbuchstaben und einem Wort bestehen und darf Bindestriche und Unterstriche enthalten.

    "name": "brixx-simple-element"

Bei den `dependencies` ersetzen wir dann noch den Platzhalter `{brixx-script-version}` mit der Version für das NPM-Package `@brixx/script` das wir verwenden.

    "dependencies": {
      "@brixx/script": "1.0.9"
    }

Die Brixx Webkomponente bekommt den Namen `brixx-simple-element` und für das Package `@brixx/script` verwenden wir die Version `1.0.9`

Die Abhängigkeiten `devDependencies` werden für die Entwicklung verwendet um eine eigenständige Brixx Webkomponente zu erstellen, die anschließend als Brixx Web-Baustein in jeder Webseite oder Webanwendung verwendet werden kann. Die NPM-Packages werden „zentral“ in der _package.json_ verwaltet und müssen nicht einzeln mit `npm install --save-dev  <package>` installiert werden.

Zur Erstellung der Brixx Webkomponente wird _Webpack_ und _Babel_ verwendet. Das erfordert für die Entwicklung eine Reihe von NPM-Packages als `devDependencies` und sind im Template eingetragen. Dabei sind die Versionsnummern der NPM-Packages für das Beispiel „gepinnt“, können aber bei Bedarf angepasst werden.

    ...
    "devDependencies": {
      "@babel/core": "7.19.6",
      "@babel/preset-env": "7.19.4",
      "@babel/plugin-transform-react-jsx": "7.19.0",
      "babel-loader": "8.2.5",
      "css-loader": "6.7.1",
      "html-webpack-plugin": "5.5.0",
      "style-loader": "3.3.1",
      "webpack": "5.74.0",
      "webpack-cli": "4.10.0",
      "webpack-dev-server": "4.11.1"
    }
    ...

Mit den NPM `scripts` können wir die Brixx Webkomponente mit `npm run build` erstellen und mit `npm run start` mit dem _Webpack DevServer_ im Browser testen.

    "scripts": {
      "build": "webpack --env package_name=%npm_package_name%",
      "start": "webpack-dev-server --env package_name=%npm_package_name%"
    }

### [NPM-Packages installieren](../docs/NPM-install.md)

Wenn die Erweiterung _NPM-Scripts_ installiert ist können die NPM-Scripts direkt aus der Explorer-Ansicht ausgeführt werden. Seit der Version 1.23 steht in Visual Studio Code in der Explorer-Ansicht bereits ein integrierter _NPM Script Explorer_ zur Verfügung.

> **Tip:** Halten Sie den Visual Studio Code immer auf neuesten Stand. Dieser bekommt regelmäßige Updates spendiert.

Wir öffnen den Projektordner `[brixx-element-sample]` in Visual Studio Code und installieren die NPM-Packages der Abhängigkeiten in der _package.json_ durch Klick mit der rechten Maustaste auf den Eintrag `[package.json]` in der Explorer-Ansicht unter `[NPM-SCRIPTS]` und Auswahl von `[Run Intall]` im Kontextmenü.

<img src="../assets/images/vscode-npm-install-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - NPM-SCRIPTS (_NPM Script Explorer_)

Nach der Installation der Abhängigkeiten in der _package.json_ für das Projekt sehen wir in der Explorer-Ansicht den Ordner `[node_modules]` mit den NPM-Packages und die Datei `package-lock.json`

<img src="../assets/images/vscode-node-modules.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Explorer-Ansicht

### [Webpack-Konfiguration webpack.config.js](../docs/Webpack-config.md)

Für die Webpack-Konfiguration benötigen wir eine Konfigurationsdatei im Stammverzeichnis des Projekts. Zur Erstellung einer „einfachen“ **Brixx Webkomponente** nutzen wir das Template [webpack.config.template.js](../assets/downloads/webpack.config.template.js) und speichern die Datei als `webpack.config.js` im Projektordner. Damit sind keine Webpack Kentnisse und Anpassungen der Konfigurationsdatei notwendig. In diesem Fall wird die Eigenschaft `name` der _package.json_ als Name für die Brixx Webkomponente verwendet.

<img src="../assets/images/vscode-webpack-config.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - webpack.config.js

Damit sind die Vorbereitungen zur Erstellung der Brixx Webkomponente abgeschlossen wodurch die Projekt-Ordnerstruktur im Beispiel wie folgt aussieht.

    brixx-simple-element/
    ├── node-modules/
    ├── package.json.lock
    ├── package.json
    └── webpack.config.js

> Im Unterschied zum Brixx Web-Baustein importieren wir die Brixx Webkomponente nicht direkt mit der JavaScript-Datei in das HTML-Dokument. Dabei wird die Webkomponente für die Entwicklung mit Webpack in der JavaScript-Datei `index.js` erwartet und in einem **Build**-Prozess mit dem NPM-Script `build` erstellt.

Wir erstellen die Brixx Webkomponente in der JavaScript-Datei `index.js` und importieren zuerst das Modul `Brixx` aus dem NPM-Package `@brixx/script`, das wir mit der _package.json_ installiert haben.

    // Imports
    import { Brixx } from '@brixx/script'

Anschließend erstellen wir ein **JSX-Element** mit dem HTML Tag Name `<Greeting>` und dem HTML Attribut `name`. Das Attribut _name_ können wir im JSX-Element mit _Curly Brackets_ `{}` verwenden. Ähnlich wie die Liste `animals` im Brixx Web-Baustein `[brixx-animal-list]`.

    // Create a Brixx JSX element
    const Greeting = ({ name }) => (
      <div>
        <h3>Hello {name}. Welcome to the our Brixx world!</h3>
      </div>
    )

Als nächstes erstellen ein `Brixx.element` mit dem JSX-Element `<Greeting>` und dem Attribut `name={'Bob the Builder'}` als Basis für die Brixx Webkomponente.

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <hr />
        <h2>Brixx JSX element</h2>
        <Greeting name={'Bob the Builder'} />
        <hr />
      </div>
    )

Abschließend wird das `Brixx.element` als HTML-Elemet `<brixx-simple-element>` registriert.

    // Register the Brixx HTML element <brixx-simple-element>
    Brixx.registerElement({ name: 'brixx-simple-element' })

Komplette Brixx Webkomponente in der JavaScript-Datei (Brixx Script-Component) `./index.js`

    // Imports
    import { Brixx } from '@brixx/script'

    // Create a Brixx JSX element
    const Greeting = ({ name }) => (
      <div>
        <h3>Hello {name}. Welcome to the our Brixx world!</h3>
      </div>
    )

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <hr />
        <h2>Brixx JSX element</h2>
        <Greeting name={'Bob the Builder'} />
        <hr />
      </div>
    )

    // Register the Brixx HTML element <brixx-simple-element>
    Brixx.registerElement({ name: 'brixx-simple-element' })

WirBei der Erstellung einer Brixx Webkomponente dient die HTML-Datei als Template für den **Build**-Prozess mit Webpack und wird in der Regel nur zum testen mit dem _Webpack DevServer_ verwendet. Wir nutzen im Beispiel das Template [index.element.template.html](../assets/downloads/index.element.template.html) und speichern die Datei als `index.html` im Projektordner. Dabei sind keine Anpassungen für das Template erforderlich und kann direkt verwendet werden.

HTML-Template in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Brixx HTML element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</title>
      </head>

      <body>
        <h1>Brixx HTML element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</h1>
        <!-- Add the Brixx HTML element -->
        <<%= htmlWebpackPlugin.options.component %>></<%= htmlWebpackPlugin.options.component %>>
        <!-- Include the Brixx script component files-->
      </body>
    </html>

Vor der Erstellung der Brixx Webkomponente mit Webpack sieht die Projekt-Ordnerstruktur folgendermaßen aus.

    brixx-simple-element/
    ├── node-modules/
    ├── index.html
    ├── index.js
    ├── package.json.lock
    ├── package.json
    └── webpack.config.js

### Brixx Webkomponente bauen

Die Brixx Webkomponente wird mit `npm run build` erstellt. Wir öffnen den Projektordner `[brixx-simple-element]` in Visual Studio Code und bauen (erstellen) die Brixx Webkomponente durch Klick mit der rechten Maustaste auf den Eintrag `[build]` in der Explorer-Ansicht unter `[NPM-SCRIPTS]` und Auswahl von `[Run]` im Kontextmenü oder Klick auf das Symbol **[** <img src="../assets/images/vscode-run.png" width="8px" /> **]**

<img src="../assets/images/vscode-npm-build-01.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Run build

Nach dem `Build`-Prozess sieht die Projekt-Ordnerstruktur abschließend wie folgt aussieht.

    brixx-simple-element/
    ├── dist/
    │   ├── components/
    │   │   └── brixx-simple-element.js
    │   └── index.html
    ├── node-modules/
    ├── index.html
    ├── index.js
    ├── package.json.lock
    ├── package.json
    └── webpack.config.js

Beim **Build**-Prozess wird der Ordner `[dist]` erstellt. Darin die Brixx Webkomponente als **Brixx Script-Component** im Ordner `[components]` in der JavaScript-Datei `brixx-simple-element.js`. Der Ordner `[dist]` entspricht der Live-Umgebung von einem Projektordner und wird zur Distribution der Brixx Webkomponente erstellt.

<img src="../assets/images/vscode-npm-build-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Brixx Component built

### Brixx Webkomponente verwenden

In der Regel wird nur die JavaScript-Datei (Brixx Script-Component) der Brixx Webkomponente im Ordner `[dist]` in Projekten verwendet und verteilt.

Auf dem ersten Blick scheint das Ergebnis im Ordner `[dist]` identisch zum Brixx Web-Baustein `[brixx-animal-list]` zu sein. Auch die Brixx Webkomponente ist eine JavaScript-Datei im Ordner `[components]` und wird als Brixx HTML-Element im HTML-Dokument verwendet. Aber anders als beim Brixx Web-Baustein ist die Brixx Webkomponente **eigenstängig**, kann direkt ohne Brixx-Script Standalone als **Brixx Script-Component** in das HTML-Dokument importiert werden.

Komplettes Beispiel v1.0.9 herunterladen [[brixx-simple-element] (ZIP-Archiv)](../assets/downloads/brixx-simple-element.zip)

### Brixx Webkomponente testen

Die HTML-Datei `index.html` wird in erster Linie zum testen der Brixx Webkomponente während der Entwicklung verwendet, kann aber auch für die Live-Umgebung angepaßt und verwenet werden. Wir haben zwei Möglichkeiten die Webkomponente zu testen.

-   Die Brixx Webkomponente kann mit `npm run start` während der Entwicklung mit dem **Webpack DevServer** getestet werden und muss vorher nicht erstellt werden. Wir starten die Webkomponente durch Klick mit der rechten Maustaste auf den Eintrag `[start]` in der Explorer-Ansicht unter `[NPM-SCRIPTS]` und Auswahl von `[Run]` im Kontextmenü oder Klick auf das Symbol **[** <img src="../assets/images/vscode-run.png" width="8px" /> **]**

    <img src="../assets/images/vscode-npm-start.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual Studio Code - Run start

    Die HTML-Datei `index.html` wird mit dem _Webpack DevServer_ unter der Adresse `http://127.0.0.1:8080/index.html` bereitgestellt und im Standard-Browser geöffnet.

    <img src="../assets/images/vscode-webpack-devserver.webp" style="margin-bottom: -5px; width: 600px;" />

    Der Brixx Web-Baustein `<brixx-simple-element>` im Browser-Fenster

-   Wir können die Brixx Webkomponente mit dem **Live Server** testen wie beim Web-Baustein `[brixx-animal-list]`. Dafür muss die Brixx Webkomponente vorher erstellt werden, wobei die Struktur im Ordner `[dist]` dem Projektordner vom Web-Baustein entspricht, und starten die HTML-Datei `index.html` mit dem _Live Server_.

    ```
    dist/
    ├── components/
    │   └── brixx-simple-element.js
    └── index.html
    ```

    <img src="../assets/images/vscode-open-live-server.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual-Studio-Code - Explorer-Ansicht `[Open with Live Server]`

    Die HTML-Datei `index.html` wird mit dem _Live Server_ unter der Adresse `http://127.0.0.1:5500/index.html` bereitgestellt und im Standard-Browser geöffnet.

    <img src="../assets/images/vscode-live-server-02.webp" style="margin-bottom: -5px; width: 600px;" />

    Der Brixx Web-Baustein `<brixx-simple-element>` im Browser-Fenster

## <div id='brixx-complex-element'/> Brixx Webkomponente [brixx-complex-element] erstellen

Wie erweitern die Brixx Webkomponente `[brixx-simple-element]` im ersten Schritt mit zusätzlichen CSS-Dateien und danach mit einer **Brixx Class Component** (Klassen-Komponente). Klassen-Komponenten können zur besseren Strukturierung komplexer Projekten verwendet werden und sind besonders für fortgeschrittene Entwickler interessant. Dafür erstellen wir zuerst einen Projektordner `[brixx-complex-element]` und kopieren alle Dateien aus dem vorherigen Beispiel in den Projektordner.

### HTML Styles hinzufügen

Wir „stylen“ die Brixx Webkomponente mit **CSS** (Cascade Style Sheet) und erstellen dafür einen Ordner `./styles` im Projektordner. Wir nutzen zum einen [Bootstrap](https://getbootstrap.com/), kopieren die [`bootstrap.min.css`](../assets/downloads/bootstrap.min.css) in den Ordner `[styles]` und erstellen eine weitere CSS-Datei `index.css` für die Brixx Webkomponente.

Komplette Styles der CSS-Datei `index.css`

    body {
      margin: 10px;
    }

    a {
      font-size: 14px;
    }

    a:link {
      color: #095484;
      text-decoration: none;
    }

    a:visited {
      color: #aaa;
      text-decoration: none;
    }

    a:hover {
      color: #8ebf42;
      text-decoration: none;
    }

    a:active {
      color: #800000;
      text-decoration: none;
    }

Die verwendeten Styles dienen als einfaches Beispiel und müssen nicht im Einzelnen betrachtet werden. Damit sieht die Projekt-Ordnerstruktur folgendermaßen aus.

    brixx-complex-element/
    ├── styles/
    │   ├── bootstrap.min.css
    │   └── index.css
    ├── index.html
    ├── index.js
    ├── package.json
    └── webpack.config.js

### HTML-Dokument erweitern

Wir erweitern das HTML-Dokument im `<head>`-Tag mit einem HTML-Kommentar. Hier wird die im **Build**-Prozess erstellte CSS-Datei eingefügt und dient zur Verdeutlichung.

    ...
    <!-- Include the Brixx script component files -->
    ...

Im `<body>`-Tag eweitern wir das HTML-Dokument mit einem einfachen HTML-Hyperlink-Element um die Styles in der CSS-Datei zu testen.

    ...
    <a href="https://brixx.it/brixx-script" target="_bank">[Learn more about Brixx-Script]</a>
    ...

Komplettes HTML-Dokument in der HTML-Datei `index.html`

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brixx HTML element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</title>
        <!-- Include the Brixx script component files -->
      </head>

      <body>
        <h1>Brixx HTML element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</h1>
        <!-- Add the Brixx HTML element -->
        <<%= htmlWebpackPlugin.options.component %>></<%= htmlWebpackPlugin.options.component %>>
        <a href="https://brixx.it/brixx-script" target="_bank">[Learn more about Brixx-Script]</a>
        <!-- Include the Brixx script component files -->
      </body>
    </html>

### Brixx Webkomponente erweitern

Wir erweitern die Brixx Webkomponente in der JavaScript-Datei `index.js` und importieren zusätzlich die CSS-Dateien.

    // Styles
    import './styles/bootstrap.min.css'
    import './styles/index.css'

Danach registrieren wir das Brixx HTML-Element unter dem neuen Namen `brixx-complex-element` und sind schon fertig.

    // Register the Brixx HTML element <brixx-complex-element>
    Brixx.registerElement({ name: 'brixx-complex-element' })

Bevor wir das Beispiel mit einer **Brixx Class Component** erweitern machen wir die restlichen notwendigen Anpassungen und Erweiterungen.

### Webpack-Konfiguration erweitern

Für die „Integration“ der CSS-Dateien erweitern wir die Webpack-Konfiguration mit dem Webpack Plugin [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/). Damit haben wir u. a. die Möglichkeit eine externe CSS-Datei für die Brixx Webkomponente einzubinden, und unterstützt auch On-Demand-Loading von CSS und SourceMaps.

    ...
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    ...

Anschließend ersetzen wir bei den _module.rules_ den `style-loader` mit dem `MiniCssExtractPlugin.loader`.

    ...
    use: [MiniCssExtractPlugin.loader, 'css-loader']
    ...

Das Plugin wird in der Webpack-Konfiguration initialisiert und konfiguriert. Dabei legen wir mit der Eigenschaft `filename` die CSS-Datei fest die beim **Build**-Prozess erstellt werden soll. Das hat z. B. den Vorteil das die CSS-Datei gemeinsam von mehreren Webkomponenten und vom HTML-Dokument direkt verwendet werden kann.

      new MiniCssExtractPlugin({
        filename: 'styles/index.css',
      })

### Projekt-Konfiguration anpassen

In der Projekt-Konfiguration _package.json_ müssen auch nicht viele Anpassungen gemacht werden. Wir ersetzen den aktuellen Namen `brixx-simple-element` bei der Eigenschaft `name` mit dem Namen für das JavaScript-Package der neuen Brixx Webkomponente.

    "name": "brixx-complex-element"

Bei den `devDependencies` ersetzen wir das Package `style-loader` gegen `mini-css-extract-plugin` wie für das Plugin in der Webpack Konfiguration.

    ...
    "mini-css-extract-plugin": "2.7.2",
    ...

### NPM-Packages installieren

Nach der Änderung der _package.json_ installieren wir die NPM-Packages mit `npm install` und testen anschließend die Brixx Webkomponente.

### Brixx Webkomponente testen

Die Brixx Webkomponente können wir während der Entwicklung jederzeit mit `npm run start` testen, ohne vorher die Brixx Webkomponente erstellen zu müssen.

<img src="../assets/images/vscode-complex-element-01.webp" style="margin-bottom: -5px; width: 600px;" />

Der Brixx Web-Baustein `<brixx-complex-element>` im Browser-Fenster

### Brixx Class Component hinzufügen

Damit der Name der Brixx Wekomponente auch hält was er verspricht erweitern wir die Webkomponente mit der **Brixx Class Component** (Klassen-Komponente) und erstellen im Ordner `[components]` die Class Component `Counter` in der JavaScript-Datei `Counter.js` Damit sieht die Projekt-Ordnerstruktur folgendermaßen aus.

    brixx-complex-element/
    ├── components/
    │   └── counter.js
    ├── node_modules/
    ├── styles/
    │   ├── bootstrap.min.css
    │   └── index.css
    ├── index.html
    ├── index.js
    ├── package.json.lock
    ├── package.json
    └── webpack.config.js

Under Construction ...

Komplette Brixx Class Component `Counter` in der JavaScript-Datei `Counter.js`

    // Imports
    import { Brixx } from '@brixx/script'

    /**
    * Class Brixx Counter component
    */
    export default class Counter extends Brixx.Component {
      /**
      * Create a Brixx Counter component object
      *
      * @param {*} props - the Counter props
      */
      constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
      }

      /**
      * Brixx Counter component mounted
      */
      componentDidMount() {
        Brixx.console.log('Brixx Counter Component mounted')

        // Force render if component is mounted
        this.forceUpdate()
      }

      /**
      * Render the Brixx Counter component
      */
      render() {
        return (
          <div id={this.id}>
            {this.props.children}
            <h3>Count: {this.state.count}</h3>
            <button
              onClick={(event) => {
                this.setState({
                  count: this.state.count + 1
                })
              }}
            >
              Increment
            </button>
          </div>
        )
      }
    }

Um die Brixx Class Component `Counter` zu verwenden wird die JavaScript-Datei `Counter.js` im Ordner `[components]` in die Brixx Webkomponente importiert.

    import Counter from './components/Counter'

Anschließend können wir die Class Component direkt als HTML-Element `<Counter>` in der Brixx Webkomponente verwenden.

    // Create a Brixx default element
    Brixx.element = (
      ...
        <h2>Brixx Component</h2>
        <Counter></Counter>
        <hr />
      ...
    )

Komplette Brixx Webkomponente in der JavaScript-Datei `./index.js`

    // Imports
    import { Brixx } from '@brixx/script'
    import Counter from './components/Counter'

    // Styles
    import './styles/bootstrap.min.css'
    import './styles/index.css'

    // Create a Brixx JSX element
    const Greeting = ({ name }) => (
      <div>
        <h3>Hello {name}. Welcome to the our Brixx world!</h3>
      </div>
    )

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <hr />
        <h2>Brixx JSX element</h2>
        <Greeting name={'Bob the Builder'} />
        <hr />
        <h2>Brixx Component</h2>
        <Counter></Counter>
        <hr />
      </div>
    )

    // Register the Brixx HTML element <brixx-complex-element>
    Brixx.registerElement({ name: 'brixx-complex-element' })

### Brixx Webkomponente bauen

Wir erstellen die Brixx Webkomponente wie im Beispiel vorher. Wir öffnen den Projektordner `[brixx-complex-element]` in Visual Studio Code und bauen die Brixx Webkomponente mit dem NPM-Script `[build]` in der Explorer-Ansicht unter `[NPM-SCRIPTS]`. Nach dem `Build`-Prozess sieht die Projekt-Ordnerstruktur abschließend folgendermaßen aus.

    brixx-complex-element/
    ├── components/
    │   └── Counter.js
    ├── dist/
    │   ├── components/
    │   │   └── brixx-complex-element.js
    │   ├── styles/
    │   │   └── index.css
    │   └── index.html
    ├── node-modules/
    ├── styles/
    │   ├── bootstrap.min.js
    │   └── index.css
    ├── index.html
    ├── index.js
    ├── package.json.lock
    ├── package.json
    └── webpack.config.js

Beim **Build**-Prozess wird der Ordner `[dist]` erstellt. Darin die Brixx Webkomponente als **Brixx Script-Component** im Ordner `[components]` in der JavaScript-Datei `brixx-complex-element.js`. Zudem wird noch der Ordner `[styles]` erstellt mit der CSS-Datei für die Webkomponente `index.css`
Der Ordner `[dist]` entspricht der Live-Umgebung von einem Projektordner und wird zur Distribution der Brixx Webkomponente erstellt.

### Brixx Webkomponente verwenden

Wir können nach dem **Build**-Prozess die JavaScript-Datei (Brixx Script-Component) der Brixx Webkomponente in Projekten verwenden und verteilen. Die Webkomponente ist eine JavaScript-Datei im Ordner `[components]` und wird als Brixx HTML-Element im HTML-Dokument verwendet. Die Brixx Webkomponente ist **eigenstängig** und kann direkt als **Brixx Script-Component** in das HTML-Dokument importiert und verwendet werden.

Komplettes Beispiel v1.0.9 herunterladen [[brixx-complex-element] (ZIP-Archiv)](../assets/downloads/brixx-complex-element.zip)

### Brixx Webkomponente testen

Wir testen die Brixx Webkomponente noch einmal mit `npm run start` bevor wir die Brixx Webkomponente endgültig erstellen.

<img src="../assets/images/vscode-complex-element-02.webp" style="margin-bottom: -5px; width: 600px;" />

Der Brixx Web-Baustein `<brixx-complex-element>` im Browser-Fenster

## Brixx Script-Component

# <div id='reference'/> Brixx-Script Referenz

## Brixx-Script Standalone

Für die Entwicklung steht eine Brixx-Script Standalone Version zur Verfügung. Dadurch kann Brixx-Script direkt ohne precompiling verwendet werden. Die Brixx-Script Standalone Datei [`brixx.min.js`](https://brixx.it/@brixx/standalone/brixx.min.js) kann dazu einfach mit einem `<script>`-Tag vom Brixx CDN-(Content Delivery Network)-Server importiert (referenziert) werden.

    <!-- Load Brixx-Script standalone for development -->
    <src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>

Ein Brixx Web-Baustein kann danach mit einem `<script>`-Tag importiert werden, wie z. B. die Brixx Script-Component-Datei `./components/brixx-animal-list.js`

    <!-- Include the Brixx script component files for development -->
    <script type="text/babel" src="./components/brixx-animal-list.js" data-type="module" data-presets="brixx"></script>

Brixx-Script Standalone verwendet Babel, um ECMAScript 2015+ Code in eine abwärtskompatible Version von JavaScript in aktuellen und älteren Browsern oder Umgebungen zu konvertieren.

Mit dem Attribut `type` gibt den Medientyp des Skripts an. Für Brixx-Script verwenden wir Babel mit `type="text/babel"` und hat den Vorteil dass man mit aktuellem Standard entwickeln kann, und sich nicht um Abwärtskompatibilität kümmern muss da Benutzer unterschiedliche Browser und Versionen verwenden.

Das Attribut `src` gibt die URL einer extern verwendeten Brixx Script-Component Datei an, im Beispiel mit `src="./components/brixx-animal-list.js"`

Das Attribut `data-type` ist optional, wird benötigt wenn ECMAScript 2015+ (ES6) Modulen verwendet werden und für Babel mit `data-type="module"` angegeben.

Mit dem Attribut `data-preset` wird angegeben dass Brixx-Script verwendet wird und für Babel mit `data-preset="brixx"` angegeben.

Der Brixx Web-Baustein kann auch inline eingefügt und als Brixx HTML-Element registriert werden. Dabei muss im folgenden Beispiel das Attribut `data-type` nicht angegeben werden, da für den Beixx Web-Baustein kein JavaScript (ECMAScript 2015+) Modul verwendet wird.

    <!-- Include the Brixx script component for development -->
    <script type="text/babel" data-presets="brixx">
      const animals = ["Dog", "Cat", "Mouse"];

      Brixx.element = (
      <div>
          <h2>Animals</h2>
          <ul>
          {animals.map((animal) => (
              <li>
              <h3>{animal}</h3>
              </li>
          ))}
          </ul>
      </div>
      );

      Brixx.registerElement({ name: "animal-list" });
    </script>

Es wird empfohlen Brixx-Script Standalone nicht in einer Produktionsumgebung zu verwenden. Beim Start wird in der Browserkonsole folgende Information ausgegeben.

> `You are using the in-browser Brixx transformer. Be sure to precompile scripts for production - https://brixx.it/brixx-script`

## Brixx-Script Package

### Brixx-Script Package mit npm installieren

    `npm i @brixx/script`

### Brixx-Script Package importieren

Das Modul `Brixx` vom Package `@brixx/script` importieren.

    `import { Brixx } from '@brixx/script'`

## Brixx-Script Library

Das Modul `Brixx` von der Brixx-Script Library importieren. Dafür kann man die Brixx-Script Library (minified) [`brixx.js`](https://brixx.it/@brixx/script/brixx.js) vom Brixx CDN-(Content Delivery Network)-Server in den Projektordner kopieren und anschließend importieren.

    import { Brixx } from './brixx'

> **Tip:** Die Brixx-Script Library vom Brixx CDN-(Content Delivery Network)-Server ist immer die _Latest_ Version und kann die Version in der npm-Registry überholen. Hier hat man die Möglichkeit vorab die neueste Versionen zu testen.

## Brixx class

### constructor()

Constructs a Brixx instance.

**Returns**  
`{Object}` - Brixx instance.

**Example**

    const instance = new Brixx()

### .render(element=Brixx.element || { element=Brixx.element, rootElement=Brixx.rootElement })

Renders a Brixx element. It is recommended to use the configuration object for the settings.

**Parameters**  
`{Object} [element=Brixx.element] (optional)` - the Brixx element. If no parameter is specified, the default Brixx element is used.

`{Object} [object.element=Brixx.element] (optional)` - the Brixx element. If a configuration object is used and the parameter "element" is not specified, the default Brix element is used.

`{Node} [object.rootElement=Brixx.rootElement] (optional)` - the Brixx root element. The Brixx root element is used as a container element to render a Brixx web component. If a configuration object is used and the parameter "rootElement" is not specified and the element is a Brixx script component, the Brixx element is inserted at the current script position. If no Brixx script component is used, an existing Brixx root element is searched for. If no root element is found, an HTML `<div>` element with `id='brixx-root'` is inserted at the end of the `<body>` section. Use `createRoot` to change the default Brixx root element `[id='brixx-root']`

**Examples**

    Brixx.element = (
      <div>
        <h1>Brixx default component element</h1>
      </div>
    )

    const instance = new Brixx()
    instance.render()

###

    const instance = new Brixx()
    instance.render(
      <div>
        <h1>Brixx component element</h1>
      </div>
    )

###

    Brixx.element = (
      ...
    )

    const instance = new Brixx()
    instance.render({})

###

    const element = (
      ...
    )

    const instance = new Brixx()
    instance.render({element})

###

    const rootElement = document.getElementById('root')

    const instance = new Brixx()
    instance.render({element: Brixx.element, rootElement})

###

    const my-root-element = document.getElementById('my-root-element')

    const my-component = (
      ...
    )

    const instance = new Brixx()
    instance.render({element: my-component, rootElement: my-root-element})

###

    ...
    const config = {element: my-component, rootElement: my-root-element}

    const instance = new Brixx()
    instance.render(config)

###

    const my-component = (
      ...
    )

    Brixx.element = my-component

    const instance = new Brixx()
    instance.render()

###

    Brixx.element = (
      ...
    )

    const element = Brixx.element

    const instance = new Brixx()
    instance.render({element, rootElement: document.getElementById('my-root-element')})

## Brixx static properties

### .componentFolder

Returns the Brixx component folder. Brixx web components are usually created and expected in the Brixx component folder. Use `setComponentFolder` to change the default component folder `[componentFolder='components']`

`Readonly`

**Returns**  
`{String}` - Brixx component folder.

**Example**

    console.log('Brixx component folder: ', Brixx.componentFolder)

Console output

    Brixx component folder: components

### .element

`{Object} [element=null]` - the Brixx element. The Brixx element is a default Brixx web component, can appear once per web application and is the fallback object for some operations. The Brixx default element enables rapid development with Brixx script and reduces programming effort and project complexity to a minimum (low-code development).

**Example**

    Brixx.element = (
      <div>
        <h1>Brixx default component element</h1>
      </div>
    )

### .elementPrefix

Returns the Brixx element prefix. The Brixx HTML element identifier is preceded by the Brixx element prefix with a hyphen and will be used with `registerElement`. Use `setElementPrefix` to change the default element prefix `[elementPrefix='brixx']`

`Readonly`

**Returns**  
`{String}` - Brixx element prefix.

**Example**

    console.log('Brixx element prefix: ', Brixx.elementPrefix)

Console output

    Brixx element prefix: brixx

### .version

Returns the Brixx version in semantic versioning format.

`Readonly`

**Returns**  
`{String}` - Brixx version.

**Example**

    console.log('Brixx version: ', Brixx.version)

Console output

    Brixx version: 1.0.9

## Brixx static methods

### createRoot(rootElement)

Creates and returns the Brixx root element. The Brixx root element is be used as a container element to render a Brixx web component.

**Parameters**  
`{Node} [rootElement] (optional)` - the Brixx root element. If the parameter `rootElement` is not specified, an existing Brixx root element is searched for. If no root element is found, an HTML `<div>` element with `id='brixx-root'` is inserted at the end of the `<body>` section and returned.

**Returns**  
`{Node}` - Brixx root element.

**Example**

    const rootElement = document.getElementById('root')
    const root = Brixx.createRoot(rootElement)

### .load(file)

Load Text/JSON files.

**Parameters**  
`{String} [file]` - the file name.

**Returns**
`{String}` - File data.

**Example**

    const data = Brixx.load('./settings.json')
    const settings = JSON.parse(data)

### .registerElement(name='{Brixx.elementPrefix}-element' || { name='{Brixx.elementPrefix}-element', script=null })

Register a Brixx HTML element. It is recommended to use the configuration object for the settings. In order to register an HTML element for the web application in the browser, a Brixx HTML element name must be specified as identifier. The Brixx HTML element identifier is prefixed with the Brixx element prefix with a hyphen and can be changed with `setElementPrefix`. The default Brixx element name is created with the Brixx element prefix and if the element prefix is not specified in the element name, the element prefix is prepended to the element name.

**Parameters**  
`{String} [name='{Brixx.elementPrefix}-element'] (optional)` - the Brixx HTML element name. If no parameter is specified, the default Brixx HTML element identifier used.

`{String} [object.name='{Brixx.elementPrefix}-element'] (optional)` - the Brixx HTML element name. If a configuration object is used and the parameter "name" is not specified, the default Brix HTML element identifier is used.

`{String} [object.script=null] (optional)` - the Brixx script component. The file name of the Brixx script component to set as Brixx HTML element.

**Examples**

    // The default Brixx element prefix is 'brixx'
    Brixx.registerElement()

Registers the Brixx HTML element `<brixx-element>`

###

    Brixx.registerElement('element-sample')

Registers the Brixx HTML element `<brixx-element-sample>`

###

    Brixx.registerElement('brixx-element-sample')

Registers the Brixx HTML element `<brixx-element-sample>`

###

    Brixx.registerElement({})

Registers the Brixx HTML element `<brixx-element>`

###

    Brixx.registerElement({name})

Registers the Brixx HTML element `<brixx-element>`

###

    Brixx.registerElement({name: 'element-sample'})

Registers the Brixx HTML element `<brixx-element-sample>`

###

    Brixx.registerElement({name: 'element-sample', script: './components/brixx-element-sample.js'})

Registers the Brixx HTML element `<brixx-element-sample>` with the Brixx script component `./components/brixx-element-sample.js`

###

    const config = {name: 'element-sample', script: './components/brixx-element-sample.js'}

    Brixx.registerElement(config)

Registers the Brixx HTML element `<brixx-element-sample>` with the Brixx script component `./components/brixx-element-sample.js`

### .run({~~_file='index.bs'_~~, ~~_load=false_~~, rootElement=Brixx.rootElement})

Run a Brixx app. It is a shortcut to create and render a Brixx instance and will used for a Brixx default element.

**Parameters**  
`{String} [object.file='index.bs'] (optional)` - the Brixx script component file name (_for future use_).

`{Boolean} [object.load=false] (optional)` - the load at start option (_for future use_).

`{Node} [object.rootElement=Brixx.rootElement] (optional)` - the Brixx root element. The Brixx root element is used as a container element to render a Brixx web component. If a configuration object is used and the parameter "rootElement" is not specified and the element is a Brixx script component, the Brixx element is inserted at the current script position. If no Brixx script component is used, an existing Brixx root element is searched for. If no root element is found, an HTML `<div>` element with `id='brixx-root'` is inserted at the end of the `<body>` section. Use `createRoot` to change the default Brixx root element `[id='brixx-root']`

**Example**

    Brixx.element = (
      <div>
        <h1>Brixx default component element</h1>
      </div>
    )

    Brixx.run()

### .setComponentFolder(folder='components')

Set the Brixx Component folder. Brixx web components are usually created and expected in the Brixx component folder.

**Parameters**  
`{String} [folder='components'] (optional)` - the Brixx component folder.

**Example**

    Brixx.setComponentFolder('my-component-folder')

### .setElementPrefix(prefix='brixx')

Set the Brixx HTML element prefix. The Brixx HTML element identifier is preceded by the Brixx element prefix with a hyphen and will be used with `registerElement`.

**Parameters**  
`{String} [prefix='brixx'] (optional)` - the Brixx element prefix.

**Example**

    Brixx.setElementPrefix('web')

### .UUID()

Returns a Brixx uuid string. The uuid is grouped as 32 hexadecimal characters with four hyphens in five groups (`XXXXXXXX`-`XXXX`-`XXXX`-`XXXX`-`XXXXXXXXXXXX`). The number of characters per group is 8-4-4-4-12.

**Returns**  
`{String}` - Brixx uuid.

**Example**

    const uuid = Brixx.UUID()
    console.log('uuid:', uuid)

Console output

    uuid: 51599071-9c39-fbab-356c-9cbd6e476f6c

## Brixx.console (object)

... under construction ...

The Brixx console object. A special Brixx console object, based on the browser console object, typically used for system information during development or for debugging and to be disabled at runtime. 

> The browser console object should be used very carefully so that no unwanted information is output at runtime. 

### .console.dot

**Example**

    Brixx.console.dot(30)

###

    Brixx.console.dot(30, '-')

### .console.log

**Example**

    Brixx.console.log('Brixx logger is', Brixx.console.getLogEnabled())

### .console.out

**Example**

    Brixx.console.out('Brixx-Script v' + Brixx.version)
    Brixx.console.out('https://brixx.it/brixx-script')

### .console.setLogEnabled

**Example**

    Brixx.console.setLogEnabled(true)

### .console.setLogLevel

**Example**

    Brixx.console.setLogLevel(Brixx.console.Level.DEBUG)

## Brixx.Component (object)

**Example**

... under construction ...

The Brixx Component class.

**Example**

Create a Brixx class component in the JavaScript file `MyComponent.js`

    import { Brixx } from '@brixx/script'

    export default class MyComponent extends Brixx.Component {
      render() {
        return <div>Brixx class component</div>
      }
    }

Use the Brixx class component

    import { MyComponent } from './MyComponent'

    Brixx.element = (
      <div>
        <h1>Brixx default component element</h1>
        <MyComponent>
      </div>
    )

    Brixx.run()

# <div id='downloads'/> Downloads

-   ### [Beispiel v1.0.9 [brixx-element-sample] (ZIP-Archiv)](../assets/downloads/brixx-element-sample.zip)
-   ### [Beispiel v1.0.9 [brixx-simple-element] (ZIP-Archiv)](../assets/downloads/brixx-simple-element.zip)
-   ### [Beispiel v1.0.9 [brixx-complex-element] (ZIP-Archiv)](../assets/downloads/brixx-complex-element.zip)
## Copyright and License

#

Copyright © BRIXX.it 2022-present
