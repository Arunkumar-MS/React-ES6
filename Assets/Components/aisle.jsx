import React from 'react';

class Aisle extends React.Component {
     getProductByCatagoryId(e){
        var taxonomyId = e.currentTarget.title;
        console.log(taxonomyId);
    }
   render() {
        var self=this;
        document.getElementById('aisle').style.display='block';

        var aisleMenu = this.props.aisles.map(function(sd){
            return (<a onClick={self.getProductByCatagoryId.bind(this)} title={sd.catId}>{sd.name}</a>);
        });
        return (<div>
                {aisleMenu}
            </div>
        )

    }
}

export default Aisle;