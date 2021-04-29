import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StatChartWeekly from '../../components/StatChartWeekly/StatChartWeekly'
import StatChartMonthly from '../../components/StatChartMonthly/StatChartMonthly'
import StatChartYearly from '../../components/StatChartYearly/StatChartYearly'
import DashChartNav from '../../components/DashChartNav/DashChartNav'
import './DashChart.scss'

function DashChart() {
    return (
        <div className='dashchart-wrapper stats'>
            <DashChartNav />
            <h2 className='dashchart-heading'>Foydalanuvchilar qo'shilishi</h2>
            <Switch>
                <Route
                    path='/chart-stat'
                    component={StatChartWeekly}
                    exact
                />
                <Route
                    path='/chart-stat/monthly-stat'
                    component={StatChartMonthly}
                    exact
                />
                <Route
                    path='/chart-stat/yearly-stat'
                    component={StatChartYearly}
                    exact
                />
            </Switch>
        </div>
    )
}

export default DashChart
