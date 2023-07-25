# Brixx-Process-Script

### Package: `@brixx/process-script`

### Version: `1.0.1` (Release, 08.07.2023)

#
> This document is in progress. For further information on the use of Brixx-Script please feel free to contact [`info@brixx.it`](info@brixx.it)

# Process Driven Development for everyone

## Create processes and workflows

Brixx-Process-Script is a free JavaScript library to create process applications for the [Brixx Process-Engine](https://brixx.it/brixx-process-engine.html) and fill in a gap to enterprise process orchestration systems such as [Camunda](#) or [X4 BPMS](#) as a lean workflow management system for automation and digitization of business processes and industrial processes. For processes in web applications, to control multiple web applications up to IoT control. With minimal development, integration and costs, Brixx Process Engine can serve as the basis for applications or be integrated into existing applications as an extension for sub-processes. With our **Brixx-Process-Script**, the programming can be reduced to a minimum. Fast integration into any HTML document is possible, especially with the integrated [Brixx-Script (smart web components)](https://brixx.it/brixx-script.html) as Brixx HTML elements or as Brixx script components in JavaScript applications and frameworks and also support JavaScript environments such as [Node.js®](https://nodejs.org/en/ 'Opensource cross platform JavaScript runtime environment') (cross-platform JavaScript runtime environment).

## Model processes and workflows

With our workflow management system, all types of processes and workflows can be mapped with the [Brixx BPMN-Editor](https://brixx.it/brixx-bpmn-editor.html) for process modeling with Business Process Model and Notation ([BPMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)) and made available in the Brixx Process Engine with one click.

-   [Erste Schritte](#getstarted)
    -   [Brixx Web-Baustein [brixx-login-process] erstellen](#brixx-login-process-html)
-   [Brixx-Process-Script Tutorial](#tutorial)
-   [Brixx-Process-Script Referenz](#reference)
-   [Downloads](#downloads)

# <div id='getstarted' /> Erste Schritte

Wir verwenden Brixx-Script zum Erstellen von einem **Gesch&auml;ftsprozess** (Workflow). Brixx-Script ist Bestandteil in Brixx-Process-Script und ermöglicht einen minimalen Programmieraufwand und schnelle Integration in ein HTML-Dokument (siehe [Brixx-Script Dokumentation](../brixx-script/README.md)). Dabei ist neben der JavaScript-Engine für Web-/Entwickler auch eine komplette Erstellung im HTML-Code für Web-/Designer möglich. Es können auch beide „Welten” kombiniert werden, was Brixx-Process-Script besonders interessannt und leistungsfähig macht. Im ersten Schritt erstellen wir einen einfachen Brixx Web-Baustein (Brixx web component) mit einem Benutzer-Login (`brixx-login-process-html`) und anschließend das Beispiel als JavaScript Element (`brixx-login-process-javascript`) und Node.js Application (`brixx-login-process-node`).

## Vorbereitung

Wir verwenden die [Brixx Prozess Engine](../brixx-process-engine/README.md) zur Verarbeitung von einem Beutzer-Login Gesch&auml;ftsprozess. Die Brixx Prozess Engine kann zum Beispiel f&uuml;r die Entwicklung unter Windows mit dem [Windows Installer](https://brixx.it/brixx-process-engine.html) und ein paar Mausklicks installiert und lokal bereitgestellt werden.

<img src="../assets/images/brixx-process-engine-installer-06.webp" style="margin-bottom: -5px; width: 400px;" />

Installation abgeschlossen- Windows-Installer

Die Brixx Prozess Engine steht anschlie&szlig;end unter http://localhost:5000 f&uuml;r die lokale Entwicklung zur Verf&uuml;gung.

<img src="../assets/images/brixx-process-engine-power-shell.webp" style="margin-bottom: -5px; width: 600px;" />

Brixx Prozess Script im Power-Shell Fenster

Danach modelieren wir einen einen Gesch&auml;ftsprozess für einen Benutzer-Login und verwenden daf&uuml;r die BPMN Model Datei [brixx-login-process.bpmn](../assets/downloads/brixx-login-process.bpmn), die wir mit dem [Brixx BPMN-Editor](../brixx-bpmn-editor/README.md) &ouml;ffnen, und direkt als Gesch&auml;ftsprozess in der Brixx Prozess Engine ver&ouml;ffentliche k&ouml;nnen.

<img src="../assets/images/bpmn-editor-publish-model.webp" style="margin-bottom: -5px; width: 600px;" />

Benutzer-Login Model `brixx-login-process` im Brixx BPMN-Editor

Zusätzlich erstellen wir ein HTML-Dokument als eine Art Brixx-Process-Engine *Admin Console* zur Erstellung einer neuen Prozessinstanz. Hier wird eine Prozessinstanz mit der Funktion `BrixxProcessDefinition.process.create` erstellt und die Process-ID (Process identifier) ausgegeben. Wir verwenden im HTML-Dokument *Brixx-Process-Script standalone for development* und kann dadurch, beispielsweise mit dem *Live Server* in Visual Studio Code, direkt im Browser gestartet werden. Die Funktion wird zu einem späteren Zeitpunkt genauer erklärt; hier kann u.a. eine Mail mit der Prozess URL als QR-Code an den Ersteller der Projektinstanz gesendet werden.

Komplettes HTML-Dokument in der HTML-Datei `admin.html`

    <!DOCTYPE html>
    <html>
        <head>
            <title>Admin Console</title>
        </head>

        <!-- Load Brixx-Process-Script standalone for development -->
        <script src="https://brixx.it/@brixx/standalone/brixx-process.min.js"></script>

        <body>
            <h1>Brixx-Process-Engine</h1>
            <h3>Create a new process instance</h3>
            <table>
                <tr>
                    <td>Model identifier (ID)</td>
                    <td>
                        <input type="text" id="mid" size="35" />
                    </td>
                </tr>
                <tr>
                    <td>Model key (Name)</td>
                    <td>
                        <input type="text" id="key" size="35"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="button" id="btnCreateProcess" value="Create process" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td>Process-ID (PID)</td>
                    <td>
                        <input type="text" id="pid" size="35" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="button" id="btnCopyProcessID" value="Copy to clipboard" />
                    </td>
                </tr>
            </table>

            <script>
                // Create a new process instance
                document
                    .getElementById("btnCreateProcess")
                    .addEventListener("click", () => {
                        BrixxProcessDefinition.process.create({
                            mid: document.getElementById("mid").value,
                            key: document.getElementById("key").value,
                            callback: (response) =>
                                (document.getElementById("pid").value =
                                    response.pid),
                        });
                    });

                // Copy process identifier to clipboard
                document.getElementById("btnCopyProcessID").addEventListener("click", () => {
                    navigator.clipboard.writeText(value);
                });
            </script>
        </body>
    </html>

<img src="../assets/images/brixx-process-engine-admin-console.webp" style="margin-bottom: -5px; width: 400px;" />

Die Brixx-Process-Engine *Admin Console* im Browser-Fenster

Mit Angabe des *Model identifiers (ID)* oder dem optionalen *Model key (Name)*, aus dem Benutzer-Login Model im Brixx BPMN-Editor, kann eine neue Prozessinstanz in der Brixx Prozess Engine mit Klick auf die Schaltfläche `[Create Process]` erstellt werden. Mit Klick auf die Schaltfläche `[Copy to clipboard]` wird die *Process-ID (PID)* in die Zwischenablage kopiert. 

## <div id='brixx-login-process-html' /> Brixx Web-Baustein [brixx-login-process] erstellen (HTML based)

Wir erstellen einen einfachen Benutzer-Login Prozess. Dazu erstellen wir einen Ordner `./components` im Projektordner `[brixx-login-process-html]` wodurch die Projekt-Ordnerstruktur wie folgt aussieht.

    brixx-login-process-html/
    ├── components/
    │   └── brixx-login-process.js
    ├── admin.html
    └── index.html

Darin erstellen wir den Brixx Web-Baustein `[brixx-login-process]` in der Brixx Script-Component Datei `brixx-login-process.js`
und suchen zuerst mit der Funktion `BrixxProcessDefinition.getSearchParam` nach dem URL-Parameter `pid` mit einer g&uuml;ltigen Process-ID (Prozessinstanz). Ist der nicht in der URL enthalten wird nach der Process-ID in einem Eingabedialog gefragt. Diese Funktion wird in der Regel nur f&uuml;r die Entwicklung verwendet.

    // Get search param
    const pid = BrixxProcessDefinition.getSearchParam("pid");

<img src="../assets/images/brixx-login-process-html-01.webp" style="margin-bottom: -5px; width: 400px;" />

Eingabedialog für eine g&uuml;ltige Process-ID mit der Funktion `getSearchParam` im Browser-Fenster. Das kann eine Process-ID sein, oder ein Teilprozess Idendifier, z. B. eine Task-ID.

## <div id='brixx-login-process-javascript' /> Brixx Web-Baustein [brixx-login-process] erstellen (JavaScript based)

## <div id='brixx-login-process-node' /> Node.js Application [brixx-login-process-] erstellen

# <div id='tutorial' /> Brixx-Process-Script Tutorial

# <div id='reference' /> Brixx-Process-Script Referenz

# <div id='downloads' /> Downloads

-   ### [Beispiel [brixx-login-process.bpmn] (BPMN-Model)](../assets/downloads/brixx-login-process.bpmn)

## Copyright and License

#

Copyright © BRIXX.it 2022-present