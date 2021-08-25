import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";

const env = process.env.NODE_ENV as "development" | "production" | "none";

const config: Configuration & {
  devServer: { hot: boolean; historyApiFallback: any };
} = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/",
  },
  mode: env || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;
