import React from 'react';
import request from 'request';
import ProductDetail from './ProductDetail';
import Paging from './paging';
import AddItem from './addItem'
import Sorting from './sorting'

class Result1 extends React.Component {

    productDiscription(id) {

        React.render(<ProductDetail />, document.getElementById('result'));


    }

    render() {

        return (



            <div className="row">

                <Sorting item={this.props.data} productInfo={this.props.pageInformation} />


                {this.props.productItems.map(function (item, i) {
                    return (
                        <div className="col-sm-3 col-lg-3 col-md-3">
                            <div className="thumbnail">
                                <img className="img-responsive" src={item.product.defaultImageUrl} alt="product"></img>

                                <div className="caption">


                                    <h5><a onClick={this.productDiscription.bind(item.product.id)}
                                           href="#">{item.product.title}</a></h5>
                                    <h5 ><strong>$ {item.product.price}</strong> </h5>


                                    <AddItem />


                                    <input type="button" className="btn btn-primary add" value="Add to Basket">
                                    </input>
                                </div>
                            </div>
                        </div>
                    );

                }, this)}

                { this.props.pageInformation.pageCount > this.props.pageInformation.pageNo ? <Paging data={this.props}  /> :"" }
            </div>

        );
    }
}
export default Result1;




