var createModel=require('../querybuilder/create-model');
var db=require('../database');
const bodyParser= require('body-parser');
var req = require('request');

module.exports={
    readData:function(req,res) {

        var sql='SELECT * FROM quotes';
        db.query(sql, function (err, data, fields) {
            console.log('query:'+data)
            if (err) console.log(err);
            else res.render('index.ejs', {fetchData: data});
        });

        // 
        // var data = createModel.readData();
        //res.render('index.ejs', {fetchData: data});
        // console.log('cont', data);
    },
    createData:function(req,res){
        console.log("req.body",req.bodyParser);
        const inputdata={
            name :req.bodyParser.name,
            quote :req.bodyParser.quote
        };
        var sql ='INSERT INTO quotes SET ?';
        con.query(sql,inputdata,function(err,data){
        if(err) console.log(err);
        else {
                console.log(data.affectedRows + " record created");
            }
        });
        res.redirect('/');
      
        // createModel.createData(inputData,function(data){
        //     res.redirect('/');
        //     console.log(data.affectedRows + " record created");
        // });
    }

}
