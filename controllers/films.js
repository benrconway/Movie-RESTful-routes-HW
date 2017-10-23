//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var router = new express.Router();


//index
router.get("/", function(req,res) {
  res.json(films);
})

//show
router.get("/:id", function(req, res) {
res.json(films[req.params.id]);
})

//create
router.post("/", function(req, res) {
 var options = {
   title: req.body.title,
   actors: req.body.actors
 }

 var film = new Film(options);

 films.push(film);
 res.json(films)
})

//add new review to film
router.put("/:id/newreview/", function(req, res) {
  var reviewInfo = {
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  }
  var review = new Review(reviewInfo);
  films[req.params.id].addReview(review)
  res.json(films);
})

//update
router.put("/:id", function(req, res) {
  films[req.params.id] = req.body.update;
  res.json(films);
})

//delete
router.delete("/:id", function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
})



module.exports = router;
