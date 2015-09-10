import React from 'react';
import MenuStore from './Store/menuStore';

class MenuItem extends React.Component {
    renderSub(dname, e){
        e.nativeEvent.preventDefault(); 
        e.nativeEvent.stopPropagation();
        let _this = e.target;
        $(_this).parent().siblings().removeClass('open');
        $(_this).parent().toggleClass('open');
    }
    
    renderDepartment(dname){
        var departments = MenuStore.getDepartmentItem(dname);
        let departmentMenu = departments.map(function(sd){
        return  (<li className="dropdown dropdown-submenu">
                    <a className="dropdown-toggle" data-toggle="dropdown">{sd.name}</a>
                      <ul className="dropdown-menu">
                      </ul>
                </li>);
        });
        
        return departmentMenu;
    }
    render() {
        let self = this;
        let superDepartments = MenuStore.getSuperDeapartmentItem();
        let superDepartmentMenu = superDepartments.map(function(sd){
        return  (<li className="dropdown dropdown-submenu" onClick = {self.renderSub.bind(this, sd.name)}>
                    <a className="dropdown-toggle" data-toggle="dropdown">{sd.name}</a>
                      <ul className="dropdown-menu">
                        {self.renderDepartment(sd.name)}
                      </ul>
                </li>);
        });
        return (<li>
                    {superDepartmentMenu}
                </li>
        )
    }
}
export default MenuItem;

