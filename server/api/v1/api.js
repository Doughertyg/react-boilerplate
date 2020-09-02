const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

/** GET /api/v1/strings */   
router.get('/strings', (req, res) => {
  fs.readFile('../../data/strings.json')
    .then(data => {
      let strings = JSON.parse(data);
      res.status(200).json(strings);
    })
    .catch(err => res.status(500).send('error reading the file!'));
})

/** POST /api/v1/strings */
router.post('/strings', (req, res) => {
  const str = req.body.string;
  fs.readFile('../../data/strings.json')
    .then(data => {
      let strings = JSON.parse(data);
      let newArr = [
        ...strings,
        { string: str, key: str.trim().split(' ').join('') }
      ];

      return newArr;
    })
    .then(arr => {
      let data = JSON.stringify(arr, null, 2);
      return fs.writeFile('../../data/strings.json', data)
    })
    .then(() => res.status(200).end())
    .catch(err => res.status(500).send('error saving file!'));
})

module.exports = router;
