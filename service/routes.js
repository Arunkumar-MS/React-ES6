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