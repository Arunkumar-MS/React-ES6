import React from 'react';
import SubDepartment from "./subDepartment";
import MenuStore from './Store/menuStore';

class SuperDepartment extends React.Component {
    renderDepartment(e){
        let department =  e.currentTarget.text;
        React.render(<SubDepartment department={department} />,  document.getElementById('subDepartmentMenu'));
    }
    render() {
        let self = this;
        document.getElementById('departmentMenu').style.display='block';
        document.getElementById('departmentMenuBg').style.display='block';

        var superDepartment = MenuStore.getSuperDeapartmentItem();
        var superDepartmentMenu = superDepartment.map(function(sd){
            return  (<li><a data-toggle="dropdown" className="dropdown-toggle" href="#navigationMenu" onClick={self.renderDepartment.bind(this)}>{sd.name}</a></li>);

        });
        return (<ul role="menu" className="dropdown-menu">
                <li id="closeSuperDept" className="closeSuperDept"><a className="closeSuperDept" href="#"><span className="glyphicon  glyphicon-chevron-left pull-right" aria-hidden="true"></span> Groceries</a></li>
                {superDepartmentMenu}
            </ul>
        )
    }
}
export default SuperDepartment;