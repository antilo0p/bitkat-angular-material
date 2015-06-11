var dsConfig = require('../datasources.json');

module.exports = function(app) {
var Admin = app.models.Admin;
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;

var admin_created = 0;
console.log(' --- SUPER ADMIN SCRIPT ---');

Admin.find({
  where: { 'email': 'rigreyes@gmail.com' }
}, function(err, user) {
  if (err) throw err;
  console.log('response for superadmin on DB', user);
  if ( user.length < 1  ) {
     console.log('super admin email not found', user);
     admin_created=2;
  } else {
    admin_created=1;
  } 
 //     console.log('superadmin email', user[0].email);
     if ( admin_created > 1  ) {
      console.log('admin will be created', admin_created);
      Admin.create([
          {email: 'rigreyes@gmail.com', password: 'zatanaz'}
        ], function(err, users) {
          if (err) throw err;
          console.log('Created admin:', users);
          //create the super- admin role
          Role.create({
          name: 'superadmin'
          }, function(err, role) {
             if (err) throw err;
             console.log('Created superdamin role:', role);
             //make admin_bitkat super_admin
             role.principals.create({
                   principalType: RoleMapping.USER,
                   principalId: users[0].id
               }, function(err, principal) {
               if (err) throw err;
               console.log('Created principal:', principal);
              });
          });
      });
  } else {
      console.log('no admin work todo');
  }
});
};
