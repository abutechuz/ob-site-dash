import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashChartNav.scss'

function DashChartNav() {
    return (
        <ul className='dashchart-nav-list'>
            <li className='dashchart-nav-item'>
                <NavLink className='dashchart-nav-link' activeClassName='dashchart-nav-link--active' to='/chart-stat' exact>
                    Weekly
                </NavLink>
            </li>
            <li className='dashchart-nav-item'>
                <NavLink
                    className='dashchart-nav-link' activeClassName='dashchart-nav-link--active'
                    to='/chart-stat/monthly-stat' exact>
                    Monthly
                </NavLink>
            </li>
            <li className='dashchart-nav-item'>
                <NavLink
                    className='dashchart-nav-link' activeClassName='dashchart-nav-link--active'
                    to='/chart-stat/yearly-stat' exact>
                    Yearly
                </NavLink>
            </li>
        </ul>
    )
}

export default DashChartNav
