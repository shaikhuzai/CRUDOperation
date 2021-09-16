var db=require('../database');

module.exports = {
    createData:function(inputData,callback){
        var sql ='INSERT INTO quotes SET ?';
        db.query(sql,inputData,function(err,data){
            if(err)  console.log(err);
            else {
                return callback(data);
            }
        });
    },
    readData:function() {
        var sql='SELECT * FROM quotes';
        db.query(sql, function (err, data, fields) {
            console.log('query:'+data)
            if (err) console.log(err);
            return data;
        });
    }
}
