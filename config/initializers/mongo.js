/**
 * Created by M.JUNAID on 2015-03-28.
 */

module.exports = function(){
    this.mongoose = require('mongoose');
    this.mongoose.connect(this.set('db-uri'));
}