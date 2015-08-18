import React from 'react';


class MiniBasket extends React.Component {


    render() {
        return (
           <div className="miniBasketBody">
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
