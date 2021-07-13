const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true
    },
    image: {
         type: String, 
        
         
        },
    description: { 
        type: String, 
        required: true
    },
    

}
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post