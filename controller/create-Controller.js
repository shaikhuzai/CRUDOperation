var createModel=require('../querybuilder/create-model');
var db=require('../database');
const bodyParser= require('body-parser');
const express = require('express');
//var req = require('request');
//const { request } = require('express');

module.exports={
    readData:(req,res) => {

        console.log('in readData controller');
        createModel.readData(function (data) {
            var editValue;
            res.render('index.ejs', {data :{fetchData: data,editData:''}});
        });
    },
    createData(inputdata,res) {
        console.log('in createData controller',inputdata);
        createModel.createData(inputdata,function(data){
            res.redirect('/route');
            console.log(data.affectedRows + " record created");
        });
    },
    deleteData: (req,res) => {
        const deletename=req.params.name;
        console.log('in deleteData controller ',deletename);
        createModel.deleteData(deletename,function(data){
          res.redirect('/route');
          console.log(data.affectedRows + " record deleted");
        });
       
      },
      editData: (req,res) =>{
        const editname=req.params.name;
        var fetchValue,editValue;
        createModel.readData(function (data){
            fetchValue=data;
            console.log('fetchData is ',fetchValue);
            createModel.editData(editname,function (data){
                editValue=data;
                console.log('editdata  is ',editValue);
                console.log('fetchData2 is ',fetchValue);

                res.render('index.ejs',{data :{fetchData: fetchValue,editData:editValue}});
            });

        });
      },
      updateData(inputdata,res,req){

        console.log('in update controller',inputdata);
        const updatename=req.params.name;
        createModel.updateData(inputdata,updatename,function(data){
            res.redirect('/route');
            console.log(data.affectedRows + " record updated");
        });
      }
}
