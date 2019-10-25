let CitizenService = require('../services/CitizenService');
let _citizenService  = new CitizenService(); 

exports.create = function(req, res) {
    let dpi = req.body.dpi;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let birthdate = req.body.birthdate;
    let id_dep = req.body.idDep;
    let id_mun = req.body.idMun;
    let address = req.body.address;
    let deathdate = req.body.deathdate;
    let fingerprint = req.body.fingerprint;

    let data = [dpi, name, lastname, birthdate, id_dep, id_mun, address, deathdate, fingerprint];

    let error = false;
    data.forEach((v,i) => {
        error = error ? error : (v === '' || v == null);
    });

    if(error)
        return res.json({
            error: "All fields must be provided"
        });

    _citizenService.create(data,
        (err, result) => {
            if(err) 
                return res.json({
                    error: err
                });
            else
                return res.json({
                    "data": "ok",
                    "message": "Citizen created "
                });
        });
};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {

};