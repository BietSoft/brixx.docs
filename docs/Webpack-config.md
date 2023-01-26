# Webpack-Konfiguration webpack.config.js
Für die Webpack-Konfiguration benötigen wir eine Konfigurationsdatei im Stammverzeichnis des Projekts. Dafür verwenden wir zur Erstellung einer **„Standard“ Brixx Webkomponente** das Template [webpack.config.template.js](../assets/downloads/webpack.config.template.js) und speichern die Datei als `webpack.config.js` im Projektordner. Damit sind keine Webpack Kentnisse und Anpassungen der Konfigurationsdatei notwendig. Fortgeschrittene Anwender mit Webpack Kentnissen haben aber die Möglichkeit die Webpack-Konfiguration für eigene Zwecke anzupassen.

Brixx *webpack.config.js* Template

    // Edit the Brixx Component optional build settings here!
    // Brixx element prefix
    const brixx_element_prefix = 'brixx'
    // Bixx component name e.g. 'custom-element' become brixx-custom-element.js, <brixx-custom-element>
    const brixx_component_name = null
    // Brixx components folder
    const brixx_component_folder = 'components'
    // Brixx component section
    const brixx_component_section = 'body'
    // Brixx dist folder
    const brixx_dist_folder = 'dist'
    // Webpack server port
    const webpack_server_port = '8080'

    // Do not edit the Brixx Component build settings here!
    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    module.exports = (env, argv) => {
      // Brixx Component script file name pattern: [brixx_element_prefix]-[brixx_component_name].js
      let brixx_file_name = brixx_component_name || env.package_name || `${brixx_element_prefix}-element`
      const pattern = `(${brixx_element_prefix}-[a-zA-Z0-9])`
      const regexp = new RegExp(pattern, 'g')
      const prefix = regexp.test(brixx_file_name)
      if (!prefix) brixx_file_name = `${brixx_element_prefix}-${brixx_file_name}`
      const brixx_script_file = `./${brixx_component_folder}/${brixx_file_name}.js`
      let component_section = 'body'  
      try {
        component_section = brixx_component_section || component_section
      } catch (error) {
        // Use default component section
      }
      let server_port = '8080'  
      try {
        server_port = webpack_server_port || server_port
      } catch (error) {
        // Use default server port
      }
      
      return {
        mode: 'production',
        entry: './index.js',
        output: {
          path: path.resolve(__dirname, brixx_dist_folder),
          filename: brixx_script_file
        },
        devServer: {
          // Set server port
          port: server_port,
          // Enable hot reloading
          hot: true,
          // Open browser after build
          open: true,
          historyApiFallback: {
            index: '../index.html'
          }
        },
        performance: {
          hints: false,
          maxEntrypointSize: 512000,
          maxAssetSize: 512000
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: [
                    [
                      '@babel/plugin-transform-react-jsx',
                      {
                        pragma: 'Brixx.createElement'
                      }
                    ]
                  ]
                }
              }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: 'index.html',
            component: brixx_file_name,
            publicPath: '',
            scriptLoading: 'blocking',
            inject: component_section',
            minify: { removeComments: false }
          })
        ]
      }
    }

Um die Webpack-Konfiguration anzupassen stehen spezielle Eigenschaften im Bereich `Edit the Brixx Component optional build settings here!` zur Verfügung.

  > Anwender ohne Webpack Kentnisse sollten Anpassungen an der Webpack-Konfiguration ausschließlich über die spezielle Eigenschaften machen.

    // Edit the Brixx Component optional build settings here!
    // Brixx element prefix
    const brixx_element_prefix = 'brixx'

Die optionale Eigenschaft `brixx_element_prefix` legt einen **Prefix** für den Namen der Brixx Webkomponente fest und wird bei Verwendung als Brixx HTML-Element benötigt `(default='brixx')`. Der Brixx HTML-Element Prefix wird dabei dem HTML-Element Namen mit einem Bindestrich (hyphen) vorangestellt. 

    // Bixx component name e.g. 'custom-element' become brixx-custom-element.js, <brixx-custom-element>
    const brixx_component_name = null

Die optionale Eigenschaft `brixx_component_name` legt den „technischen“ Namen der Brixx Webkomponente fest und ist nicht definiert `(default=null)`. In dem Fall wird die Eigenschaft `name` in aus der *package.json* als Name für die Brixx Webkomponente verwendet. Der Falback für den Namen der Brixx Webkomponente ist `{brixx_element_prefix}-element`. Dabei wird `custom-element` als Name der Brixx Webkomponente zur Brixx Script-Component Datei `brixx-custom-element.js` und zum Brixx HTML-Element `<brixx-custom-element>`

    // Brixx components folder
    const brixx_component_folder = 'components'

Die optionale Eigenschaft `brixx_component_folder` legt den Ordner fest in der die Brixx Webkomponente im Projekt erwartet wird `(default='./components')` und sollte im Projektordner angelegt werden.

    // Brixx component section
    const brixx_component_section = 'body'

Die optionale Eigenschaft `brixx_component_section` legt die Section (`head`, `body`) fest in der die Brixx Script-Component Dateien im HTML-Dokument eingefügt werden `(default='body')`.

    // Brixx dist folder
    const brixx_dist_folder = 'dist'

Die optionale Eigenschaft `brixx_dist_folder` wird für die Entwicklung benötigt und legt den Ordner fest in der die Brixx Webkomponente erstellt wird `(default='./dist')`. Der Ordner entspricht einer Live-Umgebung von einem Projektordner und wird zur Distribution der Brixx Webkomponente erstellt. Die HTML-Datei `index.html` wird dabei in erster Linie zum testen der Brixx Webkomponente verwendet, kann aber auch für die Live-Umgebung verwenet werden. In der Regel wird nur die JavaScript-Datei der Brixx Webkomponente (Brixx Component script file) im Ordner `[brixx_component_folder]` in Projekten verwendet und verteilt.

    // Webpack server port
    const webpack_server_port = '8080'

Die optionale Eigenschaft `webpack_server_port` legt den Port `(default='8080')` für die Adresse `http://127.0.0.1:{webpack_server_port}/index.html` fest unter dem der *Webpack DevServer* die HTML-Datei `(default='index.html')` zum testen der Brixx Webkomponente bereitstellt und im Standard-Browser öffnet Mit der Eigenschaft hat man die Möglichkeit z. B. bei einem konkurierenden lokalen Webserver den Port für den Webpack DevServer anzupassen.