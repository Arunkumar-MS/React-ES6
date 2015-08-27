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
        document.getElementById('subDepartmentMenu').style.display='none';
        document.getElementById('aisle').style.display='none';
    }
    render() {
        var self = this;
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Navigation</a>
                </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                {this.props.items.map(function(item){
                     var caretClassName ='';
                    if(item == 'Groceries'){
                        caretClassName = "caret";
                    }
                    return (<li className="dropdown"   onClick={self.handleClick.bind(this, item)}>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">{item}<b className={caretClassName}></b> </a>
                    </li>);
                })}
            </ul>
            </div>
            </div>
            </nav>
        )
    }
}

Navigation.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};

export default Navigation;