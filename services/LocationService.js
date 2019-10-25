let DAL = require('../data/DAL.js'); 

class LocationService {

    allDepartments(res) {
        DAL.executeQuery('SELECT * FROM Departamento', [], (err, result) => {
            if(err)
                throw err;
            let pending = result.length;
            result.forEach(el => {
                this.getProvinceByDep(el.id_dep, (e,r) => {
                    el.municipios = r;
                    if(--pending === 0)
                        res(err, result);
                })
            });
        });
    } 

    allProvinces(res) {
        DAL.executeQuery('SELECT * FROM Municipio', [], res);
    } 

    getProvinceByDep(dep, res) {
        DAL.executeQuery('SELECT * FROM Municipio WHERE id_dep = ?', [dep], res);
    }

    createDepartment(params, res) {
        DAL.executeQuery("INSERT INTO Departamento(nombre) VALUES(?)",
        params,
        res);
    }
    
    createProvince(params, res) {
        DAL.executeQuery("INSERT INTO Municipio(id_dep, nombre) VALUES(?,?)",
        params,
        res);
    }

    updateDepartment(params, res) {
        DAL.executeQuery("UPDATE Departamento SET nombre = ? WHERE id_dep = ?",
        params,
        res);
    }
    
    updateProvince(params, res) {
        DAL.executeQuery("UPDATE Municipio SET nombre = ? WHERE id_mun = ?",
        params,
        res);
    }

    deleteDepartment(params, res) {
        DAL.executeQuery("DELETE FROM Departamento WHERE id_dep = ?",
        params, 
        res);
    }

    deleteProvince(params, res) {
        DAL.executeQuery("DELETE FROM Municipio WHERE id_mun = ?",
        params,
        res);
    }


}

module.exports = LocationService;