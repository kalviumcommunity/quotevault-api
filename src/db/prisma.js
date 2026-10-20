// Shared Prisma client for the whole process. GIVEN — do not edit.
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
