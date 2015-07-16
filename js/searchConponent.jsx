import React from 'react';
import request from 'request';
import Result1 from './plp';


class Result extends React.Component
{

handleClick(e)
{
//console.log("search"+React.findDOMNode(this.refs.search).value);

var Header = {'Content-Type': 'application/json', 'Accept': 'application/json','Ighs-Language': 'en-GB' ,'Ighs-Appkey': 'trn:tesco:cid:mweb:uuid:A5EA1E42-1A9D-4262-8370-770B927D12E0'};
/*
$.get('/search?search="cola"',
function ( response) {


React.render(<Result1 list={JSON.parse(response)} /> , document.getElementById('result'));


}); */
var search=React.findDOMNode(this.refs.search).value.trim();
request.get({
url: 'http://localhost:4000/search?search='+search,
headers: Header,
rejectUnauthorized: false
},
function ( error,response,body) {
React.render(<Result1 list={JSON.parse(body)} /> , document.getElementById('result'));
});


}
render()
{
return (


<div >  <h1 className="searchtxt" > Enter Search Item </h1>  <input ref="search" type="text"  className="form-control" />
<input type="button"  className="btn btn-primary custom"  onClick={this.handleClick.bind(this)} value="search" />
</div>


);
}
}
export default Result;
