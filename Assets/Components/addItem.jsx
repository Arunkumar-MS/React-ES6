
import React from 'react';

class AddItem extends React.Component {
    constructor() {
        super();
        this.state = { quantity: 1}
    }
    incrementQty(){
        this.setState({quantity: this.state.quantity+1})
    }
    decrementQty(){
        this.setState({quantity: this.state.quantity != 1 ? this.state.quantity-1: this.state.quantity})
    }
    render() {
        return (

            <div className="input-group">
               <span className="input-group-btn">
                  <button type="button" className="btn btn-default btn-number" onClick={this.decrementQty.bind(this)}>
                      <span className="glyphicon glyphicon-minus"></span>
                  </button>
               </span>
                <input type="text" name="quant[2]" className="form-control input-number" value={this.state.quantity}>
                </input>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={this.incrementQty.bind(this)}>

                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        )
    }
}

export default AddItem;