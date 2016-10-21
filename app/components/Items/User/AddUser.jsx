/**
 * Created by Meric on 2016/10/17.
 */
import React from 'react'
import {hashHistory,browserHistory} from 'react-router'
import './AddUser.scss'
import Validator from 'validator'
import App from '../../../../config'
import $ from 'jquery'

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:''
        }
        this.doSubmit = this.doSubmit.bind(this);
    }
    doSubmit() {
        var that = this;
        var loginname = Validator.trim(this.refs.loginname.value);
        var email = Validator.trim(this.refs.email.value);
        var pass = Validator.trim(this.refs.pass.value);
        var rePass = Validator.trim(this.refs.rePass.value);
        if ([loginname, pass, rePass, email].some(function (item) { return item === ''; })) {
            this.setState({
                message:'信息不完整'
            });
            return ;
        }
        if (loginname.length < 5) {
            this.setState({
                message:'用户名至少需要5个字符'
            });
            return;
        }
        var validateId = function (str) {
            return (/^[a-zA-Z0-9\-_]+$/i).test(str);
        };
        if (!validateId(loginname)) {
            this.setState({
                message:'用户名不合法'
            });
            return ;
        }
        if (!Validator.isEmail(email)) {
            this.setState({
                message:'邮箱不合法'
            });
            return ;
        }
        if (pass !== rePass) {
            this.setState({
                message:'两次密码输入不一致'
            });
            return ;
        }
        $.ajax({
            url:App.Config.api_site_prefix+App.API.user.signup,
            type:'get',
            data:{loginname:loginname,email:email,pass:pass,rePass:rePass},
            dataType:'json',
            success:function (data) {
                if(data.state == 1){
                    alert(data.message);
                    hashHistory.push('/items');
                }else {
                    that.setState({
                        message:data.message
                    });
                }
            },
            error:function (data) {
                that.setState({
                    users:[],
                    message:data.message||'api服务异常'
                });
            }
        });
    }
    render() {
        return <div className="save-form">
                    <div>
                        <h3 className="fs-30">注册</h3><span style={{margin:'0 .3rem',color:'red'}}>{this.state.message}</span>
                    </div>
                    <div>
                        <label htmlFor="loginname">登录名</label>
                        <input name="loginname" ref='loginname'/>
                    </div>
                    <div>
                        <label htmlFor="email">邮箱</label>
                        <input name="email" ref='email'/>
                    </div>
                    <div>
                        <label htmlFor="pass">密码</label>
                        <input name="pass" ref='pass'/>
                    </div>
                    <div>
                        <label htmlFor="re_pass">重复密码</label>
                        <input name="re_pass" ref='rePass'/>
                    </div>
                    <div className="button-container">
                        <button type="button" onClick={this.doSubmit}>提交</button>
                        <button type="button" onClick={function(){history.back(-1)}}>返回</button>
                    </div>
            </div>;
    }
}
export default AddUser