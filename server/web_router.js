/**
 * Created by Meric on 2016/10/14.
 */
var express = require('express');
var router = express.Router();
var User = require('./controller/user')

router.get('/signup',User.signup);
router.get('/user/list',User.getPageList);

module.exports = router;

