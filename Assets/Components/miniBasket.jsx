import React from 'react';
import TrolleyAction from './Action/trolleyAction';
import TrolleyStore from './Store/trolleyStore';
import BasketItems from './basketItems';
import OrderSummary from './orderSummary';

class MiniBasket extends React.Component {
    constructor() {
      super();
      this.state = {test: 'hello',
                    itemsCount: 0,
                    totalPrice: 0.00};

      this._onTrolleyChange = this._onTrolleyChange.bind(this);
    //  this._onAddMiniTrolleyChange = this._onAddMiniTrolleyChange.bind(this);
    }


    _onTrolleyChange(e) {
      let basketItems = JSON.parse(TrolleyStore.getBasketItem()),
          totalItems=0;
        for(var i=0;i<basketItems.items.length;i++){
            totalItems = totalItems + basketItems.items[i]['quantity'];

        }
      this.setState({
            itemsCount: totalItems,
            totalPrice: basketItems.guidePrice

        });
      if(TrolleyStore.getTrolleyToBeRendered()){
        React.render(<BasketItems basketItems={basketItems} />, document.getElementById('trolleyItems'));
        React.render(<OrderSummary />, document.getElementById('orderSummary'));
      }
    }
    componentWillMount() {
       // TrolleyStore.addChangeListener(this._onAddMiniTrolleyChange, 'AddMiniTrolleyChange');
        TrolleyStore.addChangeListener(this._onTrolleyChange);
    }
    componentWillUnmount() {
        //TrolleyStore.removeChangeListener(this._onAddMiniTrolleyChange, 'AddMiniTrolleyChange');
       TrolleyStore.removeChangeListener(this._onTrolleyChange);
    }
    handleClick(){
     TrolleyAction.getBasketData();
    }
    render() {
        return (
           <div className="miniBasketBody" onClick={this.handleClick}>
               <h2>Basket</h2>
               <dl>
                <dt className="hide">Items</dt>
                <dd className="itemsCount">{this.state.itemsCount}</dd>
                <dt className="hide">Total Price</dt>
                <dd>$ {this.state.totalPrice}</dd>
               </dl>
           </div>
        );
  }
}
export default MiniBasket;
