
const express = require('express')

const app = express()
const port = 3409
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sumbit',(req, res) => {
    res.send('get sumbit')
})

app.post('/sumbit',(req, res) => {
    console.log(req.body);
    console.log(req.body.username);

    res.send('get sumbit!')

})
app.get('/login',(req, res) => {
    res.send('get login!')
})
app.get('/forget',(req, res) => {
    res.send('get forget!')
})
app.get('/logout',(req, res) => {
    res.send('get logout!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})