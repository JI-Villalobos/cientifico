//acceder a las rutas de nuestro proyecto
const path = require('path')

//trabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin')

//esxportar modulo de configuraciones

module.exports = {
    //punto de entrada
    entry: './src/index.js',
    //punto de salida
    output: {
        //ruta del punto de salida
        path: path.resolve(__dirname, 'dist'),
        //nombre del archivo compilado para producción
        filename: 'main.js'
    },
    //resolver extenciones del proyecto
    resolve: {
        extensions: ['.js'],
    },
    //modulo de reglas
    module: {
        rules: [
            //estructura de babel(para compatibilidad entre navegadores)
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                //establecer loader
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin(
            {
                //inyectar valores en archivos html
                inject: true,
                //definir template principal
                template: './public/index.html',
                //ruta donde se guardara el template
                filename: './index.html'
            }
        )
    ]
}