const multer = require('multer');
const path = require("path")


const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, __dirname + '/public/uploads/');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb){
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
} else {
    cb(new Error('Try to upload .jpeg or .png file.'), false);
}
  //  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
  //      return cb(new Error('Sadece resim dosyalarına izin verilir!'), false);
   // }
   // cb(null, true)
}

const upload = multer({ storage: storage, limits:{fileSize:10000000000}, fileFilter: imageFilter})


module.exports = {
    upload
}