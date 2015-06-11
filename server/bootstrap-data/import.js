/**
 * Run `node import.js` to import the sample data into the db.
 */

var async = require('async');

// var cars = require('./cars.json');
var admins = require('./admins.json');
var empresas = require('./empresas.json');
var categorias = require('./categorias.json');
var servicios = require('./servicios.json');
var proveedores = require('./proveedores.json');
var clientes = require('./clientes.json');
var reservaciones = require('./reservaciones.json');

module.exports = function(app, cb) {
  var Admin = app.models.Admin;
  var Empresa = app.models.Empresa;
  var Categoria = app.models.Categoria;
  var Servicio = app.models.Servicio;
  var Proveedor = app.models.Proveedor;
  var Cliente = app.models.Cliente;
  var Reservacion = app.models.Reservacion;

  var db = app.dataSources.db;

  var ids = {
  };

  function importData(Model, data, cb) {
    // console.log('Importing data for ' + Model.modelName);
    Model.destroyAll(function(err) {
      if (err) {
        cb(err);
        return;
      }
      async.each(data, function(d, callback) {
        if (ids[Model.modelName] === undefined) {
          // The Oracle data has Location with ids over 80
          // and the index.html depends on location 88 being present
          ids[Model.modelName] = 80;
        }
        d.id = ids[Model.modelName]++;
        Model.create(d, callback);
      }, cb);
    });
  }

  async.series([
    function(cb) {
      db.autoupdate(cb);
    },

    importData.bind(null, Reservacion, reservacion),
    importData.bind(null, Cliente, clientes),
    importData.bind(null, Proveedor, proveedores),
    importData.bind(null, Servicio, servicios),
    importData.bind(null, Categoria , categorias),
    importData.bind(null, Empresa, empresas),
    importData.bind(null, Admin, admins)

  ], function(err/*, results*/) {
    cb(err);
  });
};

if (require.main === module) {
  // Run the import
  module.exports(require('../server'), function(err) {
    if (err) {
      console.error('Cannot import sample data - ', err);
    } else {
      console.log('Sample data was imported.');
    }
  });
}
