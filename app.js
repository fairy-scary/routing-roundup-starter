
const express = require ('express');
const routeFile = require('./route.js');

const app = express();

app.set('view engine', 'pug');

app.get('/about', (req, res) => {
    res.render('layout', {method: req.method, path: req.path, randNum: Math.random()}); 
})

app.get("/capital-letters/:id", (req, res) => {
  res.send(`${req.params.id}`.toUpperCase());
});

app.use('/margot', routeFile);
app.use('/margeaux', routeFile);

app.get('/*xyz', (req, res) => {
    res.send("That's all I wrote.");
})

app.get('/', (req, res) => {
    res.send("Hello from Express!");

})

const port = 8081

app.listen(port, () => console.log(`Listning on ${port}...`));
