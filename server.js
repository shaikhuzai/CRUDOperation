const express = require('express');
// const bodyParser= require('body-parser')
const app = express();
// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://uzair:shaikh@organization.qtj8t.mongodb.net/test?retryWrites=true&w=majority";
// // var util= require('util');
// // var encoder = new util.TextEncoder('utf-8');
// //const mysql = require('mysql');
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "shaikh",
// //     password: 'knoldus123',
// //     database: "db_connect"
// //   });
// //   con.connect(function(err) {
// //     if (err) {
// //         console.log(err);
// //     }else{
// //         console.log('connected');
// //     }
//     app.get('/',(req,res) =>{
//         var sql='SELECT * FROM quotes';
//           con.query(sql, function (err, data, fields) {
//           if (err) console.log(err);
//           res.render('index.ejs', {fetchData:data})
//          });
//     });
//     app.post('/quotes', (req, res) => {

//         const inputdata={
//             name :req.body.name,
//             quote :req.body.quote
//         };
//         var sql ='INSERT INTO quotes SET ?';
//         con.query(sql,inputdata,function(err,data){
//             if(err) console.log(err);
//             else {
//                 console.log(data.affectedRows + " record created");
//             }
//         });
//         res.redirect('/');
//         console.log(req.body)
//       });

//   //});
 app.listen(3000, function() {
    console.log('listening on 3000')
   })

var createRouter = require('./routes/create-route');
//var readRouter = require('./routes/read-route');
//var updateRouter = require('./routes/update-route');
//var deleteRouter = require('./routes/delete-route');
app.use('/route', createRouter);
// app.use('/crud', updateRouter);
// app.use('/crud', deleteRouter);

  