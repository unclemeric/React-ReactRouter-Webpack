/**
 * Created by Meric on 2016/10/14.
 */
var validator      = require('validator');
var EventProxy     = require('eventproxy');
var config = require('../config');
var User = require('../proxy');

exports.signup = function (req,res,next) {
    var loginname = validator.trim(req.query.loginname).toLowerCase();
    var email     = validator.trim(req.query.email).toLowerCase();
    var pass      = validator.trim(req.query.pass);
    var rePass    = validator.trim(req.query.rePass);
    var ep = new EventProxy();
    ep.fail(next);
    ep.on('prop_err', function (msg) {
        res.status(422);
        res.send({state:0,message: msg});
    });

    if ([loginname, pass, rePass, email].some(function (item) { return item === ''; })) {
        ep.emit('prop_err', '信息不完整。');
        return;
    }
    if (loginname.length < 5) {
        ep.emit('prop_err', '用户名至少需要5个字符。');
        return;
    }
    var validateId = function (str) {
        return (/^[a-zA-Z0-9\-_]+$/i).test(str);
    };
    if (!validateId(loginname)) {
        return ep.emit('prop_err', '用户名不合法。');
    }
    if (!validator.isEmail(email)) {
        return ep.emit('prop_err', '邮箱不合法。');
    }
    if (pass !== rePass) {
        return ep.emit('prop_err', '两次密码输入不一致。');
    }

    User.save(loginname,pass,email,function (err) {
        if (err) {
            res.send({state:0,message:err.message});
            return ;
        }
        res.send({state:1,message:'欢迎加入 ' + config.name + '！'});
    });
}

exports.getPageList = function (req,res,next) {
    var page = Number(req.query.page) || 1;
    var limit = Number(req.query.limit) || 10;
    limit = limit > 1000 ? 1000 : limit;

    var proxy = new EventProxy();
    var write_data = function (users, pages) {
        res.send({
            users: users,
            current_page: page,
            pages: pages
        });
    };

    proxy.all('users', 'pages', write_data);
    proxy.fail(next);

    var opt = {skip: (page - 1) * limit, limit: limit, sort: '-score'};
    User.getList({}, opt, proxy.done('users'));
    User.getCount({}, proxy.done(function (all_user_count) {
        var pages = Math.ceil(all_user_count / limit);
        proxy.emit('pages', pages);
    }));
}