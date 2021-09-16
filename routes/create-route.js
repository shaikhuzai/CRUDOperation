var express = require('express');
var createController=require('../controller/create-Controller');
var router = express.Router();
//router.get('/base', createController.base)
router.get('/', createController.readData);
router.post('/read', createController.createData);
module.exports = router;