/**
 * Created by Meric on 2016/10/14.
 */
var path = require('path');

var config = {
    // mongodb 配置
    db: 'mongodb://127.0.0.1/react-node-db',
    // 程序运行的端口
    port: 3000,
    name:'node-react项目'
}
if (process.env.NODE_ENV === 'test') {
    config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;