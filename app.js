const express = require('express');
const controller = require('./controller/profileController');
const connectDB = require('./db/database');
const upload = require('./storage/diskstorage')
const app = express()
const port = 3000;

// database call
connectDB()

app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
//set view engine
app.set('view engine', 'ejs')


app.get('/',controller.handleProfile)
app.get('/user',controller.adduser)

//post data
app.post('/submit',upload.single('image'),controller.handlePost)

//nevigate User
app.get('/edit/:id',controller.handleNevigate)
//update
app.post('/update/:id',upload.single('image'),controller.handleUpdate)

// delete
app.get('/delete/:id',controller.handleDelete)

//Reset
app.get('/reset/:id',controller.handleReset)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})