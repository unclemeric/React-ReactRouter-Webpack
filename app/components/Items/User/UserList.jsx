/**
 * Created by Meric on 2016/10/17.
 */
import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import $ from 'jquery'
import App from '../../../../config'
import '../../../css/base.scss'
import '../../../scss/font-awesome.scss'
import './UserList.scss'

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        var that = this;
        $.ajax({
            url:App.Config.api_site_prefix+App.API.user.userList,
            type:'get',
            dataType:'json',
            success:function (data) {
                that.setState({
                    users:data.users
                });
            },
            error:function () {
                that.setState({
                    users:[]
                });
            }
        });
    }
    render() {
        return <div className="user-list">
            <div className="header">
                <span className="fs-26 pull-left">用户列表</span>
                <Link to="/item/add" className="fs-26 pull-right">新增</Link>
            </div>
            <ul>
                <li>
                    <span>name</span>
                    <span>password</span>
                    <span>email</span>
                    <span>score</span>
                </li>
                {
                    _.map(this.state.users,function (user,index) {
                        return <User key={index} index={index} user={user}/>;
                    })
                }
            </ul>
        </div>;
    }
}
class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let user =this.props.user;
        return user
            ? <li>
                <span title={user.loginname}>{user.loginname}</span>
                <span title={user.pass}>{user.pass}</span>
                <span title={user.email}>{user.email}</span>
                <span title={user.score}>{user.score}</span>
            </li>
            : null;
    }
}
export default UserList