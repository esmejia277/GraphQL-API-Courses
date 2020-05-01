const express = require('express')
const bodyParse = require('body-parser')

const app = express()

const PORT = 5678

app.listen(PORT, () => {
    console.log('Running server!')

})