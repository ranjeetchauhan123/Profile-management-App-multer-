const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/profile')
        console.log('mongoDB connect successfull !!')
    } catch (err) {
        console.log('connect Faild')
        console.log(err)
    }

}

module.exports = connectDB;