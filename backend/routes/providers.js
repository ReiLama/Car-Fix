const express = require('express');
const router = express.Router();
const LS = require('../helpers/localStorage');

router.get('/api', (req, res) => {
    res.json({
      "status": "success",
      "data": LS.all('providers')
    })
});

router.post('/api', (req, res) => {
    const created_provider = LS.create('providers', req.body);
    res.json({
      "status": "success",
      "data": created_provider
    })
  });

module.exports = router;