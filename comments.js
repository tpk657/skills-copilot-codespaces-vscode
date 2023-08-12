// create new web server
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const auth = require('../middleware/auth');

// GET request for creating a Comment. NOTE This must come before route for id (i.e. display comment).
router.get('/create', auth.ensureAuthenticated, commentsController.comment_create_get);

// POST request for creating Comment.
router.post('/create', auth.ensureAuthenticated, commentsController.comment_create_post);

// GET request to delete Comment.
router.get('/:id/delete', auth.ensureAuthenticated, commentsController.comment_delete_get);

// POST request to delete Comment.
router.post('/:id/delete', auth.ensureAuthenticated, commentsController.comment_delete_post);

// GET request to update Comment.
router.get('/:id/update', auth.ensureAuthenticated, commentsController.comment_update_get);

// POST request to update Comment.
router.post('/:id/update', auth.ensureAuthenticated, commentsController.comment_update_post);

// GET request for one Comment.
router.get('/:id', commentsController.comment_detail);

// GET request for list of all Comment items.
router.get('/', commentsController.comment_list);

module.exports = router;
