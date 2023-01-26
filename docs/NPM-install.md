# NPM-Packages installieren

Wir öffnen die Eingabeaufforderung unter Windows, oder eine entsprechende Terminal Anwendung in einem anderen Betriebssystem, und wechseln in den Projektordner, im Beispiel `[brixx-simple-element]`. Anschließend werden die NPM-Packages der Abhängigkeiten `dependencies` und `devDependencies` in der _package.json_ mit `npm install` oder mit der Abkürzung (Shorthand) `npm i` installiert und im Ordner `[node_modules]` für die Entwicklung im Projektordner bereitgestellt.

<img src="../assets/images/npm-install.webp" style="margin-bottom: -5px; width: 600px;" />

Windows Eingabeaufforderung

> **Tip:** Die Abhängigkeiten der _package.json_ können auch in der Entwicklungsumgebung in Visual Studio Code in einem Terminal-Fenster (Eingabeaufforderung) installiert werden. Dadurch kann man innerhalb der Entwicklungsumgebung bleiben und muss diese nicht für andere Aufgaben verlassen. Das gilt für alle Betriebssysteme.

<img src="../assets/images/vscode-npm-install-01.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Terminal-Fenster

Mit dem _NPM Script Explorer_ haben wir eine zusätzliche Möglichkeit die Abhängigkeiten in der _package.json_ zu installieren.

<img src="../assets/images/vscode-npm-install-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - NPM-SCRIPTS (_NPM Script Explorer_)

Die NPM-Packages kann man dann durch Klick mit der rechten Maustaste (Kontextmenü) auf den Eintrag `package.json` in der Explorer-Ansicht unter `[NPM-SCRIPTS]` und Auswahl im Kontextmenü `[Run Intall]` installieren.

Nach der Installation der Abhängigkeiten in der _package.json_ für das Projekt sehen wir in der Explorer-Ansicht den Ordner `node_modules` mit den NPM-Packages und die Datei `package-lock.json`

> Die Datei _package-lock.json_ enthält eine Beschreibung der installierten NPM-Packages und wird automatisch für alle Vorgänge generiert, bei denen npm die _package.json_ ändert. Die _package-lock.json_ wird erstellt wenn die Datei nicht vorhanden ist. In seltenen Fällen kann es notwendig sein, z. B.bei einem Update, die Datei _package-lock.json_ vor der Installation zu löschen.

<img src="../assets/images/vscode-node-modules.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Explorer-Ansicht
