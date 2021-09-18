import React, { Component } from 'react'
import Notification from './Notification'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container' >
                <div className='row'>
                    <div className='col s12 m6' >
                    </div>
                    <div className='col s12 m5 offset-m1' >
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
