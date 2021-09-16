app.use(express.static('public'))

const update = document.querySelector('#update-button');
update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar',
            quote: 'I find your lack of faith disturbing.'
          })
    });

    function deletebyname(data) {

        var sql ='delete from quotes where name='+data.name;
        con.query(sql,function(err,data){
            if(err) console.log(err);
            else {
                console.log(data.affectedRows + " record created");
            }
        });
        



    }
  })