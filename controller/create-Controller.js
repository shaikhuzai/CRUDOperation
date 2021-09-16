var createModel=require('../querybuilder/create-model');
var db=require('../database');
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
        const inputData={
            name :req.body.name,
            quote :req.body.quote
        };
        createModel.createData(inputData,function(data){
            res.redirect('route/read');
            console.log(data.affectedRows + " record created");
        });
    }

}
