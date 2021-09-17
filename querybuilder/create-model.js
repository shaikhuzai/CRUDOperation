var db=require('../database');

module.exports = {
    createData:function(inputData,callback){
        console.log('in createData model',inputData);
        var sql ='INSERT INTO quotes SET ?';
        db.query(sql,inputData,function(err,data){
            if(err)  console.log(err);
            else 
                return callback(data);
            console.log('exit createData model createData' ,data);
        });
    },
    readData:function() {
        var sql='SELECT * FROM quotes';
        db.query(sql, function (err, data, fields) {
            console.log('query:'+data)
            if (err) console.log(err);
            return data;
        });
    },
    deleteData(deletename,callback){
        console.log('in deleteData model',deletename);
        var sql = 'DELETE FROM quotes WHERE name = ?';
        db.query(sql,deletename, function (err, data) {
            if (err) console.log(err);
            else 
                return callback(data);
          });   
    },
}
