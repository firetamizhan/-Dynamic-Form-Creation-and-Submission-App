const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/create', formController.createForm);
router.get('/:id', formController.getForm);
router.post('/submit/:id', formController.submitResponse);

module.exports = router;
