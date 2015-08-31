var config = require('./config');
var request = require('request');

exports.search=function (req, res) {
    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Ighs-Language': 'en-GB',
        'Ighs-Appkey': config.Appkey
    };

    var url=config.productApiUrl + req.query.search+'&count='+40;


    if(req.query['sortBy'])
    {
        url+='&sortBy='+req.query.sortBy;

    }
    if(req.query['page'])
    {
        url+='&page='+req.query.page;

    }
     if(req.query['department'])
    {
        url+='&department='+req.query.department;
    }
     if(req.query['aisle'])
    {
        url+='&aisle='+req.query.aisle;
    }

     if(req.query['brand'])
    {
        url+='&brand='+req.query.brand;
    }



    request.get({
            url: url,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {
            res.send(body);
        })


}

exports.productDetails=function (req, res) {
    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Ighs-Language': 'en-GB',
        'Ighs-Appkey': config.Appkey
    };
    request.get({
            url: config.ProductDetail + req.query.id,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {
            res.send(body);
        })


}

exports.sitenavigation=function (req, res) {
    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Ighs-Language': 'en-GB',
        'Ighs-Appkey': config.Appkey
    };
    request.get({
            url: config.navigationUrl,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {
            res.send(body);
        })


}


exports.login=function(req,res)
{


    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Ighs-Appkey': 'trn:tesco:cid:mweb:uuid:A5EA1E42-1A9D-4262-8370-770B927D12E0',
        'Ighs-Language': 'en-GB'


    };
    //var url='https://r.tesco.pl/api/v2/session';

    var requestData= {
        "Email": req.query.email,
        "Password": req.query.pwd,
        "IpAddress": "127.0.0.1"
    }
    request({ url: config.login,rejectUnauthorized: false ,headers: Header, method: 'PUT', json: requestData},
        function (error, response, body)  {

            res.send(body);

        });
}