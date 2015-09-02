import React from 'react';
import {getBasketData , getBasket, addToMiniTrolley, getMiniTrolleyData} from './Action/trolleyAction';
import eventHandler from './Store/trolleyStore';
import BasketItems from './basketItems';

class MiniBasket extends React.Component {
    constructor() {
      super();
      this.state = {test: 'hello'};

      this._onTrolleyChange = this._onTrolleyChange.bind(this);
      this._onAddMiniTrolleyChange = this._onAddMiniTrolleyChange.bind(this);
    }
    handleAddToBasket(){
        var product = this.props.productData,
            currProdQty = this.props.currentQty,
            unitOfMeasure = product.unitOfMeasure == "kgs" ? "kgs" : "pcs";
        var productData = {
            "items" :[ {
            id: product.id,
            newUnitChoice: unitOfMeasure,
            oldUnitChoice: unitOfMeasure,
            newValue: currProdQty,
            oldValue: 0 }]
        };
        addToMiniTrolley(productData);
    }

    _onAddMiniTrolleyChange(){

    }
    _onTrolleyChange(e) {
      let basketItems= JSON.parse(event.currentTarget.response);
      console.log(basketItems);
       React.render(<BasketItems items={basketItems} />, document.getElementById('trolleyItems'));
    }
    componentWillMount() {
        this.handleAddToBasket()
        eventHandler.addChangeListener(this._onAddMiniTrolleyChange, 'AddMiniTrolleyChange');
        eventHandler.addChangeListener(this._onTrolleyChange);
    }
    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onAddMiniTrolleyChange, 'AddMiniTrolleyChange');
        eventHandler.removeChangeListener(this._onTrolleyChange);
    }
    handleClick(){
     getBasketData();
    }
    render() {
        return (
           <div className="miniBasketBody" onClick={this.handleClick}>
               <h2>Basket</h2>
               <dl>
                <dt className="hide">Items</dt>
                <dd className="itemsCount">0</dd>
                <dt className="hide">Total Price</dt>
                <dd>$ 0.00</dd>
               </dl>
           </div>
        );
  }
}
export default MiniBasket;
