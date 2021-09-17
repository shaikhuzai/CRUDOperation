var express = require('express');
var createController=require('../controller/create-Controller');
var router = express();
const bodyParser= require('body-parser');
//router.get('/base', createController.base)
router.use(bodyParser.urlencoded({ extended: true }));
router.get('/', createController.readData);
router.post('/read', (req,res) =>{

    const inputdata={
        name :req.body.name,
        quote :req.body.quote
    };
    createController.createData(inputdata,res);
});
router.get('/delete/:name', createController.deleteData);
router.get('/edit/:name', createController.editData);
module.exports = router;