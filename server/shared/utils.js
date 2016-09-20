const crypto = require('crypto');


module.exports.genRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length/2))
      .toString('hex')
      .slice(0, length);
};


module.exports.saltPassword = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('hex');
};
