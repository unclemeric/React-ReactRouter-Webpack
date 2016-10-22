/**
 * Created by Meric on 2016/10/14.
 */
var path = require('path');

var config = {
    //client server ip
    clientIp:'localhost:3003',
    // clientIp:'http://lai.midea.com:3003',//http://lai.midea.com:3003为提供API接口的域名，设置这个之后可以跨域访问提供API的项目跨那个项目
    // mongodb 配置
    db: 'mongodb://127.0.0.1/react-node-db',
    // 程序运行的端口
    port: 80,
    name:'node-react项目'
}
if (process.env.NODE_ENV === 'test') {
    config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;