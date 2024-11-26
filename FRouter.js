// routes.js
const express = require('express');
const router = express.Router();
const PModel = require('./FModel');

// Route to add a new example
router.post('/add', async (req, res) => {
  try {
    const { name, description,price } = req.body;
    const example = new PModel({ name, description ,price});
    const savedExample = await example.save();
    res.json(savedExample);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
