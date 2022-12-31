# Brixx-Script

  > This document is being processed and is currently only available in German. However, we have decided to make Brixx-Script version 1.0.3 available for use. For further information on the use of Brixx-Script please feel free to contact [`info@brixx.it`](info@brixx.it)

Brixx-Script ist eine freie JavaScript-Library zur Erstellung unabhängiger Webkomponenten (Web-Bausteinen). Mit Brixx-Script können **„Smarte“ Web-Bausteine** (Brixx) für Webseiten und Webanwendungen erstellt werden. Dadurch kann der Programmieraufwand und die Projektkomplexität für eine **Low-Code-Entwicklung** auf ein Minimum reduziert werden. **Brixx Web-Bausteine** können entweder als *Brixx HTML-Element* in jedem HTML-Dokument oder als *Brixx Script-Baustein* in JavaScript-Projekten und Frameworks verwendet werden, und werden mit JavaScript und [JSX (JavaScript XML)](https://en.wikipedia.org/wiki/JSX_(JavaScript)) erstellt. JSX wurde 2014 mit [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) eingeführt und gleicht im Syntax [E4X (EcmaScript for XML)](https://en.wikipedia.org/wiki/ECMAScript_for_XML) zur Integration von XML in JavaSript. Brixx-Script hat 1998 als LaSSiE seinen Ursprung als plattformunabhängige Web-Entwicklung und wurde 2005 mit E4X erweitert. E4X wurde 2014 mit der Einführung von JSX von der Mozilla Foundation als deprecated gekennzeichnet und folglich in LaSSiE durch JSX ersetzt. LaSSiE wurde z. B. in **Brixx-Decision-Script** und **Brixx-Process-Script** als integriertes Baustein-System verwendet, aber aufgrund der großen Popularität und Verbreitung von JSX im Dezember 2022 als freie JavaScript-Library **Brixx-Script** zur Erstellung von **Brixx Webkomponenten** (Web-Bausteine) veröffentlicht.

## Package `@brixx/script`

### Version: `1.0.0`

# Was wird alles benötigt?

## Quellcode Editor
Für die Entwicklung kann ein Texteditor, beispielsweise der in der Linux Community beliebte [Vim](https://www.vim.org/), oder ein Quellcode Editor wie [Notpad++](https://notepad-plus-plus.org/downloads/) oder [Sublime Text](https://www.sublimetext.com/) verwendet werden. Ein kostenfreie Alternative zu einer professionellen integrierten Entwicklungsumgebung (IDE) ist [Visual Studio Code](https://code.visualstudio.com/) (VS Code) als leichtgewichtiger Quellcode Editor mit vielen IDE Erweiterungen. Visual Studio Code ist dadurch mehr als nur ein Quellcode Bearbeitungstool und derzeit der wohl der beliebteste Quellcode Editor ([Install Visual Studio Code for Windows](../VSCode.md)).

## Node.js und npm
Um eigenständige Brixx Webkomponenten zu erstellen verwenden wir [Node.js®](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') (cross-platform JavaScript runtime environment) und [npm](https://www.npmjs.com/ 'Node package manager') (Node Package Manager) als Entwicklungswerkzeuge ([Install Node.js and npm for Windows](../Nodejs.md))

### Node.js
Node.js wird für die Erstellung eigenständiger Brixx Webkomponenten im Hintergrund verwendet und nicht zur Laufzeit benötigt. Dadurch haben wir die Möglichkeit **State-of-the-art** Entwicklungswerkzeuge wie *Webpack* und *Babel* zu verwenden. Für Brixx-Script sind keine Node.js Kentnisse erforderlich.

### Npm
Npm ist fester Bestandteil bei der Installation von Node.js und im Ursprung ein **Node Package Manager** zur Verwaltung benötigter JavaScript-Packages, sowohl für die Brixx Webkomponente als auch für die Entwicklungswerkzeuge. Npm wird wie Node.js für die Entwicklung verwendet und nicht zur Laufzeit benötigt.

## Webpack
Mit dem Modul-Bundler [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') für moderne JavaScript-Anwendungen können sogenannte **Bundles** erstellt werden in denen alle Assets in einem Bundle bereitgestellt werden. Dadurch ist eine einfache Intergration und Verteilung von Brixx Webkomponenten möglich. Zur Erstellung einer Brixx Webkomponente mit Webpack stehen Beispiele und Templates zur Verfügung und erfordert für die Verwendung mit Brixx-Script keine Vorkenntnisse.

## Babel
Der JavaScript Compiler [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler') wird verwendet ECMAScript 2015+ Code in eine Version für nicht kompatible oder ältere Browser zu konvertieren . Dadurch können Brixx Webkomponenten in allen Browsern und JavaScript-Umgebungen verwendet werden. Babel wird als Erweiterung mit Webpack verwendet und für die Verwendung stehen Beispiele und Templates zur Verfügung. Babel erfordert für die Verwendung mit Brixx-Sript keine Vorkenntnisse.

## Erste Schritte
Wir verwenden moderne, State-of-the-art Werkzeuge und Technologien zur Erstellung von Brixx Webkomponenten, um eine einfache Integration in ein HTML-Dokument und JavaScript-Projekt zu ermöglichen. Hierzu zählen neben [Node.js](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') und [npm](https://www.npmjs.com/ 'Node package manager') auch [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') und [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler'), um eine Brixx Webkomponente zu erstellen. Zusätzlich steht für die Entwicklung aber auch eine Standalone Version zur Verfügung, die eine direkte Integration von Brixx Web-Bausteinen in ein HTML-Dokument ermöglicht.

## Brixx Web-Baustein `[brixx-animal-list]` erstellen
Brixx Web-Bausteine (Webkomponenten) werden in der Regel im Ordner **`[components]`** erstellt und erwartet. Dazu erstellen wir den Ordner **`.\components`** im Projektordner **`[brixx-element-sample]`** wodurch die Prokekt-Ordnerstruktur wie folgt aussieht.

```
[brixx-element-sample]
 │
 ├── [components]
 │    │
 │    └── brixx-animal-list.js
 │
 └── index.html
```

Darin erstellen wir einen Brixx Web-Baustein (Brixx web component) **`[brixx-animal-list]`** in der JavaScript-Datei **`brixx-animal-list.js`** (Brixx script component). Als Erstes erstellen wir eine Liste **`anials`** ([JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)) und symbolisiert im Beispiel mögliche Eingabequellen z. B. aus einem HTML-Formular, Webservice oder einer Datenbank.

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

Anschließend wird ein Brixx Standard Element **`Brixx.element`** mit einer untergeordneten HTML-Liste und JSX erstellt.

  > Ein **`Brixx.element`** kann für „einfache“ Brixx Web-Bausteine verwendet werden und einmal im Brixx Web-Baustein vorkommen. Das ermöglicht eine schnelle Entwicklung im Projekt mit Brixx-Script und reduziert nicht zuletzt den Programmieraufwand und die Projektkomplexität im Projekt auf ein Minimum (Low-Code-Entwicklung). 

    // Create a Brixx default element
    Brixx.element = 
    <div>
      <h2>Animals</h2>
      <ul>
        ...
      </ul>
    </div>

  > **Tip:** Die Formatierung ist bei Brixx-Sript frei. Wir empfehlen zur besseren Projektstruktur und JavaScript Integration JSX-Code in *Parentheses* **`()`** zu verwenden.

    ...
    Brixx.element = (
      <div>
        <h2>Animals</h2>
        <ul>
          ...
        </ul>
      </div>
    );

Die einzelnen Einträge **`anial`** der Liste **`anials`** werden dann als HTML-Listenelement **`<h3>{animal}</h3>`** mit Unterstützung der JavaScript [Array map()](https://www.w3schools.com/jsref/jsref_map.asp) nacheinander ausgegeben. JavaScript-Erweiterungen können, wie im Beispiel zu sehen, einfach mit *Curly Brackets* **`{}`** integriert werden.

    ...
    { 
      animals.map((animal) => (
          <li>
            <h3>{animal}</h3>
          </li>
        )
      ) 
    }
    ...

Abschließend wird das erstellte Brixx Element als HTML-Elemet **`<brixx-animal-list>`** im Browser registriert.

    // Register the Brixx HTML-Element <brixx-animal-list>
    Brixx.registerElement({ name: "brixx-animal-list" });

Kompletter Brixx Web-Baustein in der Brixx Script-Component Datei **`./components/brixx-animal-list.js`** ()

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

    // Create a Brixx default element
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

    // Register the Brixx HTML-Element <brixx-animal-list>
    Brixx.registerElement({ name: "brixx-animal-list" });

## Brixx Web-Baustein `[brixx-animal-list]` verwenden
Die integration in ein HTML-Dokument ist unkompliziert. Der Brixx Web-Baustein **`[brixx-animal-list]`** in der Brixx Script-Component Datei **`./components/brixx-animal-list.js"`** wird mit einen HTML-**`<script>`**-Element im HTML-Dokument eingefügt.

    <!-- Include the Brixx Component script files -->
    <script type="text/babel" src="./components/brixx-animal-list.js"
        data-type="module" data-presets="brixx"></script>

Brixx-Script Standalone verwendet Babel mit **`type="text/babel"`** um Brixx Webkomponenten in den unterschiedlichen Browsern verwenden zu können. Dann müssen nur noch die Attribute **`data-type="module"`** und **`data-presets="brixx"`** festgelegt werden und die Brixx Webkomponente kann als HTML-Element **`<brixx-animal-list>`** verwendet werden. Zur Verwendung als HTML-Element werden keine weiteren Programmierkentnisse benötigt.

Komplettes HTML-Dokument in der HTML-Datei **`index.html`**

    <!DOCTYPE html>
    <html>
      <head>
        <!-- Load Brixx-Script standalone -->
        <script src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>
        <!-- Include the Brixx Component script files -->
        <script type="text/babel" src="./components/brixx-animal-list.js"
          data-type="module" data-presets="brixx"></script>
      </head>

      <body>
        <!-- Add the Brixx HTML-Element -->
        <brixx-animal-list></brixx-animal-list/>
      </body>
    </html>

Komplettes Beispiel als ZIP-Archiv herunterladen [[brixx-element-sample.zip]](../downloads/brixx-element-sample.zip)

## Brixx Web-Baustein `[brixx-animal-list]` testen

Um den Brixx Web-Baustein zu testen öffnen wir den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und verwenden für das Beispiel die *Live Server* Erweiterung.

Zum starten der HTML-Datei **`index.html`** mit dem *Live Server* gibt es verschiedene Möglichkeiten.

1. Klick auf **`[Go Live]`** in der Visual Studio Code Status Bar (**`Click to run live server`**) 
2. Öffnen der HTML-Datei im Editor-Fenster mit der Tastenkombination **`[ALT+L Alt+O]`**
3. Klick mit der rechten Maustaste auf die HTML-Datei das Editor-Fenster und Auswahl von **`[Open with Live Server]`**  
4. Klick mit der rechten Maustaste auf die HTML-Datei in der Explorer-Ansicht und Auswahl von **`[Open with Live Server]`**

    <img src="../images/brixx-element-sample.webp" style="margin-bottom: -5px; width: 600px;" />

    Visual-Studio-Code - Explorer-Ansicht **`[Open with Live Server]`**

    Die HTML-Datei **`index.html`** wird mit dem *Live Server* unter der Adresse **`http://127.0.0.1:5500/index.html`** bereitgestellt und im Standard-Browser geöffnet. Der Browser kann bei den Einstellungen für die *Live Server* Erweiterung unter **`[Custom Browser]`** festgelegt werden (**`default=null`**).

    <img src="../images/vscode-live-server-01.webp" style="margin-bottom: -5px; width: 600px;" />

    Der Brixx Web-Baustein `<brixx-animal-list>` im Browser-Fenster

## Brixx Webkomponente `[brixx-simple-element]` erstellen
Wie erstellen eine „einfache“ **Brixx Webkomponente** (Web-Baustein) und werden die Webkomponente als **HTML-Element** verwenden. Dafür erstellen wir zuerst einen Projektordner **`[brixx-simple-element]`** und darin die [Projekt-Konfiguration package.json](../NPM-config.md) als Konfigurationsdatei für die Brixx Webkomponente. Dafür verwenden wir im Beispiel das Template [package.json.windows](../downloads/package.json.windows) und speichern die Datei als **`package.json`** im Stammverzeichnis des Projekts. Anschließend können wir die Datei *package.json* in Visual Studio Code bearbeiten und anpassen. Das erleichtert den Einstig im Umgang mit *package.json* und den Abhängigkeiten durch die benötigten JavaScript-Packages.

Brixx *package.json* Template für Windows

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

In der *package.json* muss dann nur bei der Eigenschaft **`name`** der „technische“ Name der neuen Brixx Webkomponente

    "name": "brixx-simple-element"

und bei den Projekt Abhängigkeiten **`dependencies`** die Version für das NPM-Package **`@brixx/script`** angegeben werden.

    "dependencies": {
      "@brixx/script": "1.0.3"
    }

Die Brixx Webkomponente bekommt den Namen **`brixx-simple-element`** und für das Package `@brixx/script` verwenden wir die Version **`1.0.3`** 

Die Abhängigkeiten **`devDependencies`** werden für die Entwicklung verwendet um eine eigenständige Brixx Webkomponente zu erstellen, die als Brixx Web-Baustein in jeder Webseite oder Webanwendung verwendet werden kann. Die NPM-Packages werden „zentral“ in der *package.json* verwaltet und müssen nicht einzeln mit **`npm install --save-dev  <package>`** installiert werden.

Zur Erstellung der Brixx Webkomponente wird in Brixx-Script *Webpack* und *Babel* verwendet. Das erfordert für die Entwicklung eine Reihe von NPM-Packages als **`devDependencies`** und sind im Template bereits eingetragen. Dabei sind die Versionsnummern der NPM-Packages im Beispiel „gepinnt“, können sich aber in einer späteren Version ändern.

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
  
Mit den NPM **`scripts`** können wir die Brixx Webkomponente mit **`npm run build`** erstellen und mit **`npm run start`** mit dem *Webpack DevServer* im Browser testen.

    "scripts": {
      "build": "webpack --env package_name=%npm_package_name%",
      "start": "webpack-dev-server --env package_name=%npm_package_name%"
    }

### [NPM-Packages installieren](../NPM-install.md) 
Wenn die Erweiterung *NPM-Scripts* installiert ist können die NPM-Scripts aus der Explorer-Ansicht ausgeführt werden. Seit Version 1.23 steht in Visual Studio Code in der Explorer Ansicht bereits ein integrierter *NPM Script Explorer* zur Verfügung. Dabei können auch die NPM-Packages mit **`npm install`** aus der Explorer-Ansicht installiert werden.

  > **Tip:** Halten Sie den Visual Studio Code immer auf neuesten Stand. Dieser bekommt regelmäßig Update Release Versionen spendiert. 

Wir öffnen den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und installieren die NPM-Packages der Abhängigkeiten in der *package.json* durch Klick mit der rechten Maustaste auf den Eintrag **`[package.json]`** in der Explorer-Ansicht unter **`[NPM-SCRIPTS]`**  und Auswahl von **`[Run Intall]`** im Kontextmenü.

<img src="../images/vscode-npm-install-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - NPM-SCRIPTS

Nach der Installation der Abhängigkeiten in der *package.json* für das Projekt sehen wir in der Explorer-Ansicht den Ordner **`node_modules`** mit den NPM-Packages und die Datei **`package-lock.json`**

<img src="../images/vscode-node-modules.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Explorer-Ansicht

### [Webpack-Konfiguration webpack.config.js](../Webpack-config.md)
Für die Webpack-Konfiguration benötigen wir eine Konfigurationsdatei im Stammverzeichnis des Projekts. Dafür verwenden wir zur Erstellung einer **„Standard“ Brixx Webkomponente** das Template [webpack.config.template.js](../downloads/webpack.config.template.js) und speichern die Datei als **`webpack.config.js`** im Projektordner. Damit sind keine Webpack Kentnisse und Anpassungen der Konfigurationsdatei notwendig und kann direkt verwendet werden. In diesem Fall wird die Eigenschaft **`name`** der *package.json* als Name für die Brixx Webkomponente verwendet.

<img src="../images/vscode-webpack-config.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - webpack.config.js

Damit sind die Vorbereitungen zur Erstellung der Brixx Webkomponente abgeschlossen wodurch die Projekt-Ordnerstruktur im Beispiel wie folgt aussieht.

```
[brixx-simple-element]
 │
 ├── [node-modules]
 │
 ├── package.json.lock
 ├── package.json
 └── webpack.config.js
```

  > Im Unterschied zum Brixx Web-Baustein mit Brixx-Script Standalone importieren wir die Brixx Webkomponente nicht direkt mit der JavaScript-Datei in ein HTML-Dokument. Die Brixx Webkomponente wird dabei für die Entwicklung mit Webpack in der JavaScript-Datei **`index.js`** erwartet und in einem **Build**-Prozess mit dem NPM-Script **`build`** erstellt.

Wir erstellen die Brixx Webkomponente in der JavaScript-Datei **`index.js`** und importieren zuerst das Modul **`Brixx`** aus dem NPM-Package **`@brixx/script`**, das wir mit der *package.json* installiert haben.

    // Imports
    import { Brixx } from '@brixx/script'

Als nächstes erstellen wir ein „einfaches“ **JSX-Element** mit dem HTML Tag Name **`<Greeting>`** und dem HTML Attribut **`name`**. Das Attribut *name* können wir einfach im JSX-Element mit *Curly Brackets* **`{}`** verwenden. Ähnlich wie die Liste **`animals`** im Brixx Web-Baustein **`[brixx-animal-list]`**.

    // Create a Brixx JSX-Element
    const Greeting = ({ name }) => (
      <div>
        <h3>Hello {name}. Welcome to the our Brixx world!</h3>
      </div>
    )

Anschließend erstellen ein **`Brixx.element`** mit dem JSX-Element **`<Greeting>`** und dem Attribut **`name={'Bob the Builder'}`** als Basis für die Brixx Webkomponente.

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <div>
          <hr />
          <h2>Brixx JSX-Element</h2>
          <Greeting name={'Bob the Builder'} />
          <hr />
        </div>
      </div>
    )

Abschließend wird das Brixx Element als HTML-Elemet **`<brixx-simple-element>`** im Browser registriert.

    // Register the Brixx HTML-Element <brixx-simple-element>
    Brixx.registerElement({ name: 'brixx-simple-element' })

Komplette Brixx Webkomponente in der JavaScript-Datei **`./index.js`**

    // Imports
    import { Brixx } from '@brixx/script'

    // Create a Brixx JSX-Element
    const Greeting = ({ name }) => (
      <div>
        <h3>Hello {name}. Welcome to the our Brixx world!</h3>
      </div>
    )

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <div>
          <hr />
          <h2>Brixx JSX-Element</h2>
          <Greeting name={'Bob the Builder'} />
          <hr />
        </div>
      </div>
    )

    // Register the Brixx HTML-Element <brixx-simple-element>
    Brixx.registerElement({ name: 'brixx-simple-element' })


Bei der Erstellung einer Brixx Webkomponente dient die HTML-Datei als Template beim **Build**-Prozess mit Webpack und wird in erster Linie zum testen mit dem *Webpack DevServer* verwendet. Dafür verwenden wir im Beispiel das Template [index.element.template.html](../downloads/index.element.template.html) und speichern die Datei als **`index.html`** im Projektordner. Auch hier sind keine Anpassungen für das Template erforderlich und kann direkt verwendet werden.

HTML-Template in der HTML-Datei **`index.html`**

    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Brixx HTML-Element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</title>
        <!-- Include the Brixx Component script files-->
      </head>
      
      <body>
        <h1>Brixx HTML-Element &lt;<%= htmlWebpackPlugin.options.component %>&gt;</h1>
        <!-- Add the Brixx HTML-Element -->
        <<%= htmlWebpackPlugin.options.component %>></<%= htmlWebpackPlugin.options.component %>>
      </body>
    </html>

Vor der Erstellung der Brixx Webkomponente mit Webpack sieht die Projekt-Ordnerstruktur wie folgt aussieht.

```
[brixx-simple-element]
 │
 ├── [node-modules]
 │
 ├── index.html
 ├── index.js
 ├── package.json.lock
 ├── package.json
 └── webpack.config.js
```

### Brixx Webkomponente bauen
Die Brixx Webkomponente wird mit **`npm run build`** erstellt. Wir öffnen den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und bauen (erstellen) die Brixx Webkomponente durch Klick mit der rechten Maustaste auf den Eintrag **`[build]`** in der Explorer-Ansicht unter **`[NPM-SCRIPTS]`** und Auswahl von **`[Run]`** im Kontextmenü oder einfach Klick auf das Symbol **[** <img src="../images/pfeil.png" width="8px" /> **]**

<img src="../images/vscode-npm-build-01.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Run build

Nach dem **`Build`**-Prozess sieht die Projekt-Ordnerstruktur abschließend wie folgt aussieht.

```
[brixx-simple-element]
 │
 ├── [dist]
 │    ├── [components]
 │    │     │    
 │    │     └── brixx-simple-element.js
 │    │
 │    └── index.html
 │
 ├── [node-modules]
 │
 ├── index.html
 ├── index.js
 ├── package.json.lock
 ├── package.json
 └── webpack.config.js
```
Wir sehen, dass ein Ordner **`./dist`** erstellt wurde, in dem die Brixx Webkomponente als **Brixx Script-Component** im Ordner **`./components`** in der JavaScript-Datei **`[brixx-simple-element.js]`** erstellt wurde. Der Ordner **`./dist`** entspricht einer Live-Umgebung von einem Projektordner und wird zur Distribution der Brixx Webkomponente erstellt. 

<img src="../images/vscode-npm-build-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Brixx Component built

Komplettes Beispiel als ZIP-Archiv herunterladen [[brixx-simple-element.zip]](../downloads/brixx-simple-element.zip)

## Brixx Webkomponente [brixx-simple-element] testen
Die HTML-Datei **`index.html`** wird in erster Linie zum testen der Brixx Webkomponente bei der Entwicklung verwendet, kann aber auch für die Live-Umgebung verwenet werden. Wir haben zwei Möglichkeiten die Webkomponente zu testen

- Webpack DevServer  
  Die Brixx Webkomponente kann mit **`npm run start`** getestet werden. Wir öffnen den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und starten (testen) die Brixx Webkomponente durch Klick mit der rechten Maustaste auf den Eintrag **`[start]`** in der Explorer-Ansicht unter **`[NPM-SCRIPTS]`** und Auswahl von **`[Run]`** im Kontextmenü oder einfach Klick auf das Symbol **[** <img src="../images/pfeil.png" width="8px" /> **]**

  <img src="../images/vscode-npm-start.webp" style="margin-bottom: -5px; width: 600px;" />

  Visual Studio Code - Run start

  Die HTML-Datei **`index.html`** wird mit dem *Webpack DevServer* unter der Adresse **`http://127.0.0.1:8080/index.html`** im Standard-Browser geöffnet.

  <img src="../images/vscode-webpack-devserver.webp" style="margin-bottom: -5px; width: 600px;" />

  Der Brixx Web-Baustein `<brixx-simple-element>` im Browser-Fenster

- Live Server  
  Wir können die erstellte Brixx Webkomponente auch mit dem *Live Server* testen, ganau wie beim Web-Baustein **`[brixx-animal-list]`**. Dabei entspricht der Ordner **`./dist`** dem Projektordner vom Web-Baustein und wir starten zum testen die HTML-Datei **`index.html`** mit dem *Live Server*.
  
  <img src="../images/vscode-open-live-server.webp" style="margin-bottom: -5px; width: 600px;" />

  Visual-Studio-Code - Explorer-Ansicht **`[Open with Live Server]`**

  Die HTML-Datei **`index.html`** wird mit dem *Live Server* unter der Adresse **`http://127.0.0.1:5500/index.html`** im Standard-Browser geöffnet.

  <img src="../images/vscode-live-server-02.webp" style="margin-bottom: -5px; width: 600px;" />

  Der Brixx Web-Baustein `<brixx-simple-element>` im Browser-Fenster

## Brixx Webkomponente [brixx-simple-element] verwenden
In der Regel wird nur die JavaScript-Datei der Brixx Webkomponente (Brixx Component script file) im Ordner **`./dist`**  in Projekten verwendet und verteilt.  

Auf dem ersten Blick scheint das Ergebnis im Ordner **`./dist`** identisch zum Brixx Web-Baustein **`[brixx-animal-list]`** zu sein. Auch die Brixx Webkomponente ist eine JavaScript-Datei im Ordner **`./components`** und wird als Brixx HTML-Element im HTML-Dokument verwendet. Aber anders als beim Brixx Web-Baustein ist die Brixx Webkomponente eigenstängig, kann direkt ohne Brixx-Script Standalone als Brixx **Script-Baustein** in das HTML-Dokument importiert werden.

#

Under Construction ...

## Build a Brixx Script-Component
...

## Build a Brixx Component Class

### Brixx Component Class Sample (Preview)
Komplette Brixx Component Class **`Counter`** in der JavaScript-Datei **`Counter.js`**

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

#

Copyright © BRIXX.it 2022 