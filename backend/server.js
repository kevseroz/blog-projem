require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');



const cors = require('cors');
const errorHandler = require('./handlers/error')
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static(__dirname + '/public/uploads'));

app.use("/api/auth", authRoutes);
app.use("/api",  postRoutes );


app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(
    `Example app listening at http://localhost:${PORT}`,
  ));
