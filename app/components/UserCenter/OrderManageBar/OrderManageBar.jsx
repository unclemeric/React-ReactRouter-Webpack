/**
 * Created by Meric on 2016/10/12.
 */
import React from 'react'
import '../../../css/base.scss'
import '../../../scss/font-awesome.scss'
import './style.scss'

class OrderManageBar extends React.Component {
    render() {
        return <div className="user-center-bar order-manage" >
            <span className="bar-title fs-28 display-in-b" >
                <a>
                    <i className="fa fa-rmb" />
                    订单管理
                </a>
                <span className="fs-26 tip" >
                    <i className="fa fa-circle red tip-number" >
                        <a>1</a>
                    </i>
                </span>
            </span>
            <span className="arrow pull-right" >
                <i className="fa fa-angle-right" />
            </span>
        </div>
    }
}
export default OrderManageBar