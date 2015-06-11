var dsConfig = require('../datasources.json');

module.exports = function(app) {
var Admin = app.models.Admin;
var Cliente = app.models.Cliente;
  
Admin.login({ email: 'rigreyes@gmail.com', password: 'zatanaz'}, function(err, accessToken) {
  console.log('admin:', accessToken);
});

Admin.login({ email: 'admin@bitkat.com', password: 'admin'}, function(err, accessToken) {
  console.log('owner:',  accessToken);
});

Cliente.login({ email: 'cliente1@bitkat.com', password: 'cliente'}, function(err, accessToken) {
  console.log('cliente:',  accessToken);
});

};
