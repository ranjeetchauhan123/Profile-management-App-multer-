const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3,'name minimum 3 charectre'],
        maxlength: [15,'name minimum 15 charectre'],
        required : [true, 'name is require']
    },
    profession : {
        type: String,
        required : [true, 'Profession is require']
    },
    age : {
        type: Number,
        required : [true, 'Age is require']
    },
    image:{
        type : String,
        required : [true, 'File is require']
    }
})
const myCollection = mongoose.model('userProfile',mySchema,'userProfile')

module.exports=myCollection;