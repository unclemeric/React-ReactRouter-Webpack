/**
 * Created by Meric on 2016/10/14.
 */
var mongoose = require('mongoose'),
    config = require('../config');

global.Promise = require('bluebird');
mongoose.Promise = global.Promise;

mongoose.connect(config.db,{
    server:{poolSize:20},
    function(err){
        if(err){
            console.error('connect to %s error: ',config.db,err.message);
            process.exit();
        }
    }
});

require('./user');

exports.User = mongoose.model('User');
