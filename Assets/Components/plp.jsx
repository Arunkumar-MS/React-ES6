import React from 'react';
import request from 'request';
import ProductDetail from './ProductDetail';
import Paging from './paging';
import AddItem from './addItem'

class Result1 extends React.Component {

    productDiscription(id) {

        React.render(<ProductDetail />, document.getElementById('result'));


    }

    render() {

        return (



            <div className="row">


                {this.props.list.productItems.map(function (item, i) {
                    return (
                        <div className="col-sm-4 col-lg-4 col-md-4">
                            <div className="thumbnail">
                                <img className="img-responsive" src={item.product.defaultImageUrl} alt="product"></img>

                                <div className="caption">

                                    <h4 className="pull-right"> ${item.product.price} </h4>
                                    <h4><a onClick={this.productDiscription.bind(item.product.id)}
                                           href="#">{item.product.title}</a></h4>

                                    <p> {item.product.description }  </p>

                                    <AddItem />


                                    <input type="button" className="btn btn-primary add" value="add">
                                    </input>
                                </div>
                            </div>
                        </div>
                    );

                }, this)}

                { this.props.list.pageInformation.pageCount > this.props.list.pageInformation.pageNo ? <Paging /> :"" }
            </div>

        );
    }
}
export default Result1;




