const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController');

router.get('/create', bookController.create);
router.post('/store', bookController.store);
router.get('/:id/edit', bookController.edit);
router.post('/handle-form-actions', bookController.handleFormActions);
router.put('/:id', bookController.update);
router.patch('/:id/restore', bookController.restore);
router.delete('/:id', bookController.delete);
router.delete('/:id/force', bookController.forceDelete);
router.get('/:slug', bookController.show);

module.exports = router;
