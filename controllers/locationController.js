let responseHandler = require('../helpers/responseHandler');
let LocationService = require('../services/LocationService');
let _locationService  = new LocationService(); 

exports.allDepartments = function(req, res) {
    _locationService.allDepartments((err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.allProvinces = function(req, res) {
    _locationService.allProvinces((err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.createDepartment = function(req, res) {
    let name = req.body.name;
    _locationService.createDepartment([name], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.createProvince = function(req, res) {
    let name = req.body.name;
    let depId = req.body.depid;
    _locationService.createProvince([depId, name], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
} 

exports.updateDepartment = function(req, res) {
    let name = req.body.name;
    let depId = req.body.depid;
    _locationService.updateDepartment([name, depId], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.updateProvince = function(req, res) {
    let name = req.body.name;
    let provId = req.body.provid;
    _locationService.updateProvince([name, provId], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.deleteDepartment = function(req, res) {
    let depId = req.body.depid;
    _locationService.deleteDepartment([depId], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}

exports.deleteProvince = function(req, res) {
    let provId = req.body.provid;
    _locationService.deleteProvince([provId], (err, result) => 
        res.json(responseHandler.SQLServiceHandler(err, result)));
}
