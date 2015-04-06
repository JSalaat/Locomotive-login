var util = require('util');

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }
  //this.datastore(require('mongoose'));
  this.set('db-uri', ' mongodb://junaid:abc123++@ds029630.mongolab.com:29630/sample');
  //this.set('db-uri', 'mongodb://localhost/sample');
};
