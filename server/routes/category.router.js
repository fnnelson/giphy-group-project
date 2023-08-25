const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.put('/:id/:category', (req, res) => {
  const queryParams = [req.params.id, req.params.category];
  const sqlText = `UPDATE "favorites" SET "category_id"=$2 WHERE "id" = $1;`
  pool.query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
})

module.exports = router;
