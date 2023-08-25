const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log("get made it to server side!")
  const queryText = 'SELECT * FROM favorites';
  pool.query(queryText)
    .then((result) => {res.send(result.rows); 
    })
    .catch((error) => {
      console.log('Error completing favorites query,', error)
      res.sendStatus(500);
    })
  
});

// add a new favorite
router.post('/', (req, res) => {
  const queryParam = [req.body.url];
  console.log('gif post:', queryParam)
  const sqlText = `INSERT INTO "favorites" ("url") 
  VALUES ($1)`
  pool.query(sqlText, queryParam)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with POST:", error)
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
