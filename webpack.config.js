const fs = require('fs')
const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getPages = () => {
	const files = fs.readdirSync(join(__dirname, 'src/pages/'))
	return files.map((filename) => filename.split('.')[0])
}

const jsFileExists = (fileName) => fs.existsSync(join(__dirname, 'src', `${ fileName }.js`))

const getPageJs = () => {
	const entries = getPages()
		.map((page) => jsFileExists(page) && [ page, `./src/${ page }.js` ])
		.filter(Boolean)

	return Object.fromEntries(entries)
}

module.exports = async (env) => {
	const devMode = Boolean(env.WEBPACK_SERVE)

	return {
		entry: getPageJs(),
		mode: devMode ? 'development' : 'production',
		output: {
			filename: 'js/[name].bundle.js',
			path: resolve(__dirname, 'dist'),
			clean: !devMode,
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.html$/,
					loader: 'html-loader',
					options: { minimize: devMode },
				},
				{
					test: /\.(scss|css)$/,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|jpg|jpeg|ico|svg|webp|mp4)/,
					type: 'asset/resource',
					generator: { filename: 'media/[name]-[hash][ext]' },
				},
			],
		},
		resolve: {
			alias: {
				images: resolve(__dirname, 'src', 'images'),
			},
		},
		devServer: {
			static: {
				directory: join(__dirname, 'src'),
			},
			compress: true,
			port: 9000,
		},
		plugins: [
			...getPages().map((page) => {
				return new HtmlWebpackPlugin({
					template: `./src/pages/${ page }.html`,
					filename: `${ page }.html`,
					chunks: [ page ],
					inject: true,
				})
			}),
		].concat(devMode ? [] : [
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
			}),
		]),
	}
}
