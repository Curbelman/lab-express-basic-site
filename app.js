const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
});

app.listen(port, ()=> {
    console.log (`The server is running in port ${port}`);
})