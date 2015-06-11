module.exports = function(Empresa) {

Empresa.status = function(companyId, fecha, cb) {
      var target = null;
    Empresa.findById(companyId, function (err, instance) {
         if(err) throw err;
           if (fecha) {
              var d = new Date(fecha);
              target = true;
           }else {
              var d = new Date();
              target = false;
           }
        var n = d.getDay();
        var h = d.getHours();
        var m = d.getMinutes();
        var dia_status = '';
        console.log('Target is: ', n);
       // console.log('search of abierto is:', instance.abierto.indexOf( n ) );
       //  console.log('in default_days: ', instance.abierto.indexOf(n) >= 0 );
        if (  instance.abierto.indexOf(n) >= 0 ) {
          if (target) {
              var s = d.toDateString();
                  response = 'Open on ' + s;
                  dia_status = 'ABIERTO';
              } else {
                var s = d.toDateString();
                var cur_time = s + ' ' + h +':'+ m;
                if (  Date.parse(cur_time) >= Date.parse(s +' '+ instance.horario[1]) ) {
                    response = ' We are Open today, but not available at this time of day';
                    dia_status = 'ABIERTO';
                    } else {
                    response = ' We are Open today! and available at this time!';
                    dia_status = 'ABIERTO';
                  }
              }
        } else {
            if ( target) {
               var s = d.toDateString();
               response = 'We are closed on ' + s;
               dia_status = 'CERRADO';
              } else {
                response = 'We are closed!';
               dia_status = 'CERRADO';
              }
        }
        status = {  mensaje: response, 
                         estado: dia_status };
        // console.log('status', status);
        cb(null, status);
    //  console.log(response)
  });
}

Empresa.remoteMethod (
      'status',
      {
      http: { path: '/:id/status', verb: 'get'},
      accepts: [ {arg: 'id', type: 'string', required: true },  {arg: 'fecha', type: 'date', description: 'Date to check'} ],
      description:  'Obten disponibilida de la empresa' ,
      returns: {arg: 'status', type: 'string'}
      }
);

};
