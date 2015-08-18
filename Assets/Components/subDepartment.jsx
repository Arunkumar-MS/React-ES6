import React from 'react';
import Aisle from "./aisle";

class SubDepartment extends React.Component {
    renderAisle(menuItems,e){
        var aisle = e.currentTarget.text;
        var aisles = [];
        for (var i = 0; i<= menuItems.length - 1; i++) {
            var item = menuItems[i];
            if(item.catId != null && item.parent == aisle)
            {
                aisles.push(item);
            }
        };

        console.log(aisles);
        React.render(<Aisle aisles={aisles} />, document.getElementById('aisle'));
    }
   render() {
        var self=this;
        document.getElementById('subDepartmentMenu').style.display='none';

        var subDepartmentMenu = this.props.departments.map(function(sd){
            return <a onClick={self.renderAisle.bind(this,self.props.menuItems)}>{sd.name}</a>;
        });
        return (<div>
                {subDepartmentMenu}
            </div>
        )

    }
}

export default SubDepartment;