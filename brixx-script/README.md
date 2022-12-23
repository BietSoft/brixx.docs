# Brixx-Script

Eine JavaScript-Bibliothek zum Erstellen von individuellen Webkomponenten (Web-Bausteinen). Sie können mit Brixx-Script branchen-, unternehmens- oder projektbezogene Smarte **Web-Bausteine** (Brixx) für Webseiten oder Webanwendungen erstellen und dadurch nicht zuletzt den Programmieraufwand oder auch die Projekt-Komplexität mit unser **Low-Code-Entwicklung** auf ein Minimum reduzieren. Brixx Web-Bausteine können sowohl als HTML-Elemente in jedem beliebigen HTML-Dokument einfach integriert, als auch als Brixx-Script-Baustein in anderen JavaScript Projekten und Frameworks verwendet werden.  
Brixx Web-Bausteine können mit JavaScript und insbesondere [JSX (JavaScript XML)](https://en.wikipedia.org/wiki/JSX_(JavaScript)) erstellt werden. JSX wurde in 2014 mit dem JavaScript Framework [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) eingeführt und gleicht im Syntax [E4X (EcmaScript for XML)](https://en.wikipedia.org/wiki/ECMAScript_for_XML) zur Integration von HTML in JavaSript. Brixx-Script hat seinen Ursprung in 1998 als Plattform- und Programiersprachen unabhängiges Framework **LaSSiE** und wurde bereits ab 2004 mit E4X erweitert. LaSSiE wird in anderen Produkten u.a. **Brixx-Decision-Script** und **Brixx-Process-Script** als Baustein-System eingesetzt und aufgrund der großen Popularität und Verbreitung von JSX haben wir uns entschlossen LaSSiE als Brixx-Script mit JSX zur Erstellung eigener Webkomponenten (Web-Bausteinen) zu veröffentlichen.

## Package `@brixx/script`

### **Version: `1.0.0`**

## Erste Schritte

Wir verwenden moderne, State-of-the-art Tools und Technologien, um eie einfache Integration in HTML-Dokumentens und Web-Projekten zu ermöglichen. Hierzu zählen u.a. neben [Node.js](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') und [npm](https://www.npmjs.com/ 'Node package manager') auch [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') und [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler'), um Webkomponenten zu erstellen. Zusätzlich steht für die Entwicklung auch eine Standalone Version zur Verfügung.

## Brixx Web-Baustein [brixx-animal-list] erstellen

 Brixx Web-Bausteine (Webkomponenten) werden standartmäßig im Ordner **`[components]`** abgelegt. Hierzu erstellen wir einen Ordner **`.\components`** im Projekt-Ordner **`[brixx-element-sample]`**, womit die Prokekt-Ordnerstruktur im Beispiel wie folgt aussieht.

```
[brixx-element-sample]
 │
 ├── [components]
 │    │
 │    └── brixx-animal-list.js
 │
 └── index.html
```

Darin wird eine einfache Brixx Webkomponente **`[brixx-animal-list]`** in der JavaScript-Datei **`brixx-animal-list.js`** erstellt und zuerst eine Liste als [JavaScript Array](https://www.w3schools.com/js/js_arrays.asp) **`anials`** erstellt und symbolisiert im Beispiel spätere Eingabequellen z.B. aus einem HTML-Formular, Webservice oder einer Datenbank.

    // Set an animal list
    const animals = ["Dog", "Cat", "Mouse"];

Anschließend wird ein Brixx Standard Element **`Brixx.element`** mit einer untergeordneten HTML-Liste mit JSX erstellt.

    // Create a Brixx default element
    Brixx.element = 
    <div>
      <h2>Animals</h2>
      <ul>
        ...
      </ul>
    </div>

Die Formatierung ist frei, wir empfehlen zur besseren Projektstruktur und JavaScript Integration JSX-Code in *Parentheses* **`()`** zu verwenden.

    // Create a Brixx default element
    Brixx.element = (
      <div>
        <h2>Animals</h2>
        <ul>
          ...
        </ul>
      </div>
    );

Die einzelnen Einträge **`anial`** der Liste **`anials`** werden dann als HTML-Listenelement **`<h3>{animal}</h3>`** im HTML-Code mit Unterstützung der [JavaScript Array map()](https://www.w3schools.com/jsref/jsref_map.asp) Methode nacheinander ausgegeben.

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

JavaSrcrit Erweiterungen können dabei, wie im Beispiel zu sehen, sehr einfach mit *Curly Brackets* **`{}`** integriert werden.

Abschließend wird das erstellte Brixx Element als HTML-Elemet **`<brixx-animal-list>`** für das HTML-Dokument im Browser registriert.

    // Register the Brixx HTML-Element <brixx-animal-list>
    Brixx.registerElement({ name: "brixx-animal-list" });

Kompletter Brixx-Web-Baustein in der JavaScript-Datei **`./components/brixx-animal-list.js`**

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

## Brixx Web-Baustein [brixx-animal-list] verwenden
Die integration in ein HTML-Dokument oder eine Webanwendung ist unkompliziert. Der einfachste Weg ist Brixx-Script Standalone zu verwenden. Die Brixx-Script Standalone Version beinhaltet das komplette Framework und ist im Wesentlichen für die Entwicklung vorgesehen. Bei Verwendung wird in der Console *You are using the in-browser Brixx-Script transformer. It is recommended to build Brixx components for production* als Information ausgegeben.
    <!-- Load Brixx-Script standalone -->
    <script src="https://brixx.it/@brixx/standalone/brixx.min.js"></script>

Die Brixx Webkomponente wird mit einem HTML-Element **`<script>`** im HTML-Dokument eingefügt.

    <!-- Include the Brixx Component script files -->
    <script type="text/babel" src="./components/brixx-animal-list.js"
        data-type="module" data-presets="brixx"></script>

In der Brixx-Script Standalone Version wird [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler') mit **`type="text/babel"`** verwendet, um die Brixx Webkomponente in den verschiedenen Browsern verwenden zu können. Zusätzlich müssen noch die HTML-Element Attribute **`data-type="module"`** und **`data-presets="brixx"`** festgelegt werden und die Brixx Webkomponente kann direkt als HTML-Element **`<brixx-animal-list>`** verwendet werden. Somit werden zur Integration in einem HTML-Dokument keine  Programmierkentnisse benötigt.


**`index.html`**

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


# Was wird alles benötigt?

## Quellcode Editor
Für die Entwicklung kann ein einfacher Texteditor, wie der in der Linux Community beliebte [Vim](https://www.vim.org/), oder unter Windows der Quellcode Editor [Notpad++](https://notepad-plus-plus.org/downloads/) und [Sublime Text](https://www.sublimetext.com/) genutzt werden. Ein kostenlose Alternative zur professionellen integrierten Entwicklungsumgebung (IDE) ist [Visual Studio Code](https://code.visualstudio.com/) (VS Code) als leichtgewichtiger Quellcode Editor mit vielen verfügbaren IDE Erweiterungen. Visual Studio Code ist mehr als nur ein Quellcode Bearbeitungstool, derzeit der wohl beliebteste Quellcode Editor und auch für die gezeigten Beispiele verwenden wir Visual Studio Code.

### **Installation Visual Studio Code für Windows**
1. Download the [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) for Windows.
2. Once it is downloaded, run the installer. This will only take a minute.
3. By default, VS Code is installed under `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`.

Alternatively, you can also download a [Zip archive](https://code.visualstudio.com/docs/?dv=winzip), extract it and run Code from there.

> **Tip:** Setup will add Visual Studio Code to your `%PATH%`, so from the console you can type 'code .' to open VS Code on that > folder. You will need to restart your console after the installation for the change to the `%PATH%` environmental variable to >   take effect.

### **User setup versus system setup**
VS Code provides both Windows user and system level setups. Installing the [user setup](https://go.microsoft.com/fwlink/?LinkID=534107) does not require Administrator privileges as the location will be under your user Local AppData (LOCALAPPDATA) folder. User setup also provides a smoother background update experience.

The [system setup](https://go.microsoft.com/fwlink/?linkid=852157) requires elevation to Administrator privileges and will place the installation under Program Files. This also means that VS Code will be available to all users in the system.

See the [Download Visual Studio Code](https://code.visualstudio.com/download) page for a complete list of available installation options.

### **32-bit versions**
If you need to run a 32-bit version of VS Code, both a 32-bit [Installer](https://go.microsoft.com/fwlink/?LinkId=723965) and [Zip archive](https://go.microsoft.com/fwlink/?LinkID=733265) are available.

<img src="images/vscode-start.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code Startbidschirm

### **Visual Studio Code Erweiterungen**
Es gibt unzählige Erweiterungen (Extensions) für Visual Studio Code. Man kann beisielsweise die Anzeigesprache in Visual Studio Code mit der Erweiterung [German Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-de) auf Deutsch umzustellen. 

 > **Tip:** Wer mit unterschiedlichen Editoren arbeitet sollte die Anzeigesprache in Visual Studio Code nicht umstellen, das erleichtert die Arbeit mit anderen Editoren die in der Regel die selben englischen Menübezeichnungen verwenden, aber keine Umstellung der Anzeigesprach auf Deutsch möglich ist.

Eine Erweiterung (Extension) kann man suchen und installieren im [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=Language%20Packs&sortBy=Installs) oder in Visual Studio Code unter Extensions (`Ctrl+Shift+X`).
Hier kann man im Suchfeld den gesuchten Betreff eingeben und erhält alle passenden Erweiterungen. Im Beispiel exemplarisch mit dem *German Language Pack*.

<img src="images/vscode-plugins.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code Extensions

<img src="images/vscode-restart.webp" style="margin-bottom: 10px; width: 300px;" />

Nach der Installation wird man in der Regel zu einem Restart von Visual Studio Code aufgefordert und die Anzeigesprache ist anschließend wie erwartet auf Deutsch umgestellt. Genauso einfach kann eine Erweiterung auch wieder deinstalliert werden.

<img src="images/vscode-german.webp" style="margin-bottom: 10px; width: 600px;" />

### **Empfohlene Erweiterungen zur Berabeitung von Brixx Webkomponenten**
Es gibt jede Menge nützlicher Erweiterungen für Visual Studio Code die einem die Arbeit erleichten, wie die Erweiterung *German Language Pack*. Nahezu unverzichtbare Plugin Erweiterungen zur zur Berabeitung von Brixx Webkomponenten sind in jedem Fall die folgenden beiden.

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Ein lokaler Entwicklungsserver (Webserver) mit Auto Reload (Live reload) bei Änderungen am Quellcode. Der Live Server ermöglicht das Verhalten der Brixx Webkomponente im Browser zu testen, und verhindert darüber hinaus die *blocked by CORS policy* ([Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) beim Zugriff vom Browser auf lokale Ressourcen.
- [NPM-Scripts](https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts) Anzeigen und Ausführen von NPM-SCRIPTS aus der Explorer Ansicht.

## Node.js und npm
Um universelle und eigenständige Brixx **Webkomponenten** zu erstellen verwenden wir [Node.js®](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') (cross-platform JavaScript runtime environment) und [npm](https://www.npmjs.com/ 'Node package manager') (Node Package Manager). 

### **Node.js**
Wird ausschließlich als Entwicklungswerkzeug für den **Build** (Erstellung) eigenständiger Brixx Webkomponenten im Hintergrund verwendet, **nicht zur Laufzeit** benötigt, und erfordert keine besonderen Node.js Kenntnisse. Durch die Verwendung von Node.js können aber weitere **State-of-the-art** Entwicklungswerkzeuge wie Webpack und Babel verwendet werden.

### **Npm**
Npm ist fester Bestandteil bei der Installation von Node.js und im Ursprung ein Package Manager für die Verwaltung der benötigten JavaScript Packages, sowohl für den Build von Brixx Webkomponenten als auch für die Entwicklungswerkzeuge. Npm wird wie Node.js nur zuer Entwicklung benötigt.

### **Installation Node.js und npm für Windows**
1. Download the Node.js [Windows Installer (.msi)](https://nodejs.org/en/download/)
   
   <img src="images/node-download.png" style="margin-bottom: -5px; width: 600px;" />
   
   Node.js downloads

2. Once it is downloaded, run the installer. The Node.js Setup wizard will open.
   
   <img src="images/node-setup-01.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Next]`
   
   <img src="images/node-setup-02.png" style="margin-bottom: -5px; width: 440px;" />

   Check "I accept the terms in the License Agreement" & Select `[Next]`
   
   <img src="images/node-setup-03.png" style="margin-bottom: -5px; width: 440px;" />

   Set the Destination Folder location to install Node.js & Select `[Next]`
   
   <img src="images/node-setup-04.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Next]`
   
   <img src="images/node-setup-05.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Install]`
   
   <img src="images/node-setup-06.png" style="margin-bottom: -5px; width: 440px;" />

   Click `[Finish]`


## Webpack
Mit dem Modul-Bundler [Webpack](https://webpack.js.org/ 'Opensource JavaScript modul packer') für moderne JavaScript-Anwendungen können Anwendung in sogenannten **Bundles** erstellt werden in denen alle Assets bereitgestellt werden. Dadurch ist eine einfache Intergration und Verteilung von Brixx Webkomponenten möglich. Für die Erstellung einer Brixx Webkomponente mit Webpack stehen eine Reihe von Beispiele und Vorlagen zur Verfügung und erfordert keine besonderen Vorkenntnisse und hat eine niedrige Einstigshürde.

## Babel
Der JavaScript Compiler [Babel](https://babeljs.io/ 'Opensource JavaScript transcompiler') wird verwendet ECMAScript 2015+ Code in eine abwärtskompatible Version für nicht kompatible und ältere Browser zu konvertieren und wird zusammen mit Webpack verwendet. Dadurch können Brixx Webkomponenten nahezu in allen Browsern und JavaScript Umgebungen verwendet werden. Für die Verwendung von Babel zusammen mit Webpack stehen eine Reihe von Beispiele und Vorlagen zur Verfügung und erfordert keine besonderen Vorkenntnisse und hat eine niedrige Einstigshürde.
