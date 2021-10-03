const express = require('express');

const envconfig = require('dotenv');

//Configuration to use the .env file 
envconfig.config();

const app = express();

app.use(express.json());

// Root End point
app.get('/', async (req, res) => {
    res.json({ endpoint: "Hello, from the root end point" })
})

// port where the server is listen
const port = process.env.PORT || "3000";

app.listen(port, () => {
    console.log(`Server Port, ${port}`);
})