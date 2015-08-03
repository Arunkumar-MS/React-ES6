import React from 'react';

class Navigation extends React.Component {
    render() {
        return (

            <div>
                {this.props.items.map(function(item){
                    return <h5> {item}</h5>;
                })}

            </div>
        )
    }
}

Navigation.defaultProps = {items: ['Groceries','Promotions','Favourites','MyOrder']};


export default Navigation;