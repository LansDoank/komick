const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const app = express()
const port = 3000

// Setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('index',{layout: './layouts/main'})
})

app.listen(port,() => {
    console.log(`Server sedang berjalan di port http://localhost:${port}`)
})