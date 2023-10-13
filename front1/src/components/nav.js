import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ServiceBooking from './serviceBooking'
import ServiceDetail from './serviceDetail'
import ServiceList from './serviceList'

class Nav1 extends Component {
    render(){
        return(
            <nav>
            <Link to="/" />
            <Link to="/service-detail/*"/>
            <Link to="/service-booking" />
            </nav>
        )
        }
}

export default Nav1;