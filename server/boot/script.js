module.exports = function (server) {
    const User = server.loopback.getModel('User');
    User.create({username: 'fernando', email: 'fernandoeze9999@gmail.com', password: '123456ñ'});
}