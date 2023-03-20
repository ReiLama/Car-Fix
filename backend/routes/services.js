const express = require('express');
const router = express.Router();
const LS = require('../helpers/localStorage');

router.get('/api', (req, res) => {
    res.json({
      "status": "success",
      "data": LS.all('services')
    })
});

router.post('/api', (req, res) => {
    const created_service = LS.create('services', req.body);
    res.json({
      "status": "success",
      "data": created_service
    })
  });

module.exports = router;