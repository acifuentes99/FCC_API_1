//'use strict'

var path = process.cwd();
//var dbFunctions = require(path + '/app/controllers/dbFunctions.server.js');
//var Demos = require(path + '/app/models/demos.js');


module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

  /*  app.route('/api')
    .get(dbFunctions.getData(function (req, res){
        res.send("hola");
    })
    );
*/
  /*
    app.route('/api')
    .get(function(req, res){
       Demos.find(function(err, result){
            res.json(result);
       }); 
    });
*/
    app.route('/:id')
    .get(function(req, res) {
        var unix_; var natural_;
       var aux = new RegExp(/(?:\w*)\s(?:\d*,)\s\d{4}/); 
       var aux2 = new RegExp(/^(?:\d+)$/); 

       if(aux.test(req.params.id)){
        var date1 = req.params.id.split(" ");
        var date2 = date1[1].split(",");
        month_f = function(aux_){
            switch(aux_){
            case 'January':
                return 1;
            case 'February':
                return 2;
            case 'March':
                return 3;
            case 'April':
                return 4;
            case 'May':
                return 5;
            case 'June':
                return 6;
            case 'July':
                return 7;
            case 'August':
                return 8;
            case 'September':
                return 9;
            case 'October':
                return 10;
            case 'November':
                return 11;
            case 'December':
                return 12;
            }
           }
        var month_num = month_f(date1[0]); 

            var newDate=(month_num-1)+"/"+date2[0]+"/"+date1[2];
            //unix_ = (new Date(date1[2],month_num-1,date2[0]-1).getTime()/1000).toString();
            unix_ = (Date.UTC(date1[2],month_num-1,date2[0])/1000).toString();
            natural_ = req.params.id;
            //res.send(newDate);
       }

       else if(aux2.test(req.params.id)){

            var asdf = req.params.id*1000;
            //var asdf = 1330225200000;
            var aux5 = new Date(asdf);
            var date_ = {
                'month': aux5.getUTCMonth(),
                'day': aux5.getUTCDate(),
                'year': aux5.getUTCFullYear(),
            };

            m_f = function(as){
                switch(as){
                    case 1: return 'January';
                    case 2: return 'February';
                    case 3: return 'March';
                    case 4: return 'April';
                    case 5: return 'May';
                    case 6: return 'June';
                    case 7: return 'July';
                    case 8: return 'August';
                    case 9: return 'September';
                    case 10: return 'October';
                    case 11: return 'November';
                    case 12: return 'December';
                   }
            }
           date_.month2 = m_f(date_.month+1); 

           unix_ = req.params.id;
           natural_ = date_.month2+' '+date_.day+', '+date_.year;
         
       }
       else{
           unix_ = null;
           natural_ = null;
       }

        var out_ = {
           'unix': unix_,
           'natural': natural_
        };
        res.send(out_);

/*
        var month = ;
        var month_aux;
       switch(month){
        case January:
            return 1;
        case February:
            return 2;
        case March:
            return 3;
        case April:
            return 4;
        case May:
            return 5;
        case June:
            return 6;
        case July:
            return 7;
        case August:
            return 8;
        case September:
            return 9;
        case October:
            return 10;
        case November:
            return 11;
        case December:
            return 12;
        default return null;
       }*/
    });
/*
app.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});*/
    /*
    app.route('/:id')
    .get(function(req, res){
        //Muestrate el parametro en pantalla
        res.send(id);
    });
    Done!!!
    seria algo asi:
    app.route('/id')
    .get(function(req,res){
        res.send(req.params.id)
    });
    * */

    };
