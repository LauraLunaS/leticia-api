const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 4000

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app