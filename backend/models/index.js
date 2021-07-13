const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/ozkanmakina1", {
    autoIndex: false,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports.User = require("./usermodel");
module.exports.Post = require("./postmodel");
