import React from 'react';
import {getBasketData , getBasket, addToMiniTrolley, getMiniTrolleyData} from './Action/trolleyAction';
import eventHandler from './Store/trolleyStore';
import BasketItems from './basketItems';

class MiniBasket extends React.Component {
    constructor() {
      super();
      this.state = {test: 'hello',
                    itemsCount: 0,
                    totalPrice: 0.00};

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
       let data = getMiniTrolleyData();
        console.log(data.trolley.guidePrice);
        console.log(data.trolley.items.length);

        this.setState({

            itemsCount: data.trolley.items.length,
            totalPrice: data.trolley.guidePrice

        });

    }
    _onTrolleyChange(e) {
      let basketItems= JSON.parse(event.currentTarget.response);
      console.log(basketItems);
       React.render(<BasketItems basketItems={basketItems} />, document.getElementById('trolleyItems'));
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
                <dd className="itemsCount">{this.state.itemsCount}</dd>
                <dt className="hide">Total Price</dt>
                <dd>{this.state.totalPrice} zł</dd>
               </dl>
           </div>
        );
  }
}
export default MiniBasket;
