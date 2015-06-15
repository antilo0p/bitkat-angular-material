var dsConfig = require('../datasources.json');

module.exports = function(app, cb) {

var Cliente = app.models.Cliente;
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;
var Empresa = app.models.Empresa;
var Categoria = app.models.Categoria;
var Servicio = app.models.Servicio;
var Reservacion = app.models.Reservacion;
var Proveedores = app.models.Proveedor;

Reservacion.findOne({}, function(err, reservacion) {
  if (err) return cb(err);
if (reservacion) {
  console.log('Clientes y reservaciones iniciales ya existen!');
  process.nextTick(cb);
} else {
  console.log('Creado clientes inciales');
  Cliente.create([
      {nombre: 'CLiente Ejemplo', email: 'cliente1@bitkat.com', password: 'cliente', telefono: '33675990' },
      {nombre: 'Nuevo Cliente', email: 'cliente2@bitkat.com', password: 'cliente', telefono: '3316061544'},
    ], function(err, users) {
     if (err) return cb(err);
     console.log('Created clients:', users);

     Servicio.findOne({}
      ,function (err, servicio) {
        if (err) return cb(err);
        console.log('servicio adquirido:', servicio);
        var d = new Date();
        var start = d.setHours(d.getHours() + 2); 
        fecha_inicio = new Date(start);
        if ( servicio.duracion == 60 ) {
        var end = fecha_inicio.setHours(fecha_inicio.getHours() +1);
        fecha_fin = new Date(end);
        }
        var proveedores = servicio.proveedores({});
        console.log('Reservacion inicio', start);
        console.log('Reservacion fin', end);
        console.log('Duracion Servicio', servicio.duracion);
        console.log('Proveedores de servicio', proveedores);
        users[0].reservaciones.create({
            nota: 'Quiero estrenar un nuevo look!',
            inicio: fecha_inicio,
            fin: fecha_fin,
            status: 0,
            fecha_creacion: d,
            slot: 1
        }, function(err, reservacion) {
            if (err) return cb(err);
            console.log('Reservacion creada', reservacion);
            reservacion.servicio(servicio);
            reservacion.proveedor(proveedores);
            reservacion.save();
            process.nextTick(cb);
        });

    });

  });
}
});
};
