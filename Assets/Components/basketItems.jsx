import React from 'react';

class BasketItems extends React.Component {
    renderBasketItem(item){
        retrun (
             <div className="trolley-tile-content">
                <div className="col-md-3">
                    <img src="https://secure.ce-tescoassets.com/assets/PL/769/5051007044769/ShotType1_135x135.jpg" className="product-image" alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="description">
                        <a>Tesco Loves Baby Ultra Dry 3 Midi 4-9 kg Nappies 128 Pieces</a>
                    </div>
                    <div className="price">0,45 zł/Piece</div>
                </div>
                <div className="col-md-3">qwer
                </div>
            </div>
            );
    }
    
    render() {
        document.getElementById('trolleyItems').style.display = 'block';
        document.getElementById('result').style.display = 'block';
        
        return (<div>
                {this.props.basketItems.items.map(x=> renderBasketItem(x))}
           </div>
        )
    }
}
export default BasketItems;