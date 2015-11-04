import React from 'react';
import AddItem from './addItem';


class ProductDetail extends React.Component {


    render() {
        return (


            <div>
                <div className="productDetailPage">
                    <div className="thumbnail col-lg-4 col-md-4 col-sm-4 col-sx-12">
                        <img className="img-responsive"
                             src={this.props.product.defaultImageUrl}
                             alt={this.props.product.shortDescription}></img>

                        <div className="caption-full">

                            <h4 className="pull-right"> {this.props.product.price} </h4>
                            <h4>{this.props.product.shortDescription}</h4>

                        </div>
                        <div className="productBtm col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <AddItem key={this.props.product.id} defaultQty={this.props.product.averageWeight} productData={this.props.product}/>

                        </div>
                    </div>
                    <div>
                        Product description
                        </div>

                </div>
            </div>


        );
    }
}
export default ProductDetail;

