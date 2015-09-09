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
        //document.getElementById('departmentMenu').style.display='none';
        document.getElementById('subDepartmentMenu').style.display='block';
        

        var subDepartmentMenu = this.props.departments.map(function(sd){
            return (<li><a data-toggle="dropdown" className="dropdown-toggle" href="#" onClick={self.renderAisle.bind(this,self.props.menuItems)}>{sd.name}</a></li>);
        });
        return (<ul role="menu" className="dropdown-menu">
                <li id="closeSubDept"><a className="closeSubDept" href="#"><span className="glyphicon  glyphicon-chevron-left pull-right" aria-hidden="true"></span> Back</a></li>
                {subDepartmentMenu}
            </ul>
        )

    }
}

export default SubDepartment;