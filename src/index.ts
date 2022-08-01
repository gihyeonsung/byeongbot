import express from 'express';

const app = express()
const port = 3000

app.get('/punchin', (req, res) => {
  res.send('punchin')
})

app.get('/punchout', (req, res) => {
  res.send('punchout')
})

app.get('/book', (req, res) => {
  res.send('book')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
