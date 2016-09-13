const passport = require('passport'),
  jwt = require('jsonwebtoken');

require('./local.strategy');


module.exports.onSuccessfullAuth = (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180, // 180 days
        token = jwt.sign(req.user, 'my secret', { expiresIn });
  
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.json(req.user);
};