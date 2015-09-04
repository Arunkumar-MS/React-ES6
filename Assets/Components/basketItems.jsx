import React from 'react';

class BasketItems extends React.Component {
    renderBasketItem(item){
        return (
            <div className="basket-tile-content">
                <div className="col-md-3">
                    <img src={item.product.defaultImageUrl} className="product-image" alt="" />
                </div>
                <div className="col-md-6">
                    <div className="description">
                        <a>{item.product.description}</a>
                    </div>
                    <div className="price">{item.product.price} zł/Piece</div>
                </div>
                <div className="col-md-3 placeholder">
                    <button type="button" className="btn btn-danger pull-right" aria-label="Left Align">
                        <span className="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                    <div className="quantity">            
                        <div className="input-group input-group-sm col-lg-8 pull-right margin5">
                          <span className="input-group-addon" id="sizing-addon3">Total</span>
                          <input type="text" className="form-control text-right" placeholder="24" aria-describedby="sizing-addon3" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 pull-right">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">-</button>
                                    </span>
                                    <input type="text" className="form-control text-center" placeholder="1" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
    
    render() {
        document.getElementById('trolleyItems').style.display = 'block';
        document.getElementById('result').style.display = 'none';
        var self = this;
        return (<div>
                {this.props.basketItems.items.map(item => self.renderBasketItem(item))}
           </div>
        )
    }
}
export default BasketItems;