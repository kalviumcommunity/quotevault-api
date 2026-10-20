// services/authService.js
//
// ── TASK 2 (7 marks): register — hash the password with bcrypt ───────────────
// ── TASK 3 (7 marks): login — verify password + issue a JWT ──────────────────
//
// Use bcryptjs for hashing/compare and jsonwebtoken for the token.
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const AppError = require('../errors/AppError');

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

// register({ name, email, password })
//   1) validate name/email/password are non-empty strings
//        -> else throw new AppError(400, 'INVALID_INPUT', 'name, email, password are required')
//   2) normalize email:  email = email.trim().toLowerCase()
//   3) if userRepository.findByEmail(email) exists
//        -> throw new AppError(409, 'EMAIL_EXISTS', 'Email already registered')
//   4) hash the password:  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
//   5) create the user via userRepository.create({ name, email, passwordHash })
//   6) return publicUser(created)   // never return the password or hash
async function register(input = {}) {
  // TODO (Task 2): implement registration with bcrypt hashing.
}

// login({ email, password })
//   1) validate email/password are non-empty strings
//        -> else throw new AppError(400, 'INVALID_INPUT', 'email and password are required')
//   2) normalize email, look the user up with userRepository.findByEmail
//   3) compare:  const ok = user && (await bcrypt.compare(password, user.passwordHash));
//        if not ok -> throw new AppError(401, 'INVALID_CREDENTIALS', 'Invalid email or password')
//   4) sign a token:  const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '1h' });
//   5) return { token }
async function login(input = {}) {
  // TODO (Task 3): implement login with bcrypt.compare + jwt.sign.
}

module.exports = { register, login };
