const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", (__dirname + "/views"));
app.set("view engine", "ejs");

app.get('/', (req,res) => {
    res.render('index');
});
app.get('*', (req, res) => {
    res.status(301).redirect('/');
});

app.post('*',  (req, res) => {
    res.status(301).redirect('/');
});

app.listen(process.env.PORT || 8080, (err) => {
    if (err) throw err;
})