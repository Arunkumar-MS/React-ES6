import React from 'react';


class ProductDetail extends React.Component {


    render() {
        return (


            <div>
                <div className="col-md-9">
                    <div className="thumbnail">
                        <img className="img-responsive"
                             src='https://secure.ce-tescoassets.com/assets/PL/004/5900497312004/ShotType1_328x328.jpg'
                             alt="product"></img>

                        <div className="caption-full">

                            <h4 className="pull-right"> $20 </h4>
                            <h4>Pepsi Cola Drink 2 L</h4>

                            <p> Pepsi Cola Drink 2 L </p>
                            <input type="button" className="btn btn-primary add" value="add">
                            </input>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default ProductDetail;

