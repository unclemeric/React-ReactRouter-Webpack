/**
 * Created by Meric on 2016/10/11.
 */
import React from 'react'
import '../../../css/base.scss'
import '../../../scss/font-awesome.scss'
import './style.scss'

class MyOrderBar extends React.Component {
    render() {
        return <div className="user-center-bar order-bar  mb-20  mt-20">
            <a className="fs-28 display-in-b left">
                <i className="fa fa-list-alt"></i>
                我的订单
            </a>
            <a className="fs-28 display-in-b right">全部订单</a>
            <span className="arrow fs-30 pull-right">
                <i className="fa fa-angle-right fs-20"></i>
            </span>
        </div>;
    }
}

export default MyOrderBar