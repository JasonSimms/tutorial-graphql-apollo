import express from 'express'

const PORT = process.env.PORT || 3500
const app = express()

app.get('/', function(req,res){
    res.send({hello: `there!`})
})

app.listen(PORT, () => `Listening at http://localhost:${PORT}`)