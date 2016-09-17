module.exports = {
  secret: process.env.SECRET || 'secret',
  isDevMode: process.env.NODE_ENV !== 'production'
};