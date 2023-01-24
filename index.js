const express = require('express');
const {readFile, readFileSync} = require('fs').promises;

const app = express();

app.get('/', async (req, res) => {

    res.send(await readFile('./html/home.html', 'utf8'));

});

app.listen(process.env.PORT || 3000, () => console.log(`listening on ${process.env.PORT || 3000}`));