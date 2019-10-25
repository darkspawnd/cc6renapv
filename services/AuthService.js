let DAL = require('../data/DAL.js');

class AuthService {
    authorize(username, password, result) {
        DAL.executeQuery(
            "SELECT * FROM Usuarios WHERE usuario = ? AND contrasena = ?", 
            [username, password],
            result
        );
    }
}

module.exports = AuthService;