var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})