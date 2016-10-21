/**
 * Created by Meric on 2016/10/12.
 */
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname,'./build')));

app.use('/',function (req,res) {
    res.sendFile(path.resolve('build/index.html'));
});




app.listen(3003,function (req,res,error) {
    if(error){
        console.log('server error!');
        throw error;
    }
    console.log('server running on port 3003')
})