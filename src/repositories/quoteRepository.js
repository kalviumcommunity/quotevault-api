// repositories/quoteRepository.js
//
// ── TASK 1 (6 marks): Prisma-backed quote storage ────────────────────────────
// Use the shared Prisma client to read/write the Quote table. Keep ALL Prisma
// calls here — services and controllers must never touch Prisma directly.
const prisma = require('../db/prisma');

// createQuote({ userId, text, author })
//   Insert one Quote row and return the created quote.
//   Hint: return prisma.quote.create({ data: { userId, text, author } });
async function createQuote({ userId, text, author }) {
  // TODO (Task 1a): create and return the quote.
}

// listQuotesByUser(userId)
//   Return that user's quotes, newest first.
//   Hint: return prisma.quote.findMany({
//            where: { userId },
//            orderBy: { createdAt: 'desc' },
//          });
async function listQuotesByUser(userId) {
  // TODO (Task 1b): find and return the user's quotes, newest first.
}

module.exports = { createQuote, listQuotesByUser };
