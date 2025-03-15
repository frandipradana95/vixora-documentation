const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js", // File masukannya
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						plugins: [
							[
								"@babel/plugin-transform-react-jsx",
								{ pragma: "createElement" },
							],
						],
					},
				},
			},
			{
				test: /\.css$/, // Tambahkan loader untuk CSS
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[hash][ext][query]",
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		static: "./dist",
		hot: true,
		port: 3000,
		open: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html", // Template HTML
			filename: "index.html",
		}),
	],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	mode: "development",
};
