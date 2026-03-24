const myCollection = require('../schema/userSchema')

const handleProfile = async (req, res) => {
    try {
        const myFile = await myCollection.find()
        res.render('profile', { profile: myFile })
    }
    catch (err) {
        console.log('some thing went wrong')
        console.log(err)
    }
}
//add user
const adduser = (rea, res) => {
    res.render('user')
}

//post user
const handlePost = async (req, res) => {
    try {
        const image = (req.file.originalname)
        const { name, profession, age } = req.body;
        const result = await myCollection.create({ image, name, age, profession })
        console.log('your profile has been successfully Uploded !!')
        res.redirect('/')
    }
    catch (err) {
        console.log('data upload Faild')
        console.log(err)
    }

}
//nevigate //
const handleNevigate = async (req, res) => {
    const result = await myCollection.findById(req.params.id)
    res.render('update', { student: result })
}
//update
const handleUpdate = async (req, res) => {
    try {
        const id = req.params.id
        if (!req.body) {
            res.send('form data not recevied')
        }
        const { name, age, profession } = req.body;
        let formData = { name, age, profession };
        if (req.file) {
            formData.image = req.file.filename
        }
        await myCollection.findByIdAndUpdate(id, formData)
        res.redirect('/')
    } catch (err) {
        res.send('update faild')
        console.log(err)
        res.send('update failed');
    }

}

//delete
const handleDelete = async (req, res) => {
    try {
        const id = req.params.id
        await myCollection.findByIdAndDelete(id)
        res.redirect('/')
    } catch (err) {
        res.send('delete requset Faild')
        console.log(err)
    }
}

// Reset user

const handleReset = async (req, res) => {
    try {
        const id = req.params.id;
        const resetData = {
            name: '',
            age: '',
            profession: '',
            image: ''
        }
        await myCollection.findByIdAndUpdate(id, resetData)
        res.redirect('/')
    } catch (err) {
        res.send('Reset Request Faild !!')
        console.log(err)
    }
}

module.exports = {
    handleProfile, adduser, handlePost,
    handleNevigate, handleUpdate, handleDelete, handleReset
}