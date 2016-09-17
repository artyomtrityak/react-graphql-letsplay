module.exports.formatError = (error) => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack
});