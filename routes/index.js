var express = require('express');
var router = express.Router();
var yelp = require("yelp").createClient({
  consumer_key: "ydWDPmhPUzDjrjFbZ6ht2w", 
  consumer_secret: "37Mn2__mnQarOUoVz9adcnqK_Tc",
  token: "bveQILRlZXUzN2M-YhtqVZxoStISOK2u",
  token_secret: "fydJjChiEkzCUeIfy88Oljb63q4"
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yelp', function(req, res, next) {
  // console.log(req.params.location);
  // console.log(req);
  var loc = req.query.location;
  console.log(loc);
  var results = yelp.search({term: "food", location: loc}, function(error, data) {
	  console.log(error);
    console.log(req.params, req.body, req.params);

    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
	  // console.log(data);
	  // res.render('yelp', { title: 'Food in Montreal', name: "owner", yelp: data.businesses.length});
  });
  // console.log(results);
  // console.log(results);
  // var owner = "jenny";
  // res.render('yelp', { title: 'Food in Montreal', name: owner, yelp: "yelp ok"});

  // res.send(results);
});

module.exports = router;
