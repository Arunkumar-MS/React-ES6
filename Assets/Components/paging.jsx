import React from 'react';

class Paging extends React.Component {


    render() {
        return (

            <button className="more btn btn-primary btn-block" onClick="loadMore($event)">
                More <span className="caret"></span>
            </button>
        )}

}

export default Paging;
