# QuoteVault — starter

A tiny API: register, log in, then save and list your own favourite quotes.
Everything is wired for you. You finish **three pieces** that hold the database
+ auth logic.

## Setup

```bash
npm install
cp .env.example .env                 # set DATABASE_URL to your PostgreSQL
npx prisma migrate dev --name init   # create the tables
npm start                            # http://localhost:3000
```

## What you edit (look for `// TODO`)

1. `src/repositories/quoteRepository.js` — Task 1 (Prisma create + list)
2. `src/services/authService.js` — Task 2 (register + bcrypt) and Task 3 (login + JWT)

Do **not** edit any file marked `GIVEN`.

## Quick test

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@demo.com","password":"secret12"}'

curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" \
  -d '{"email":"ada@demo.com","password":"secret12"}'

curl -X POST http://localhost:3000/quotes -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" -d '{"text":"Stay hungry, stay foolish.","author":"Steve Jobs"}'

curl http://localhost:3000/quotes -H "Authorization: Bearer <TOKEN>"
```

## Submit

Delete `node_modules`, add a `RESULT.txt`, and ZIP the project.
