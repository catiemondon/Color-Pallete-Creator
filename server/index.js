require('dotenv').config()
const express= require('express')
const massive= require('massive')
const color_ctrl= require('./controllers/colorController')

const app= express()

const {SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())


massive(CONNECTION_STRING).then((database)=>{
    app.set('db', database)
    console.log('Database Connected')
})

app.get('/api/colors', color_ctrl.getColors)


app.listen(SERVER_PORT, ()=> console.log('Server Connected'))