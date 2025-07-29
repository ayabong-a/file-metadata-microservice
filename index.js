const express = require('express');
const cors = require('cors');

const app = express();

app.use(express());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', (req, res) => {
    res.json({message: "api running"})
});


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${listener.address().port}`)
});