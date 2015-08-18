import React from 'react';

class Aisle extends React.Component {
   render() {
        var self=this;
        document.getElementById('aisle').style.display='block';

        var subDepartmentMenu = this.props.aisles.map(function(sd){
            return <a>{sd.name}</a>;
        });
        return (<div>
                {subDepartmentMenu}
            </div>

        )

    }
}

export default Aisle;