// Quotes HTTP layer. GIVEN — do not edit. Reads req.userId set by requireAuth.
const quoteService = require('../services/quoteService');

async function createQuote(req, res, next) {
  try {
    const quote = await quoteService.addQuote(req.userId, req.body || {});
    res.status(201).json(quote);
  } catch (err) {
    next(err);
  }
}

async function listQuotes(req, res, next) {
  try {
    const quotes = await quoteService.listQuotes(req.userId);
    res.status(200).json(quotes);
  } catch (err) {
    next(err);
  }
}

module.exports = { createQuote, listQuotes };
