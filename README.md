# React-ReactRouter-Webpack
react project

├─.idea
├─app                           react目录
│  ├─components                组件文件夹
│  │  ├─Home
│  │  ├─Items
│  │  ├─ShopCar
│  │  └─UserCenter
│  │      ├─MyOrderBar
│  │      ├─OrderManageBar
│  │      ├─SettingBar
│  │      └─UserHeaderBar
│  ├─css
│  ├─fonts
│  ├─img
│  ├─scss
│  ├─img
│  ├─utils
│  ├─app.js                     api项目入口文件
│  ├─config.js                  配置文件(项目及数据库配置)
│  ├─package.json
│  └─web_router.js              express路由(api)
├─build
├─logs
└─server                        api接口服务
    ├─common                    工具类
    ├─controller                业务实现
    ├─models                    实体类
    └─proxy                     数据库操作
├─server.js                     react项目入口文件
└─webpack.config.js             webpack配置文件




first step: 安装全局npm install -g webpack webpack-dev-server nodemon
再安装package.json的库 npm install


react项目启动执行： 本地开发模式启动：webpack-dev-server --progress --colors --config webpack.config.js --port 80 或者执行npm命令:npm run dev-deploy    访问http://localhost
                    局域网、外网访问模式:先执行node deploy 再执行 node ./server.js 先执行node deploy 再执行 node start   访问http://localhost:3000
api项目启动执行(需安装mongodb才能运行)： node ./server/app.js   或 npm run server-start   访问http://localhost:4000


架构设计思路 ：
 react项目用于显示页面
 api项目用于提供react项目所需接口(现和react项目写在同一个项目，但是服务不同。可以另建一个项目,把server文件夹拷过去即可)
