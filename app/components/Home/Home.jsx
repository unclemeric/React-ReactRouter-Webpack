/**
 * Created by Meric on 2016/10/11.
 */
import React from 'react'
import { hashHistory, browserHistory } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    onClickHandle(e) {
        hashHistory.push("items");
    }
    render() {
        return (
            <div>
                <h6 className="fs-26">
                    Index
                    <a onClick={ this.onClickHandle }>点我跳到列表页</a>
                </h6>
                { this.props.children }
            </div>
        );
    }
}

export default Home;