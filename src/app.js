// App wiring + error handler. GIVEN — do not edit.
require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/auth', authRoutes);
app.use('/quotes', quoteRoutes);

// Central error handler: maps AppError -> its status, everything else -> 500.
// Never leaks internal details or password data.
app.use((err, _req, res, _next) => {
  if (err && err.status) {
    return res.status(err.status).json({ error: err.code, message: err.message });
  }
  console.error(err);
  return res.status(500).json({ error: 'INTERNAL', message: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`QuoteVault on http://localhost:${PORT}`));
}

module.exports = app;
