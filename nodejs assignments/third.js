const express = require('express')
const app = express()
const routeIndex = require('../nodejs assignments/routes/route1')
app.use('/',routeIndex)
app.listen(3000)