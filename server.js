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
    // console.log(savedImgs)
})


app.post('/save', async (req, res) => {
    let newTagName = req.body.tagName;
    let newImg = req.body.imageSrc;

    
        const result = await sql.query(`
            INSERT INTO imgs (img, tag)
            VALUES ('${newImg}', '${newTagName}');
        `);
        
        res.status(200).json({ message: 'Image saved successfully' });
    
});


app.delete('/imgTag', async (req, res) => {
    // console.log(req.query)
    let img = req.query.photo;
    let tag = req.query.tag
    // console.log(img)
    // console.log(tag)

    const result = await sql.query(`
        DELETE FROM imgs
        WHERE img = '${img}' AND tag = '${tag}';
    `);
    
    res.status(200).json( (await sql.query(`
    select * from imgs;
    `) )[0]);
  })


  app.put('/tagChange', async (req, res) => {
    let img = req.body.img;
    let tag = req.body.tag;
    let newTag = req.body.newTag;

    const result = await sql.query(`
        UPDATE imgs
        SET tag = '${newTag}'
        WHERE img = '${img}' AND tag = '${tag}';
    `);
    
    res.status(200).json( (await sql.query(`
    select * from imgs;
    `) )[0]);
  
  })


ViteExpress.listen(app, 5500, () => {console.log('listening on 5500')})