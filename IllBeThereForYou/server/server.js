import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack.config.js';


const isProduction = process.env.NODE_ENV === 'production';

const port = isProduction ? (process.env.PORT || 80) : 3000;

const app = express();

const staticPath = path.join(__dirname, '../');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(staticPath));

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`BOOTING UP`);
});

if (!isProduction) {
  const devServer = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    inline: true,
    hot: true,
    quiet: true,
    noInfo: false,
    stats: { colors: true },
    proxy: [
      {
        path: '*',
        target: 'http://localhost:3000',
        ws: true,
      }
    ]
  });

  devServer.listen(3001, 'localhost', err => {
    if (err) {
      console.log(err);
    }
    console.log(`DEVELOPING MODE`);
  });
}
