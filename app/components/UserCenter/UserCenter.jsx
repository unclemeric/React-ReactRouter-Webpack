/**
 * Created by Meric on 2016/10/11.
 */
import React from 'react'
import UserHeaderBar from './UserHeaderBar/UserHeaderBar'
import MyOrderBar from './MyOrderBar/MyOrderBar'
import OrderManageBar from './OrderManageBar/OrderManageBar'
import SettingBar from './SettingBar/SettingBar'

class UserCenter extends React.Component {
    render() {
        return <div>
            <UserHeaderBar />
            <MyOrderBar />
            <OrderManageBar/>
            <SettingBar/>
        </div>
    }
}

export default UserCenter