let DAL = require('../data/DAL.js');

class CitizenService {
    create(citizenFields, result) {
        DAL.executeQuery(
            "INSERT INTO Ciudadanos(dpi, nombre, apellido, fechaNac, id_dep, id_mun, direccion, fechaDef, huella_code)" +
            "VALUES(?,?,?,?,?,?,?,?,?)",
            citizenFields,
            result
        );
    }

    update(citizenFields, result) {
        DAL.executeQuery(
            "UPDATE Ciudadanos SET "
        );
    }
}

module.exports = CitizenService;