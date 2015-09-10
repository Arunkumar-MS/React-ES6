import React from 'react';
import request from 'request';
import MenuAction from './Action/menuAction';
import MenuItem from './menuItem';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {test: 'hello'};
    }
    componentWillMount() {
         MenuAction.getMenuData();   
    }
    handleMenuClick(name, e){
        if(name === 'Groceries'){
            React.render(<MenuItem />, e.currentTarget.lastChild);
        }
    }
    renderMenu(item){
        var caretClassName ='';
        if(item == 'Groceries'){
            caretClassName = "caret";
        }
        
        return (<li className="dropdown" onClick={this.handleMenuClick.bind(this,item)}>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">{item}<b className={caretClassName}></b></a>
                  <ul className="dropdown-menu">
                  </ul>
                </li>);
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
                        {this.props.items.map(item => self.renderMenu(item))}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Menu.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};

export default Menu;