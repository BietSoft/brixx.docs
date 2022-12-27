# Install Node.js and npm for Windows
1. Download the Node.js [Windows Installer (.msi)](https://nodejs.org/en/download/)
   
   <img src="./images/node-download.png" style="margin-bottom: -5px; width: 600px;" />
   
   Node.js - Downloads

2. Once it is downloaded, run the installer. The Node.js Setup wizard will open.
   
   <img src="./images/node-setup-01.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Next]`
   
   <img src="./images/node-setup-02.png" style="margin-bottom: -5px; width: 440px;" />

   Check "I accept the terms in the License Agreement" & Select `[Next]`
   
   <img src="./images/node-setup-03.png" style="margin-bottom: -5px; width: 440px;" />

   Set the Destination Folder location to install Node.js & Select `[Next]`
   
   <img src="./images/node-setup-04.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Next]`
   
   <img src="./images/node-setup-05.png" style="margin-bottom: -5px; width: 440px;" />

   Select `[Install]`
   
   <img src="./images/node-setup-06.png" style="margin-bottom: -5px; width: 440px;" />

   Click `[Finish]`

You can verify the installation in the command prompt with **`node --version`** and **`npm --version`**

   <img src="./images/node-versions.webp" style="margin-bottom: 15px; width: 600px;" />

  > **Tip:** There is another way to install Node.js and npm, and even install different versions side by side. Install the [Node Version Manager (NVM)](https://learn.microsoft.com/de-de/windows/dev-environment/javascript/nodejs-on-windows) for Windows. This is not necessary for building Brixx web components, since there is no special Node.js version dependency. NVM is also available for Linux based operating systems.