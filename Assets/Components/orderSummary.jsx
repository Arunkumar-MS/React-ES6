import React from 'react';

class OrderSummary extends React.Component {
    



render() {
        return (
           <div className="col-md-4 basket-tile-content">
            <h3>Order Summary</h3>
            <div className="trolley-order-row">
                <div>Items in trolley:</div>
                <div className="trolley-order-summary">11</div>
            </div>
            <div className="trolley-order-row">
                <div>Guide price:</div>
                <div className="trolley-order-summary">$12345.90</div>
            </div>
            <div className="trolley-order-row last">
                <div>Total:</div>
                <div className="trolley-order-summary total-price">$12345.90</div>
            </div>
            <div className="trolley-order-row last">
                <button type="button" className="btn btn-primary btn-lg btn-block">Book a Slot</button>
            </div>
           </div>
        );
    }














}
export default OrderSummary;