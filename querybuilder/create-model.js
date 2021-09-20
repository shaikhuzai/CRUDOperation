var db=require('../database');

module.exports = {
    createData:function(inputData,callback){
        console.log('in createData model',inputData);
        var sql ='INSERT INTO quotes SET ?';
        db.query(sql,inputData,function(err,data){
            if(err)  {console.log(err);}
            else {
                console.log('exit createData model createData' ,data);
                return callback(data);
            }
        });
    },
    readData:function(callback) {
        var sql='SELECT * FROM quotes';
        db.query(sql, function (err, data) {
            console.log('query:'+data)
            if(err) {console.log(err);}
            else {
                console.log('exit readData model createData' ,data);
                return callback(data);
            }
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
    editData(editname,callback){
        console.log('in editData model',editname);
        var sql='SELECT * FROM quotes where name = ?';
        db.query(sql,editname, function (err, data, fields) {
            if (err) console.log(err);
            else 
                return callback(data);
        });
    },
    updateData(inputdata,updatename,callback){
        console.log('in updateData model',inputdata +' '+updatename);
        var sql = `UPDATE quotes SET ? WHERE name= ?`;
        db.query(sql,[inputdata,updatename],function(err,data){

            if(err) console.log(err);
            else {
                console.log('exit updateData model' ,data);
                return callback(data);
            }
        });
    }
}
