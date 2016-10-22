/**
 * Created by Meric on 2016/10/17.
 */
var App = {
    Config: {
        api_site_prefix: 'http://localhost/',
        // api_site_prefix: 'http://lai2.lai.com/',//http://lai2.lai.com/为另一个react的域名，设置这个之后可以让react项目跨域访问这个项目
    },
    API: {
        user: {
            userList: 'user/list',
            signup:'signup'
        }
    }
}

module.exports = App