import express from 'express';
import ViteExpress from 'vite-express';
// import { Img, User, sequelize } from './src/model.js'

let app = express();

app.use(express.json())

ViteExpress.listen(app, 5500, () => {console.log('listening on 5500')})