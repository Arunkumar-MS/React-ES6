import React from 'react';
import request from 'request';
import SuperDepartment from './superDepartment';

class Navigation extends React.Component {
    showSuperDepartment(){
        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        request.get({
                url: 'http://localhost:4000/navigation',
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {
                var menuItems = JSON.parse(body);
                
                React.render(<SuperDepartment menuItems={menuItems} />, document.getElementById('departmentMenu'));
            }.bind(this));
    }
    render() {
        var self = this;
        return (
            <div>
                {this.props.items.map(function(item){
                    return (<div onClick={self.showSuperDepartment.bind(this)}>
                        <a>{item}</a>
                    </div>);
                })}

            </div>
        )
    }
}

Navigation.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};


export default Navigation;