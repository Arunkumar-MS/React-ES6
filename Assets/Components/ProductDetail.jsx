import React from 'react';
import ProductDetailAction from './Action/productDetailAction';
import ProductDetailStore from './Store/productDetailStore';
import AddItem from './addItem';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productImg: '',
            shortDesc: "some text",
            price: 0.00,
            euplData: "Loading product data..."};
        ProductDetailAction.getProductDetail(this.props.product.id);

        this._onProdChange = this._onProdChange.bind(this);

    }
    _onProdChange(){
        let productDetails = JSON.parse(ProductDetailStore.getProductDetails());
        console.log(productDetails);
        this.setState({
            productImg: productDetails.product.defaultImageUrl,
            shortDesc: productDetails.product.description,
            price: productDetails.product.price,
            euplData: productDetails.brandBankAttributes
        });
    }
    componentWillMount() {
        ProductDetailStore.addChangeListener(this._onProdChange, 'ProdChange');

    }

    componentWillUnmount() {
        ProductDetailStore.removeChangeListener(this._onProdChange, 'ProdChange');
    }


    render() {

        return (


            <div>
                <div className="productDetailPage">
                    <div className="thumbnail col-lg-4 col-md-4 col-sm-4 col-sx-12">
                        <img className="img-responsive"
                             src={this.state.productImg}
                             alt={this.state.shortDesc}></img>

                        <div className="caption-full">

                            <h4> {this.state.price}</h4>
                            <h4><em>{this.state.shortDesc}</em></h4>

                        </div>
                        <div className="productBtm col-lg-12 col-md-12 col-sm-12 col-sx-12">
                            <AddItem key={this.props.product.id} defaultQty={this.props.product.averageWeight} productData={this.props.product}/>

                        </div>
                    </div>

                    <div className="euplData col-lg-8 col-md-4 col-sx-12" dangerouslySetInnerHTML={{__html: this.state.euplData}}></div>

                </div>
            </div>


        );
    }
}
export default ProductDetail;

