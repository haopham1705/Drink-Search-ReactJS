import React, { Component } from 'react'
import './display_user.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <h1 className="head-title">Welcome <span className="username-text">{this.props.infoUser.userName}</span> </h1>
            </div>
        )
    }
}
