/**
 * Created by Meric on 2016/10/11.
 */
import React from 'react'
import '../../css/base.scss'

class Items extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Items;