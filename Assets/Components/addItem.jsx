
import React from 'react';

class AddItem extends React.Component {


    render() {
        return (

            <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]">
                  <span className="glyphicon glyphicon-minus"></span>
              </button>
          </span>
                <input type="text" name="quant[2]" className="form-control input-number" value="1" min="1" max="100">
                </input>


          <span className="input-group-btn">
              <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">

                  <span className="glyphicon glyphicon-plus"></span>
              </button>
          </span>
            </div>
        )
    }
}

export default AddItem;