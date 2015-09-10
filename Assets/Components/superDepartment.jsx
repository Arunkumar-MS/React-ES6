import React from 'react';
import SubDepartment from "./subDepartment";
var currentTarget;

class SuperDepartment extends React.Component {
    renderDepartment(menuItems,e){
        document.getElementById('aisle').style.display='none';
        var department = e.currentTarget.text;
        var departments = [];
        for (var i = 0; i<= menuItems.length - 1; i++) {
            var item = menuItems[i];
            if(item.catId == null && item.parent== department)
            {
                departments.push(item);
            }
        };

        console.log(departments);
        React.render(<SubDepartment departments={departments} menuItems={menuItems} />,  document.getElementById('subDepartmentMenu'));
    }
    render() {
        var self=this;
        var superDepartment = [];
        for (var i=0; i < this.props.menuItems.length ; i++) {
                var item = this.props.menuItems[i];
                if(item.catId == null && item.parent==null){
                    superDepartment.push(item);
            }
        };
        //window.location.href = '#navigationMenu';
        document.getElementById('departmentMenu').style.display='block';
        document.getElementById('departmentMenuBg').style.display='block';

        
        var superDepartmentMenu = superDepartment.map(function(sd){
            return  (<li><a data-toggle="dropdown" className="dropdown-toggle" href="#navigationMenu" onClick={self.renderDepartment.bind(this,self.props.menuItems)}>{sd.name}</a></li>);

        });
        return (<ul role="menu" className="dropdown-menu">
                <li id="closeSuperDept" className="closeSuperDept"><a className="closeSuperDept" href="#"><span className="glyphicon  glyphicon-chevron-left pull-right" aria-hidden="true"></span> Groceries</a></li>
                {superDepartmentMenu}
            </ul>
        )
    }
}
export default SuperDepartment;