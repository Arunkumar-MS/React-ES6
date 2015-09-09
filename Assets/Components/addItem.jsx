
import React from 'react';
import MiniBasket from './miniBasket';
import TrolleyStore from './Store/trolleyStore';
import BasketItems from './basketItems';
import TrolleyAction from './Action/trolleyAction';

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
    addToBasket() {
        var product = this.props.productData,
            oldProductVal = 0,
            newProductVal = 0,
            unitOfMeasure = product.unitOfMeasure == "kgs" ? "kgs" : "pcs",
            oldBasketItems = JSON.parse(TrolleyStore.getBasketItem());
        for(var i=0;i<oldBasketItems.items.length;i++){
           if(oldBasketItems.items[i]['product']['id'] == product.id){
               oldProductVal = oldBasketItems.items[i]['quantity'];
           }

        }
        newProductVal = oldProductVal + this.state.quantity / this.props.defaultQty;
        console.log("oldvalue - "+ oldProductVal + "newvalue - "+ newProductVal)

        var productData = {
            "items": [{
                id: product.id,
                newUnitChoice: unitOfMeasure,
                oldUnitChoice: unitOfMeasure,
                newValue: newProductVal,
                oldValue: oldProductVal
            }]
        };
        TrolleyAction.addToMiniTrolley(productData);



    }




    render() {
        return (
            <div>
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
                <input type="button" className="btn btn-primary add" value="Add to Basket" onClick={this.addToBasket.bind(this)}>
                </input>
            </div>
        )
    }

    componentWillMount() {
        this.setState({quantity: this.props.defaultQty}) ;

    }

}

export default AddItem;