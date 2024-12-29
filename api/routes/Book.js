const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.get);

router.get('/:id', bookController.get);

router.post('/', bookController.post);

router.put('/:id', bookController.put);

module.exports = router;