// GIVEN — do not edit. Every quote route is protected by requireAuth.
const express = require('express');
const quoteController = require('../controllers/quoteController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);
router.post('/', quoteController.createQuote);
router.get('/', quoteController.listQuotes);

module.exports = router;
