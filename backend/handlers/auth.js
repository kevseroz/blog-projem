const db = require("../models");
const jwt = require("jsonwebtoken");


exports.signin = async function(req, res, next) {
   //finding a user
   try {
    let user = await db.User.findOne({
        email: req.body.email
    });
    let {id, username} = user;
    let isMatch = await user.comparePassword(req.body.password);
    if(isMatch) {
        //let token = getToken(user);
        let token = jwt.sign(
            {
              id,
              username
            },
            process.env.SECRET_KEY
          );
        
        return res.status(200).json({
            id,
            username,
            token
        });
    } else {
        return next({
            status: 400,
            message: "Geçersiz email/şifre."
        })
    }
} catch (e) {
    return next({
        status: 400,
        message: "Geçersiz email/şifre."
    })
}
 
};




//buraya middleware ekleyip, eğer login yapılmışsa bu route gösterilecek
//yapılmamışsa tekrar login route u gösterilecek
exports.signup = async function(req, res, next) {
    try {
        //create a user
        let user = await db.User.create(req.body);
        let { id, username, email} = user;
        let token = jwt.sign(
            {
                id,
                username,
                email,
            },
                    //create a token
            process.env.SECRET_KEY
        );
            return res.status(200).json({
                id,
                username,
                email,
                token
            });
    } catch(err){
        //if a validation fails
        if(err.code === 11000) {
            err.message = "Üzgünüm, kullanıcı adı ve/veya email daha önce kayıt olmuş"
        }
        return next({
            status: 400,
            message: err.message
        });

    }
}