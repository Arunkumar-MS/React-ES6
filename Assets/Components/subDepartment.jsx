import React from 'react';
import Aisle from "./aisle";
import MenuStore from './Store/menuStore';

class SubDepartment extends React.Component {
    renderAisle(e){
        var aisle = e.currentTarget.text;
        React.render(<Aisle aisle={aisle} />, document.getElementById('aisle'));
    }
   render() {
        var self=this;
        document.getElementById('subDepartmentMenu').style.display='block';
        document.getElementById('aisle').style.display='none';
        let departments = MenuStore.getDepartmentItem(this.props.department);
        var subDepartmentMenu = departments.map(function(sd){
            return (<li><a data-toggle="dropdown" className="dropdown-toggle" href="#navigationMenu" onClick={self.renderAisle.bind(this)}>{sd.name}</a></li>);
        });
        return (<ul role="menu" className="dropdown-menu">
                <li id="closeSubDept" className="closeSubDept"><a className="closeSubDept" href="#"><span className="glyphicon  glyphicon-chevron-left pull-right" aria-hidden="true"></span> Back</a></li>
                {subDepartmentMenu}
            </ul>
        )

    }
}

export default SubDepartment;