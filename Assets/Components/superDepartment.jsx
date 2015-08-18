import React from 'react';
import SubDepartment from "./subDepartment";

class SuperDepartment extends React.Component {
    renderDepartment(menuItems,e){
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
        React.render(<SubDepartment departments={departments} menuItems={menuItems} />, document.getElementById('subDepartmentMenu'));
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
        document.getElementById('departmentMenu').style.display='block';

        
        var superDepartmentMenu = superDepartment.map(function(sd){
            return  <a onClick={self.renderDepartment.bind(this,self.props.menuItems)}>{sd.name}</a>;

        });
        return (<div>
                {superDepartmentMenu}
            </div>
        )
    }
}



export default SuperDepartment;