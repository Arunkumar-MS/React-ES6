import React from 'react';

class SuperDepartment extends React.Component {
    render() {
        var superDepartment = [];
        for (var i = this.props.menuItems.length - 1; i >= 0; i--) {
            var item = this.props.menuItems[i];
            if(item.catId == null && item.parent==null)
            {
                superDepartment.push(item);
            }
        };
        document.getElementById('departmentMenu').style.display='block';

        var superDepartmentMenu = superDepartment.map(function(sd){
                  return  <a >{sd.name}</a>;
                });
        return (<div>
                {superDepartmentMenu}
            </div>
        )
    }
}



export default SuperDepartment;