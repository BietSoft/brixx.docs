# Brixx-Script.

  > This document is being processed and is currently only available in German. However, we have decided to make Brixx-Script version 1.0.3 available for use. For further information on the use of Brixx-Script please feel free to contact [`info@brixx.it`](info@brixx.it)

Brixx-Script ist eine freie JavaScript-Library Zur Erstellung von unabhängigen Webkomponenten (Web-Bausteinen). Mit Brixx-Script können **„Smarte“ Web-Bausteine** (Brixx) für Webseiten und Webanwendungen erstellt werden. Dadurch kann Programmieraufwand und Projektkomplexität für eine **Low-Code-Entwicklung** auf ein Minimum reduziert werden. **Brixx Web-Bausteine** können als *Brixx HTML-Element* in jedem HTML-Dokument und als *Brixx Script-Baustein* in JavaScript-Projekten und Frameworks verwendet werden, und werden mit JavaScript und [JSX (JavaScript XML)](https://en.wikipedia.org/wiki/JSX_(JavaScript)) erstellt. JSX wurde 2014 mit [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) eingeführt und gleicht im Syntax [E4X (EcmaScript for XML)](https://en.wikipedia.org/wiki/ECMAScript_for_XML) zur Integration von XML in JavaSript. Brixx-Script hat in 1998 als LaSSiE seinen Ursprung als plattformunabhängige Web-Entwicklung und wurde in 2005 mit E4X erweitert. Nachdem E4X von der Mozilla Foundation in 2014 als deprecated gekennzeichnet ist, wurde E4X in LaSSiE durch JSX ersetzt und beispielsweise in **Brixx-Decision-Script** und **Brixx-Process-Script** als Baustein-System verwendet. Aufgrund der großen Popularität und Verbreitung von JSX wurde LaSSiE in 2022 als freie JavaScript-Library **BrixxScript** Zur Erstellung von **Brixx Webkomponenten** (Web-Bausteine) umbenannt und veröffentlicht.

## Package `@brixx/script`

### Version: `1.0.0`

# Was wird alles benötigt?

## Quellcode Editor
Für die Entwicklung kann ein Texteditor, wie der in der Linux Community beliebte [Vim](https://www.vim.org/), oder ein Quellcode Editor wie [Notpad++](https://notepad-plus-plus.org/downloads/) oder [Sublime Text](https://www.sublimetext.com/) verwendet werden. Ein kostenfreie Alternative zu einer professionellen integrierten Entwicklungsumgebung (IDE) ist [Visual Studio Code](https://code.visualstudio.com/) (VS Code) als leichtgewichtiger Quellcode Editor mit vielen IDE Erweiterungen. Visual Studio Code ist dadurch mehr als nur ein Quellcode Bearbeitungstool und derzeit der wohl beliebteste Quellcode Editor.

### [Install Visual Studio Code for Windows](../VSCode.md)

## Node.js und npm
Um eigenständige Brixx **Webkomponenten** zu erstellen verwenden wir [Node.js®](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') (cross-platform JavaScript runtime environment) und [npm](https://www.npmjs.com/ 'Node package manager') (Node Package Manager). 

### Node.js
Node.js wird als Entwicklungswerkzeug für den **Build** (Erstellung) eigenständiger Brixx Webkomponenten verwendet, **nicht zur Laufzeit** benötigt, und erfordert keine besonderen Node.js Kenntnisse. Durch die Verwendung von Node.js haben wir die Möglichkeit alle **State-of-the-art** Entwicklungswerkzeuge wie *Webpack* und *Babel* zu verwenden.

### Npm
Npm ist fester Bestandteil bei der Installation von Node.js und ist im Ursprung ein **Node Package Manager** zur Verwaltung der benötigten JavaScript-Packages, sowohl für den Build von Brixx Webkomponenten als auch für die Entwicklungswerkzeuge. Npm wird wie Node.js zur Entwicklung benötigt.

### [Install Node.js and npm for Windows](../Nodejs.md)

## Webpack
Mit dem Modul-Bundler [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') für moderne JavaScript-Anwendungen können sogenannte **Bundles** erstellt werden in denen alle Assets bereitgestellt werden. Dadurch ist eine einfache Intergration und Verteilung von Brixx Webkomponenten möglich. Zur Erstellung einer Brixx Webkomponente mit Webpack stehen Beispiele und Templates zur Verfügung, erfordert keine besonderen Vorkenntnisse, und hat eine niedrige Einstigshürde.

## Babel
Der JavaScript Compiler [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler') wird verwendet ECMAScript 2015+ Code in eine abwärtskompatible Version für nicht kompatible und ältere Browser zu konvertieren und wird zusammen mit Webpack verwendet. Dadurch können Brixx Webkomponenten in allen Browsern und JavaScript-Umgebungen verwendet werden. Für die Verwendung von Babel mit Webpack stehen Beispiele und Templates zur Verfügung, erfordert keine besonderen Vorkenntnisse, und hat eine niedrige Einstigshürde.

## Erste Schritte
Wir verwenden moderne, State-of-the-art Tools und Technologien, um eie einfache Integration in HTML-Dokumentens und Web-Projekten zu ermöglichen. Hierzu zählen neben [Node.js](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') und [npm](https://www.npmjs.com/ 'Node package manager') auch [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') und [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler'), um Brixx Webkomponenten zu erstellen. Zusätzlich steht für die Entwicklung auch eine Standalone Version zur Verfügung.

## Brixx Web-Baustein `[brixx-animal-list]` erstellen
Brixx Web-Bausteine (Webkomponenten) werden in der Regel im Ordner **`[components]`** erstellt und erwartet. Dazu erstellen wir den Ordner **`.\components`** im Projektordner **`[brixx-element-sample]`** wodurch die Prokekt-Ordnerstruktur im Beispiel wie folgt aussieht.

```
[brixx-element-sample]
 │
 ├── [components]
 │    │
 │    └── brixx-animal-list.js
 │
 └── index.html
```

Darin erstellen wir unsere erste Brixx Webkomponente **`[brixx-animal-list]`** in der JavaScript-Datei **`brixx-animal-list.js`**. Als Erstes erstellen wir eine Liste ([JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)) **`anials`**. Die Liste und symbolisiert im Beispiel spätere Eingabequellen z. B. aus einem HTML-Formular, Webservice oder einer Datenbank.

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

Anschließend wird ein Brixx Standard Element **`Brixx.element`** mit einer untergeordneten HTML-Liste und JSX erstellt.

    // Create a Brixx default element
    Brixx.element = 
    <div>
      <h2>Animals</h2>
      <ul>
        ...
      </ul>
    </div>

  > **Tip:** Die Formatierung ist wie bei HTML frei. Wir empfehlen zur besseren Projektstruktur und JavaScript Integration JSX-Code in *Parentheses* **`()`** zu verwenden.

    ...
    Brixx.element = (
      <div>
        <h2>Animals</h2>
        <ul>
          ...
        </ul>
      </div>
    );

Die einzelnen Einträge **`anial`** der Liste **`anials`** werden dann als HTML-Listenelement **`<h3>{animal}</h3>`** mit Unterstützung der JavaScript Methode [Array map()](https://www.w3schools.com/jsref/jsref_map.asp) nacheinander ausgegeben. JavaScript Erweiterungen können, wie im Beispiel zu sehen ist, sehr einfach mit *Curly Brackets* **`{}`** mit Brixx-Script integriert werden.

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

Abschließend wird das erstellte Brixx Element als HTML-Elemet **`<brixx-animal-list>`** für das HTML-Dokument im Browser registriert.

    // Register the Brixx HTML-Element <brixx-animal-list>
    Brixx.registerElement({ name: "brixx-animal-list" });

Kompletter Brixx Web-Baustein in der JavaScript-Datei **`./components/brixx-animal-list.js`**

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
Die integration in ein HTML-Dokument oder eine Webanwendung ist unkompliziert. Der einfachste Weg ist die Brixx-Script **Standalone** Version zu verwenden. Diese beinhaltet alle nötigen Bestandteile, ist aber im Wesentlichen für die Entwicklung vorgesehen. Bei Verwendung der Standalone Version wird in der Console die Information *You are using the in-browser Brixx-Script transformer. It is recommended to build Brixx components for production* ausgegeben.
    <!-- Load Brixx-Script standalone -->
    <script src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>

Die Brixx Webkomponente wird mit einen HTML-**`<script>`**-Element im HTML-Dokument eingefügt.

    <!-- Include the Brixx Component script files -->
    <script type="text/babel" src="./components/brixx-animal-list.js"
        data-type="module" data-presets="brixx"></script>

Brixx-Script Standalone verwendet Babel mit **`type="text/babel"`** um die Brixx Webkomponente in den unterschiedlichen Browsern verwenden zu können. Dann müssen nur noch die Attribute **`data-type="module"`** und **`data-presets="brixx"`** festgelegt werden und die Brixx Webkomponente kann als HTML-Element **`<brixx-animal-list>`** verwendet werden. Zur Integration im HTML-Dokument werden keine weiteren Programmierkentnisse benötigt.

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

Um den Brixx Web-Baustein zu testen öffnen wir den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und verwenden die *Live Server* Erweiterung.

Zum starten der HTML-Datei **`index.html`** mit dem *Live Server* gibt es verschiedene Möglichkeiten:

1. Klick auf **`[Go Live]`** in der *Status Bar* (Start/Stop Server)
2. Bei Bearbeitung der HTML-Datei mit der Tastenkombination **`[ALT+L Alt+O]`**
3. Klick mit der rechten Maustaste (Kontextmenü) auf die HTML-Datei in der Explorer-Ansicht und Auswahl von **`[Open with Live Server]`** im Kontextmenü.

   <img src="../images/brixx-element-sample.webp" style="margin-bottom: -5px; width: 600px;" />

   Visual-Studio-Code - Projektordner **`[brixx-element-sample]`**

   Die HTML-Datei **`index.html`** wird unter der Adresse `http://127.0.0.1:5500/index.html` bereitgestellt und im Standard-Browser geöffnet, solange kein spezieller Browser für die *Live Server*-Einstellungen festgelegt wird.

   <img src="../images/vscode-live-server.webp" style="margin-bottom: -5px; width: 600px;" />

   Der fertige Brixx Web-Baustein `<brixx-animal-list>` im Browser-Fenster

## Brixx Webkomponente `[brixx-simple-element]` erstellen
Wie erstellen eine „einfache“ **Brixx Webkomponente** (Web-Baustein) und wollen diese später als **HTML-Element** verwenden. Dafür erstellen wir zuerst einen Projektordner **`[brixx-simple-element]`** und darin die Datei [`package.json`](../NPM-config.md) als zentrale Konfiguration für die Brixx Webkomponente. Dafür verwenden wir das Template [package.json.windows](../downloads/package.json.windows) und speichern die Datei als **`package.json`** im Stammverzeichnis des Projekts. Anschließend können wir die Datei *package.json* in Visual Studio Code bearbeiten und für das Beispiel anpassen. Das erleichtert den Einstig im Umgang mit *package.json* und den Abhängigkeiten durch die benötigten JavaScript-Packages.

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

In der *package.json* muss dann nur bei der Eigenschaft **`name`** der „technische“ Name unserer neuen Brixx Webkomponente

    "name": "brixx-simple-element"

und bei den Projekt Abhängigkeiten **`dependencies`** die Version für das NPM-Package **`@brixx/script`** angegeben werden.

    "dependencies": {
      "@brixx/script": "1.0.3"
    }

Die Brixx Webkomponente bekommt den Namen **`brixx-simple-element`** und für das Package `@brixx/script` verwenden wir die Version **`1.0.3`** 

Die Abhängigkeiten **`devDependencies`** werden für die Entwicklung verwendet um eine eigenständige Brixx Webkomponente zu erstellen, die als Brixx-Webbaustein in jeder Webseite oder Webanwendung verwendet werden kann. Die NPM-Packages werden „zentral“ in der *package.json* verwaltet und müssen nicht einzeln mit **`npm install --save-dev  <package>`** installiert werden.

Zur Erstellung der Brixx Webkomponente wird in Brixx-Script der Modul-Bundler **Webpack** und **Babel** verwendet. Das erfordert für die Entwicklung eine Reihe von NPM-Packages als **`devDependencies`** und sind im Template bereits eingetragen. Dabei sind die Versionsnummern der NPM-Packages im Beispiel „gepinnt“, können sich aber in einer späteren Version ändern.

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
  
Mit den NPM **`scripts`** können wir die Brixx Webkomponente mit **`npm run build`** bauen (erstellen) und mit **`npm run start`** mit dem *Webpack DevServer* im Browser testen.

    "scripts": {
      "build": "webpack --env package_name=%npm_package_name%",
      "start": "webpack-dev-server --env package_name=%npm_package_name%"
    }

### [NPM-Packages installieren](../NPM-install.md) 
Wenn die Erweiterung *NPM-Scripts* installiert ist können nicht nur die NPM-Scripts direkt aus der Explorer-Ansicht ausgeführt, sondern auch die NPM-Packages installiert werden.
Wir öffnen den Projektordner **`[brixx-element-sample]`** in Visual Studio Code und installieren die NPM-Packages der Abhängigkeiten in der *package.json* durch Klick mit der rechten Maustaste auf **`package.json`** in der Explorer-Ansicht unter **`[NPM-SCRIPTS]`**  und Auswahl von **`[Run Intall]`** im Kontextmenü.

<img src="../images/vscode-npm-install-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - NPM-SCRIPTS

Nach der Installation der Abhängigkeiten in der *package.json* für das Projekt sehen wir in der Explorer-Ansicht den Ordner **`node_modules`** mit den NPM-Packages und die Datei **`package-lock.json`**

<img src="../images/vscode-node-modules.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Explorer-Ansicht

### [Webpack-Konfiguration](../Webpack-config.md)
Zum erstellen der Brixx Webkomponente mit *Webpack* und *Babel* benötigen wir eine **Webpack-Konfiguratiosdatei** (`webpack.config.js`) im Stammverzeichnis des Projekts. Dafür verwenden wir das Template [webpack.config.template.js](../downloads/webpack.config.template.js) und speichern die Datei als **`webpack.config.js`** im Projektordner. Für die Erstellung einer **„Standard“ Brixx Webkomponente** muss keine weitere Anpassung vorgenommen werden. In dem Fall wird die Eigenschaft **`name`** der *package.json* als Name für die Brixx Webkomponente verwendet.

<img src="../images/vscode-webpack-config.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - webpack.config.js

Damit sind die Vorbereitungen zur Erstellung einer Brixx Webkomponente erledigt  wodurch die Prokekt-Ordnerstruktur im Beispiel aktuell wie folgt aussieht.

```
[brixx-simple-element]
 │
 ├── [node-modules]
 │
 ├── package.json.lock
 ├── package.json
 └── webpack.config.js
```

#

Under Construction ...

**`index.js`**

**`index.html`**


### Build a Brixx JSX-Element (Preview)
Kompletter Brixx Web-Baustein in der JavaScript-Datei **`./components/brixx-simple-element.js`**

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