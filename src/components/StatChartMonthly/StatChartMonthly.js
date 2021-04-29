import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'
import moment from 'moment'
import './StatChartMonthly.scss'

function StatChartMonthly() {
    const { pathname } = useLocation()

    let dateMonth = moment(new Date()).format('M')
    let dateYear = new Date().getFullYear()

    const [month, setMonth] = React.useState(dateMonth)
    const [year, setYear] = React.useState(dateYear)

    const years = [dateYear - 3, dateYear - 1, dateYear]
    const months = [
        { stat: 0, monthnumber: 1, month_sm: 'Jan', month_bg: 'January' },
        { stat: 0, monthnumber: 2, month_sm: 'Feb', month_bg: 'February' },
        { stat: 0, monthnumber: 3, month_sm: 'Mar', month_bg: 'March' },
        { stat: 0, monthnumber: 4, month_sm: 'Apr', month_bg: 'April' },
        { stat: 0, monthnumber: 5, month_sm: 'May', month_bg: 'May' },
        { stat: 0, monthnumber: 6, month_sm: 'Jun', month_bg: 'June' },
        { stat: 0, monthnumber: 7, month_sm: 'Jul', month_bg: 'July' },
        { stat: 0, monthnumber: 8, month_sm: 'Aug', month_bg: 'August' },
        { stat: 0, monthnumber: 9, month_sm: 'Sep', month_bg: 'September' },
        { stat: 0, monthnumber: 10, month_sm: 'Oct', month_bg: 'October' },
        { stat: 0, monthnumber: 11, month_sm: 'Nov', month_bg: 'November' },
        { stat: 0, monthnumber: 12, month_sm: 'Dec', month_bg: 'December' },
    ]

    function findStatus(pathname) {
        if (pathname === '/chart-stat/monthly-stat') {
            return 'month/' + year + '/'
        } else {
            return ''
        }
    }

    const fetchProjects = (month) => {
        return client(findStatus(pathname) + month)
    }

    const { data: graph } = useQuery(
        ['chart-stat-month', month],
        () => fetchProjects(month),
        { keepPreviousData: true }
    )

    function handleChange(evt) {
        console.log(evt.target.value)
        setMonth(evt.target.value)
    }

    function handleYearChange(evt) {
        console.log(evt.target.value)
        setYear(evt.target.value)
    }

    let labelData = graph && graph.map((item) => item.day)
    let datasetData = graph && graph.map((item) => item.number)

    const data = {
        labels: labelData,
        datasets: [
            {
                label: moment(month).format('MMMM'),
                fill: false,
                data: datasetData,
                borderColor: ['#8fd6e1'],
                backgroundColor: ['#8fd6e1'],
                pointBackgroundColor: ['#1597bb'],
                pointBorderdColor: ['#8fd6e1'],
            },
        ],
    }
    return (
        <>
            <select
                className='month-select'
                name='user_month'
                onClick={handleChange}>
                <option defaultValue={month}>Select month</option>
                {months.map((n, i) => (
                    <option value={n.monthnumber} key={i + n}>
                        {n.month_bg}
                    </option>
                ))}
            </select>

            <select
                className='month-select'
                name='user_month'
                onClick={handleYearChange}>
                <option defaultValue={year}>Select year</option>
                {years.map((n, i) => (
                    <option value={n} key={i + n}>
                        {n}
                    </option>
                ))}
            </select>
            <Line data={data} width={500} />
        </>
    )
}

export default StatChartMonthly
