var express = require('express');
var request = require('request');
var app = express();
app.set('views', __dirname + '\\views');
console.log(__dirname + '\\views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/js'));
app.listen(4000);
console.log('runing @ 4000');

app.get('/search',function (req, res)
{
var Header = {'Content-Type': 'application/json', 'Accept': 'application/json','Ighs-Language': 'en-GB' ,'Ighs-Appkey': 'trn:tesco:cid:mweb:uuid:A5EA1E42-1A9D-4262-8370-770B927D12E0'};
console.log('https://s.tesco.pl/api/v1/search/products?query='+req.query.search);
console.log(req.query.search);
request.get({
url: 'https://s.tesco.pl/api/v1/search/products?query='+req.query.search,
headers: Header,
rejectUnauthorized: false
},
function (error, response,body) {
res.send(body);
})


}
);

app.get('/', function (req, res)
{
res.render('index.html');

});
