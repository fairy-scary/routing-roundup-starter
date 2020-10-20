const express = require ('express');

const app = express();

app.set('view engine', 'pug');

app.get('/about', (req, res) => {
    res.render('layout', {method: req.method, path: req.path, randNum: 42});
 
   
})

app.get('/*xyz', (req, res) => {
    res.render('layout', {method: req.method, path: req.path, randNum: 42});
    res.send("That's all I wrote!")
})

app.get('/', (req, res) => {
    res.send("Hello from Express!");

})

const port = 8081

app.listen(port, () => console.log(`Listning on ${port}...`))