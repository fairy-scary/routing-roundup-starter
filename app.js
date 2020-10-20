
const express = require ('express');
const routeFile = require('./route.js');

const app = express();

app.set('view engine', 'pug');



app.get("/capital-letters/:id", (req, res) => {
  res.send(`${req.params.id}`.toUpperCase());
});

app.use('/margot', routeFile);
app.use('/margeaux', routeFile);

app.get( '/*xyz', (req, res) => {
    res.send("That's all I wrote.");
})

app.get('/', (req, res) => {
    res.send("Hello from Express!");

})

//app.all("(/about)|(/about[^x-z])|(/foo)", (req, res) => {
    app.all( /^\/[a-z(0-9)A-Z\-_]*$/, (req, res) => {
      res.render("layout", {
        method: req.method,
        path: req.path,
        randomNum: Math.floor(Math.random() * 100),
      });
    });

const port = 8081

app.listen(port, () => console.log(`Listning on ${port}...`));
