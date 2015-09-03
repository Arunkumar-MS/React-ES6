import React from 'react';

class BasketItems extends React.Component {
    
    render() {
      
        return (
            <div className="basket-tile-content">
                <div className="col-md-3">
                    <img src="https://secure.ce-tescoassets.com/assets/PL/769/5051007044769/ShotType1_135x135.jpg" className="product-image" alt="" />
                </div>
                <div className="col-md-6">
                    <div className="description">
                        <a>Tesco Loves Baby Ultra Dry 3 Midi 4-9 kg Nappies 128 Pieces</a>
                    </div>
                    <div className="price">0,45 zł/Piece</div>
                </div>
                <div className="col-md-3 placeholder">
                    <button type="button" className="btn btn-danger pull-right" aria-label="Left Align">
                        <span className="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                    <div className="quantity">            
                        <div className="input-group input-group-sm col-lg-8 pull-right margin5">
                          <span className="input-group-addon" id="sizing-addon3">Total</span>
                          <input type="text" className="form-control text-right" placeholder="24" aria-describedby="sizing-addon3" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 pull-right">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">-</button>
                                    </span>
                                    <input type="text" className="form-control text-center" placeholder="1" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">+</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BasketItems;