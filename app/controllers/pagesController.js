var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
};
pagesController.test = function() {
  this.title = 'Junaid';
  this.render();
};

module.exports = pagesController;



