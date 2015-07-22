import React from 'react';
import request from 'request';
import ProductDetail from './ProductDetail';


class Result1 extends React.Component {

    productDiscription(id)
    {

        React.render(<ProductDetail />, document.getElementById('result'));
       // React.render(<productDetail /> , document.getElementById('result'));



    }
    render() {
        return (

            <div className="row"> {this.props.list.productItems.map(function (item, i) {
                return (
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img className="img-responsive" src={item.product.defaultImageUrl} alt="product"></img>

                            <div className="caption">

                                <h4 className="pull-right"> ${item.product.price} </h4>
                                <h4><a onClick={this.productDiscription.bind(item.product.id)} href="#">{item.product.title}</a></h4>

                                <p> {item.product.description }  </p>

                                <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                  <span className="glyphicon glyphicon-minus"></span>
              </button>
          </span>
                                    <input type="text" name="quant[2]" className="form-control input-number" value="1" min="1" max="100">
                                    </input>


          <span className="input-group-btn">
              <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">

                  <span className="glyphicon glyphicon-plus"></span>
              </button>
          </span>
                                    </div>


                                <input type="button" className="btn btn-primary add" value="add">
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

class plp extends React.Component {

    render() {

        <span>
  return (
            {this.props.item}

            );
  </span>


    }
}
