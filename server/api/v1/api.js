const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '../../data/strings.json');

/** GET /api/v1/strings */
router.get('/strings', (req, res) => {
  fs.readFile(filePath)
    .then(data => {
      const strings = JSON.parse(data);
      res.status(200).json(strings);
    })
    .catch(err => res.status(500).send(`error reading the file: ${err}`));
});

/** POST /api/v1/strings */
router.post('/strings', (req, res) => {
  const strObj = req.body;
  fs.readFile(filePath)
    .then(data => {
      const strings = JSON.parse(data);
      const newArr = [strObj, ...strings];
      return newArr;
    })
    .then(arr => {
      const data = JSON.stringify(arr, null, 2);
      return fs.writeFile(filePath, data);
    })
    .then(() => res.status(200).end())
    .catch(err => res.status(500).send(`error saving file: ${err}`));
});

module.exports = router;
