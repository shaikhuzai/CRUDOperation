var express = require('express');
var createController=require('../controller/create-Controller');
var router = express.Router();
//router.get('/base', createController.base)
router.get('/read', createController.readData);
router.post('/create', createController.createData);
module.exports = router;