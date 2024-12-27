const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.get);

router.post('/', bookController.post);

module.exports = router;