
import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: this.props.defaultQty}


    }
    incrementQty(){
        this.setState({quantity: this.state.quantity + this.props.defaultQty})
    }
    decrementQty(){
        this.setState({quantity: this.state.quantity !== this.props.defaultQty ? this.state.quantity-this.props.defaultQty:this.props.defaultQty})
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
    componentWillMount() {
        this.setState({quantity: this.props.defaultQty}) ;
    }
}

export default AddItem;