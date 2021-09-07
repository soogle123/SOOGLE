
const express = require('express')
const app = express()
const port = 3409

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup',(req, res) => {
    res.send('get signup!')
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