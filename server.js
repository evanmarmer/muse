import express from 'express';
import ViteExpress from 'vite-express';
import { Img } from './models/model.js'; 
import { Sequelize } from "sequelize";

const sql = new Sequelize("postgres:///muse_app")


let app = express();

app.use(express.json())


app.get('/saved', async (req, res) => {
    const savedImgs = await sql.query(`
    select * from imgs;
    `)
    res.send(savedImgs[0])
    console.log(savedImgs)
})


app.post('/save', async (req, res) => {
    let newTagName = req.body.tagName;
    let newImg = req.body.imageSrc;

    
        const result = await sql.query(`
            INSERT INTO imgs (img, tag_name)
            VALUES ('${newImg}', '${newTagName}');
        `);
        
        res.status(200).json({ message: 'Image saved successfully' });
    
});

ViteExpress.listen(app, 5500, () => {console.log('listening on 5500')})