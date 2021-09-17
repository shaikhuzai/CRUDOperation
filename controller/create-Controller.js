var createModel=require('../querybuilder/create-model');
var db=require('../database');
const bodyParser= require('body-parser');
const express = require('express');
//var req = require('request');
//const { request } = require('express');

module.exports={
    readData:function(req,res) {

        var sql='SELECT * FROM quotes';
        db.query(sql, function (err, data, fields) {
            //console.log('query:'+data)
            if (err) console.log(err);
            else res.render('index.ejs', {fetchData: data});
        });
    },
    createData(inputdata,res){
        console.log('in createData controller',inputdata);
        createModel.createData(inputdata,function(data){
            res.redirect('/route');
            console.log(data.affectedRows + " record created");
        });
    },
    deleteData:function(req,res){
        const deletename=req.params.name;
        console.log('in deleteData controller ',deletename);
        createModel.deleteData(deletename,function(data){
          res.redirect('/route');
          console.log(data.affectedRows + " record deleted");
        });
       
      },
      editData:function(req,res) {
        const editname=req.params.name;
        var sql='SELECT * FROM quotes where name = ?';
        db.query(sql,editname, function (err, data, fields) {
            if (err) console.log(err);
            else 
                res.render('index.ejs',{fetchData: data});
        });
      }

}
