/**
 * Created by Meric on 2016/10/11.
 */
import React from 'react'
import './style.scss'
import '../../../css/base.scss'

class UserHeaderBar extends React.Component {
    render() {
        var img_path = "";
        return <div className="user-center-bar user-header" >
            <img className="header-pic" src={ img_path || require('./header.png') }/>
            <h3 className="user-name fs-30" >Meric Lai</h3>
            <span className="arrow pull-right" >
                <i className="fa fa-angle-right" />
            </span>
        </div>
    }
}

export default UserHeaderBar