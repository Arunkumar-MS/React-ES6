  import React from 'react';
  import request from 'request';


  class Result1 extends React.Component{

  render(){
  return (

  <div className="row"> {this.props.list.productItems.map(function(item, i)
  {
  return (
  <div  className="col-sm-4 col-lg-4 col-md-4">
  <div className="thumbnail">
  <img className="img-responsive" src= {item.product.defaultImageUrl}  alt="product" ></img>
  <div className="caption">

  <h4 className="pull-right"> ${item.product.price} </h4>
  <h4><a href="#">{item.product.title}</a> </h4>
  <p> {item.product.description }  </p>
  <input type="button"  className="btn btn-primary add"  value="add" >
  </input>
  </div>
  </div>
  </div>
  );

  }, this)}
  </div>

  );
  }
  }
  export default Result1;

  class plp extends React.Component{

  render(){

  <span>
  return (
  {this.props.item}

  );
  </span>


  }
  }
