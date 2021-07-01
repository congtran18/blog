const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/books', meController.storedBooks);
router.get('/trash/books', meController.trashBooks);

module.exports = router;
