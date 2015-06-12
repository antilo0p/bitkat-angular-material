var app = require('../../server/server');
var later = require('later');
var dsConfig = app.datasources;

module.exports = function(Servicio) {

  Servicio.disponibilidad = function(id, fecha, cb){
    var target = false;
    var is_target = false;
    var is_closed = false;
  if (fecha) {
        target = fecha;   
        is_target = true;
    } else {
       var date = new Date();
       target = date;
    }
   var ldate = new Date(target);
   var fin = new Date(ldate.setDate(ldate.getDate() + 1));
   var Reservacion = app.models.Reservacion;
   var Empresa = app.models.Empresa;

   Servicio.findById(id, { include: ['categoria','empresa', 'proveedores' ] }
         ,function (err, servicio) {
            if(err) throw err;
            Empresa.status(servicio.empresa().id, target
                      ,function(err, result){
                         if(err) throw err;
                           console.log('Empresa status estado:', result);
                          if (result.estado == 'CERRADO'){
                                 close_result = [
                                          {
                                           'estado': result.estado,
                                            'response': result.mensaje,
                                            'servicio': servicio,
                                           'fecha': new Date(),
                                            'mostrando': target 
                                            },
                                              { 'slots': []  }
                                    ];
                                  is_closed = true;
                                 console.log('is_closed:', is_closed);
                                 cb(null, close_result);
                            } else {
                          Reservacion.find({
                                where: {and: [ { inicio: { gte: target } }, { inicio: { lt: fin }},  { servicioId: id } ] },
                                include: ['cliente', 'servicio', 'proveedor']
                           },function(err, reservaciones) {
                             if (err) throw err;
                                 var excepciones = [];
                                if(reservaciones.length > 0  ) {
                                  reservaciones.forEach(function(reserva) {
                                       excepciones.push(reserva.inicio);
                                  });
                                 var excepcion_estado = 'DISPONIBILIDAD MEDIA';
                              } 
                              // Calculos basados en el horario de la empresa
                              // TODO: agregar minutos al calculo, solo hora por ahora
                              var horario_i= servicio.empresa().horario[0].split(":");
                              var horario_f=servicio.empresa().horario[1].split(":");
                              var hr_inicio = horario_i[0];
                              var hr_fin = horario_f[0];
                              var current = new Date();
                              var current_hour = current.getHours();
                              if ( is_target ) {
                                var slots_hr= parseInt(hr_fin) - parseInt(hr_inicio)
                                var slots_avail = (slots_hr * 60) / parseInt(servicio.duracion);
                              } else {
                                var slots_hr= parseInt(hr_fin) - parseInt(current_hour)
                                var slots_avail = (slots_hr * 60) / parseInt(servicio.duracion);
                               }
                              // TODO: invalidar pedidos de fechas anteriores al dia de hoy - ya lo realiza empresa.status()
                              if ( !is_target && current_hour >= parseInt(hr_inicio) && current_hour <= parseInt(hr_fin) ) {
                              // horario actual  valido, mostrar reservaciones del dia siguiente
                                if (slots_hr <= 1 ){
                                    var f_inicio = fin.setHours(parseInt(hr_inicio),0,0);
                                    var f_fin = fin.setHours(parseInt(hr_fin),0,0);
                                    var slot_start= new Date(f_inicio);
                                    var slot_end= new Date(f_fin);
                                    var estado = 'POR CERRAR';
                                    slots_hr= parseInt(hr_fin) - parseInt(hr_inicio)
                                    slots_avail = (slots_hr * 60) / parseInt(servicio.duracion);
                                } else {
                                    //TODO: Validate when target day
                                    var f_inicio = new Date();
                                    var f_fin = current.setHours(parseInt(hr_fin),0,0);
                                    var slot_start= new Date(f_inicio.setHours(f_inicio.getHours()+1,0,0));
                                    var slot_end= new Date(f_fin);
                                    var estado = 'DISPONIBLE';
                                }
                             } else if ( !is_target && current_hour >= parseInt(hr_fin)) {
                               // despues de cerrado muestra el dia siguiente
                               var f_inicio = fin.setHours(parseInt(hr_inicio),0,0);
                               var f_fin = fin.setHours(parseInt(hr_fin),0,0);
                               var slot_start= new Date(f_inicio);
                               var slot_end= new Date(f_fin);
                               var estado = 'CERRADOS MOSTRANDO DIA SIGUIENTE';
                             } else {
                               // el resto
                               var f_inicio = target.setHours(parseInt(hr_inicio),0,0);
                               var f_fin = target.setHours(parseInt(hr_fin)+1,0,0);
                               var slot_start= new Date(f_inicio);
                               var slot_end= new Date(f_fin);
                               var estado = 'MOSTRANDO OTRO DIA';
                             }
                             console.log('fecha:' + target + ' horarios empresa:' + hr_inicio + '-' + hr_fin);
                             console.log('SLOTS:' + slot_start+ '-' + slot_end);
                             if (excepciones.length > 0 ) {
                                 estado = excepcion_estado;
                             }
                        
                             // if it is an hour
                             if (parseInt(servicio.duracion) == 60) {
                                var text = 'every 1 hour';
                                var sched = later.parse.text(text);
                                console.log('schedule text:' + text);
                                // if less than hour
                             } else if (parseInt(servicio.duracion) < 60){
                                var text = 'every '+ servicio.duracion +' mins';
                                console.log('schedule text:' + text);
                                var sched = later.parse.recur().every(parseInt(servicio.duracion)).minute();
                            }  else {
                                var text = 'every '+ servicio.duracion +' mins';
                                var sched = later.parse.recur().every(parseInt(servicio.duracion)).minute();
                            }

                            console.log('excepciones generadas:', excepciones);
                            var free_slots = later.schedule(sched).next(slots_avail, slot_start, slot_end);
                            // console.log('Calculated slots:', free_slots);
                            var remove_slots = free_slots;
                            var remove_reservations= [];
                            var result_slots = [];
                            excepciones.forEach(function(ex) {
                                i = 0;
                                for (; i < remove_slots.length; i++){
                                       if ( Date.parse(ex) ===  Date.parse(remove_slots[i]) ) {
                                          remove_reservations.push(i);
                                        }
                                    }
                            });
                            len = remove_slots.length;
                            for(var s= 0; s < len ; s++) {
                                    if ( remove_reservations.indexOf(s) > -1 ) {
                                         console.log('found match', s);
                                     } else {
                                         result_slots.push(remove_slots[s]);
                                     }
                            }
                            var result = [ 
                            { 
                             'estado': estado,
                             'servicio': servicio,
                             'fecha': current,
                             'mostrando': slot_start
                            },
                            { 'slots': result_slots}
                            ];
                         cb(null, result);
                  
                 });
             }
         });
    });
  }

  Servicio.remoteMethod(
    'disponibilidad',
    {
      accepts: [ { arg:'id', type: 'string', required: true, descripcion: 'Persisted Model id' }, {arg: 'fecha', type: 'date', description: 'Date to check'}],
      returns: [ {arg: 'disponibilidad', type: 'string'}, { arg: 'slots', type: 'array'}],
      http: { path: '/:id/disponibilidad', verb: 'get' },
      description:  'Return availability of model instance',
      notes: 'Calculate availability based on bookings and model instance slots',
    }
  );
};
