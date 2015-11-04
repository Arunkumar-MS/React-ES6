import React from 'react';
import AddItem from './addItem';


class ProductDetail extends React.Component {


    render() {
        return (


            <div>
                <div className="productDetailPage">
                    <div className="thumbnail col-lg-4 col-md-4 col-sm-4 col-sx-12">
                        <img className="img-responsive"
                             src='https://secure.ce-tescoassets.com/assets/PL/004/5900497312004/ShotType1_328x328.jpg'
                             alt="product"></img>

                        <div className="caption-full">

                            <h4 className="pull-right"> $20 </h4>
                            <h4>Pepsi Cola Drink 2 L</h4>

                            <p> Pepsi Cola Drink 2 L </p>

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

