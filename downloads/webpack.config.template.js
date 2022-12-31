// Edit the Brixx Component optional build settings here!
// Brixx element prefix
const brixx_element_prefix = 'brixx'
// Bixx component name e.g. 'custom-element' become brixx-custom-element.js, <brixx-custom-element>
const brixx_component_name = null
// Brixx Components folder
const brixx_component_folder = 'components'
// Brixx build folder
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
  let server_port = '8080'  
  try {
    server_port = webpack_server_port
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
        inject: 'head',
        minify: { removeComments: false }
      })
    ]
  }
}
