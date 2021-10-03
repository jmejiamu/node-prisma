const express = require('express');

const envconfig = require('dotenv');
const { PrismaClient } = require('@prisma/client')

//Configuration to use the .env file 
envconfig.config();

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

// Root End point
app.get('/', async (req, res) => {
    res.json({ endpoint: "Hello, from the root end point" })
})

app.post('/post', async (req, res) => {
    const { picture, name, hobby } = req.body;

    const post = await prisma.profile.create({
        data: {
            picture,
            name,
            hobby
        }
    })

    res.json(post)
})

// port where the server is listen
const port = process.env.PORT || "3000";

app.listen(port, () => {
    console.log(`Server Port, ${port}`);
})