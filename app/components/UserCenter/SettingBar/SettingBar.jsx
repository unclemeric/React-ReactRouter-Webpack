/**
 * Created by Meric on 2016/10/12.
 */
import React from 'react'
import '../../../css/base.scss'
import '../../../scss/font-awesome.scss'
import './style.scss'

class SettingBar extends React.Component {
    render() {
        return <div className="user-center-bar setting-info fs-28 mb-20 mt-20" >
            <a className="bar-title" >
                <i className="fa fa-gear" />
                设置
            </a>
        </div>;
    }
}
export default SettingBar