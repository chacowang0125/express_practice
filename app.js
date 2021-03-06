const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index', { link: '首頁' })
})
app.get('/:link', (req, res) => {
    const link = req.params.link;
    res.render('index', { link })
})

app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})