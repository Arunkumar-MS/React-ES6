import React from 'react';
import request from 'request';
import SuperDepartment from './superDepartment';
import {getMenuData , getMenu} from './Action/navigationAction';
import event from './Store/navigationStore';

class Navigation extends React.Component {
    
      constructor() {
        super();
        this.state = {test: 'hello'};

        this._onChange = this._onChange.bind(this);
    }
    _onChange() {
        this.setState({test: 'changed'});
        React.render(<SuperDepartment menuItems={JSON.parse(getMenu())} />, document.getElementById('departmentMenu'));
    }

    componentWillMount() {
        event.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        event.removeChangeListener(this._onChange);
    }
    handleClick(name, e) {
        if(name == 'Groceries'){
          getMenuData();
        }
        
        document.getElementById('departmentMenu').style.display='none';
    }
    render() {
        var self = this;
        return (
            <div>
                {this.props.items.map(function(item){
                    return (<div onClick={self.handleClick.bind(this, item)}>
                        <a>{item}</a>
                    </div>);
                })}

            </div>
        )
    }
}

Navigation.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};

export default Navigation;