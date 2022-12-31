# NPM-Packages installieren 
Wir öffnen die Eingabeaufforderung unter Windows, oder eine entsprechende Terminal Anwendung beispielsweise unter macOS, und wechseln in den Projektordner, im Beispiel den Ordner **`[brixx-simple-element]`**. Anschließend werden die NPM-Packages der Abhängigkeiten **`dependencies`** und **`devDependencies`** der *package.json* mit **`npm install`** oder dem Shortcut **`npm i`** installiert und für das Projekt und die Entwicklung bereitgestellt.

<img src="./images/npm-install.webp" style="margin-bottom: 15px; width: 600px;" />

  > **Tip:** Die Abhängigkeiten der *package.json* können auch direkt aus der Entwicklungsumgebung, z. B. in Visual Studio Code in einem inetegrierten Terminal-Fenster (Eingabeaufforderung) installiert werden. Dadurch kann man innerhalb der Entwicklungsumgebung bleiben und muss diese nicht für andere Aufgaben verlassen. Das gilt für alle Betriebssysteme.

<img src="./images/vscode-npm-install-01.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Terminal-Fenster

Mit dem *NPM Script Explorer* haben wir eine weitere Möglichkeit die Abhängigkeiten in der *package.json* zu installieren.

<img src="./images/vscode-npm-install-02.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Terminal-Fenster

Klick mit der rechten Maustaste (Kontextmenü) auf **`package.json`** in der Explorer-Ansicht unter **`[NPM-SCRIPTS]`**  und im Menü **`[Run Intall]`** auswählen.

Nach der Installation der Abhängigkeiten in der *package.json* für das Projekt sehen wir in der Explorer-Ansicht den Ordner **`node_modules`** mit den NPM-Packages und die Datei **`package-lock.json`**

  > Die Datei *package-lock.json* enthält eine Beschreibung der installierten NPM-Packages und wird automatisch für alle Vorgänge generiert, bei denen npm die *package.json* ändert. Die *package-lock.json* wird erstellt wenn die Datei nicht vorhanden ist. In seltenen Fällen kann es notwendig sein, z. B.bei einem Update, die Datei *package-lock.json* vor der Installation zu löschen.

<img src="./images/vscode-node-modules.webp" style="margin-bottom: -5px; width: 600px;" />

Visual Studio Code - Explorer-Ansicht