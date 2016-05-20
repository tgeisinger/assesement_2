var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';



router.post('/', function(req, res) {
    var values = req.body;

    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }

        client.query('INSERT INTO prime_zoo (animal_type,quantity) ' +
            'VALUES ($1, $2)', [values.animalinput, randomNumber(1, 100)],
            function(err, result) {
                done();

                if (err) {
                    res.sendStatus(500);
                    return;
                }

                res.sendStatus(201);
            });
    });
});




function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}




router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM prime_zoo', function (err, result) {
      done();

      console.log(result.rows);

      res.send(result.rows);
    });
  });
});
module.exports = router;




module.exports = router;
