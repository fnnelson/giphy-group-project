const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const queryParam = [req.body];
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
