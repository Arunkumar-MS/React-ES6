import React from 'react';
import {getBasketData , getBasket} from './Action/trolleyAction';
import eventHandler from './Store/trolleyStore';

class MiniBasket extends React.Component {
    constructor() {
      super();
      this.state = {test: 'hello'};

      this._onTrolleyChange = this._onTrolleyChange.bind(this);
    }

    _onTrolleyChange(e) {
      let basketItems= JSON.parse(event.currentTarget.response);
      console.log(basketItems);
    }
    componentWillMount() {
        eventHandler.addChangeListener(this._onTrolleyChange);
    }
    componentWillUnmount() {
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
