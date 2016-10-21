/**
 * Created by Meric on 2016/10/14.
 */
var models  = require('../models');
var User    = models.User;//mongodb数据库对应表

exports.save = function (loginname,pass,email,callback) {
    var user = new User();
    user.name = loginname;
    user.loginname= loginname;
    user.pass = pass;
    user.email = email;
    user.save(callback);
}

exports.getList = function (query,opt,callback) {
    User.find(query,{}, opt, function (err, users) {
        if (err) {
            return callback(err);
        }
        if (users.length === 0) {
            return callback(null, []);
        }
        return callback(null, users);
    });
}
exports.getCount = function (query,callback) {
    User.count(query,callback);
}