// Small typed error so controllers can map failures to HTTP status codes.
// GIVEN — do not edit.
class AppError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

module.exports = AppError;
