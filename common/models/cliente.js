var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Cliente) {
 //send verification email after registration
  Cliente.afterRemote('create', function(context, user) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@bitkat.com',
      subject: 'Gracias por registrarte.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    Cliente.verify(options, function(err, response) {
      if (err) {
        next(err);
        return;
      }

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Cuenta creada exitosamente',
        content: 'Por favor revisa tu correo y haz click en el enlace de verificacion'
          + ' antes de entrar.',
        redirectTo: '/',
        redirectToLinkText: 'Entrar'
      });
    });
  });

  //send password reset link when requested
  Cliente.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' + info.accessToken.id
      + '">here</a> to reset your password';

    Cliente.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });
};
