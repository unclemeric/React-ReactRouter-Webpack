/**
 * Created by Administrator on 2016/9/6.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route,IndexRoute, Link,browserHistory,hashHistory,Redirect} from 'react-router'
import Home from './components/Home/Home'
import Items from './components/Items/Items'
import UserCenter from './components/UserCenter/UserCenter'
import ShopCar from './components/ShopCar/ShopCar'
import UserList from './components/Items/User/UserList'
import AddUser from './components/Items/User/AddUser'
import './css/base.scss'
class App extends React.Component {
    render() {
        return <div>
                <div className="wrap">
                   { this.props.children }
                </div>
                <div className="bottomNav">
                    <ul className="main-nav-menu fixedBottom">
                        <li className="fs-26 display-flex"><Link className="home" to="/index" /></li>
                        <li className="fs-26 display-flex"><Link className="all-list" to={{ pathname: "/items", query: { foo: 'bar' } }} /></li>
                        <li className="fs-26 display-flex"><Link className="car" to="/shopCar" /></li>
                        <li className="fs-26 display-flex"><Link className="setting" to={{ pathname: "/user", query: { foo: 'bar' } }} /></li>
                    </ul>
                </div>
            </div>
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="index" component={Home}/>
            <Route path="items" component={Items}>
                <IndexRoute component={UserList}/>
                <Route path="/list" component={UserList}/>
                <Route path="/item/add" component={AddUser}/>
             </Route>
            <Route path="shopCar" component={ShopCar}/>
            <Route path="user" component={UserCenter}/>
        </Route>
    </Router>,
    document.getElementById('app')
)