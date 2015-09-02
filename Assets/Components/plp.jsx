import React from 'react';
import request from 'request';
import ProductDetail from './ProductDetail';
import Paging from './paging';
import AddItem from './addItem';
import Sorting from './sorting';
import Filters from './Filters';

class Result1 extends React.Component {
    constructor(props) {
        super(props);
    }
    productDiscription(id) {

        React.render(<ProductDetail />, document.getElementById('result'));


    }

    render() {

        return (

             <div>
               <div id="filters" className="col-sm-2 col-lg-2 col-md-2"> 
                 <Filters facetLists={this.props.facetLists} searchTerm={this.props.data} fromProductSearch={this.props.fromProductSearch} /></div>
                 <div className="col-sm-10 col-lg-10 col-md-10">
                  <Sorting item={this.props.data} productInfo={this.props.pageInformation} fromProductSearch={this.props.fromProductSearch} />



             <div className="row">




                {this.props.productItems.map(function (item, i) {
                    return (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="thumbnail product">
                                <img className="img-responsive" src={item.product.defaultImageUrl} alt="product"></img>

                                <div className="caption">


                                    <h5><a onClick={this.productDiscription.bind(item.product.id)}
                                           href="#">{item.product.title}</a></h5>
                                    <h5 ><strong>$ {item.product.price}</strong> </h5>

                                    <div className="productBtm">
                                        <AddItem key={item.product.id} defaultQty={item.product.averageWeight} productData={item.product}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );

                }, this)}

                { this.props.pageInformation.pageCount > this.props.pageInformation.pageNo ? <Paging data={this.props}  /> :"" }
                </div>
            </div>
             </div>
        );
    }
}

Result1.defaultProps = {fromProductSearch:true};
export default Result1;




