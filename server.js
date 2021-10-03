const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ endpoint: "Hello, from the root end point" })
})


const port = process.env.PORT || "3000";

app.listen(port, () => {
    console.log(`Server Port, ${port}`);
})