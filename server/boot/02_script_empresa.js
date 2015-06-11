var dsConfig = require('../datasources.json');

module.exports = function(app) {

var Admin = app.models.Admin;
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;
var Empresa = app.models.Empresa;
var Categoria = app.models.Categoria;
var Servicio = app.models.Servicio;
var Reservacion = app.models.Reservacion;
var Proveedores = app.models.Proveedor;
console.log('--- EMPRESA BOOT SCRIPT ---');

Empresa.findOne({}, function (err, empresa) {
  if (err) throw err;
  if (empresa ) {
    console.log('Empresa ya cargada');
  }  else {
    console.log('Creando empresa inicial');
   Admin.create([
       {username: 'admin', email: 'admin@bitkat.com', password: 'admin', owner: true, estado: true },
       {username: 'ayudante', email: 'yesel78@gmail.com', password: 'ayudante', owner: false, estado: true},
     ], function(err, users) {
       if (err) throw err;
       console.log('Created admins:', users);
       //Setup roles
       Role.create({
         name: 'owner'
       }, function(err, role) {
         if (err) throw err;
         console.log('Created role:', role);
         //make admin_bitkat super_admin
         role.principals.create({
           principalType: RoleMapping.USER,
           principalId: users[0].id
         }, function(err, principal) {
           if (err) throw err;
           console.log('Created owner:', principal);
         });
       });
    //create the  admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;
      console.log('Created role:', role);
      //make admin_bitkat super_admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].id
      }, function(err, principal) {
        if (err) throw err;
        console.log('Created admin:', principal);
      });
    });
    //create the frist company, based on first user
    users[0].empresa.create({
          nombre: 'Salon de Herendira',
          descripcion: 'Tratamientos de belleza y mas',
          slogan: 'La belleza es primero',
          abierto: [ 1,2,3,4,5],
          horario: [ '9:00','19:00' ]
        }, function(err, company ) {
           if (err) throw err;
           console.log('Created initial company:', company);
            // Create providers - people who perform the services
            company.proveedores.create([
               {email: 'foo@bar.com', password: 'test', nombre: 'Foo Bar provider', descripcion: 'Todologa'},
               {email: 'bar@foo.com', password: 'test', nombre: 'Bar Foo provider', descripcion: 'Todologo'}
            ], function(err, providers) {
              if(err) throw err;
               console.log('Created initial providers', providers);
            // Create first category
             company.categorias.create({
             nombre: 'Categoria Inicial',
             descripcion: 'Categoria de Ejemplo'
             }, function (err, category) {
                if (err) throw err;
                console.log('Created initial category:', category);
                // Create first service
                category.servicios.create({
                  nombre: 'Primer Servicio',
                  descripcion: 'Nuevo super servicio!',
                  costo: 100,
                  duracion: 60,
                  status: true,
                  slots: 1  
                  }, function (err, service) {
                     if (err) throw err;
                     console.log('Created initial service:', service); 
                     service.empresa(company);
                     service.proveedores.add(providers[0]);
                     service.save();
                  });
             });
          });
     });
  });

 }
 });
};
