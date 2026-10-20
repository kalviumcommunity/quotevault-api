// Quote business logic. GIVEN — do not edit. Delegates to the repository.
const quoteRepository = require('../repositories/quoteRepository');
const AppError = require('../errors/AppError');

async function addQuote(userId, { text, author }) {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new AppError(400, 'INVALID_INPUT', 'text is required');
  }
  if (typeof author !== 'string' || author.trim() === '') {
    throw new AppError(400, 'INVALID_INPUT', 'author is required');
  }
  return quoteRepository.createQuote({ userId, text: text.trim(), author: author.trim() });
}

async function listQuotes(userId) {
  return quoteRepository.listQuotesByUser(userId);
}

module.exports = { addQuote, listQuotes };
