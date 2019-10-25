var express = require("express");
var router = express.Router();
var locationController = require('../controllers/locationController.js');

router.get('/departments/', locationController.allDepartments);
router.post('/departments/create', locationController.createDepartment);
router.post('/departments/update', locationController.updateDepartment);
router.post('/departments/delete', locationController.deleteDepartment);

router.get('/provinces/', locationController.allProvinces);
router.post('/provinces/create', locationController.createProvince);
router.post('/provinces/update', locationController.updateProvince);
router.post('/provinces/delete', locationController.deleteProvince);

module.exports = router;