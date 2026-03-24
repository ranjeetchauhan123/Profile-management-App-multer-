const multer = require('multer');
const path = require('path')

const filePath = path.resolve('public')

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null , `public/upload`)
    },
    filename: function (req,file,cb){
        cb(null , file.originalname)
    }
})

const upload = multer({storage})

module.exports=upload;