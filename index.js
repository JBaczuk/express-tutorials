const express = require('express')
const app = express()
const port = 30001
const params = require('./params')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.param('id', (req, res, next, id) => {
    if(!isNaN(parseInt(id) && isFinite(id))) {
        console.log('good')
        next()
    } else {
        console.error('not a number')
        next(new Error('id must be a number'))
    }
})

app.use('/params', params)

