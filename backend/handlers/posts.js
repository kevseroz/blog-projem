const db = require('../models');




exports.getPost = async function(req, res, next) {
    try{
        const posts = await db.Post.find({});
        res.send(posts);
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
};

exports.showPost = async function(req, res, next) {
    const post = await db.Post.findOne({_id: req.params.id});
    if(post){
        res.send(post);
    } else {
        res.status(404).send({message: "Ürün bulunamadı."})
    }
};

exports.createPost =  async function(req, res, next) {
    try {
        let post = new db.Post({
            name: req.body.name,
            image: req.file.filename,
            description: req.body.description
        });
        const newPost = await post.save();
        if(newPost) {
           return res.status(201).send({
                message: 'Yeni Ürün Oluşturuldu',
                data: newPost
            })
        }            
    } catch (err){
        return res.status(500).json(err)
        console.log(err) 
        //next(err);
    }
};

exports.editPost = async function(req, res, next) {
    const postId = req.params.id;
    const post =await db.Post.findById(postId);
    if(post){
        post.name = req.body.name;
        post.image = req.file.image;
        post.description = req.body.description;
        const updatedPost = await post.save();
        if(updatedPost) {
            return res.status(200).send({ 
                message: 'Ürün güncellendi.',
                //buradan bilgi frontende gönderiliyor
                data: updatedPost            
            })
        }
    }
    return res.status(500).send({ message: 'Ürün güncellenirken bir hata oluştu'})
};

exports.deletePost = async function(req, res, next){
    const deletedPost = await db.Post.findById(req.params.id);
    if(deletedPost){
        await deletedPost.remove();
        res.send({ message: "Ürün başarıyla silindi."});
    } else {
        res.send("Silme işlemi yapılırken bir hata oluştu.")
    }
};

