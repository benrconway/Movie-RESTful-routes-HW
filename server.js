var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var filmsRouter = require("./controllers/films");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

app.use("/films",filmsRouter)

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
