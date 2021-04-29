import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'

function StatChartYearly() {
    const { pathname } = useLocation()
    let dateYear = new Date().getFullYear()

    const [year, setYear] = React.useState(dateYear)

    function findStatus(pathname) {
        if (pathname === '/chart-stat/yearly-stat') {
            return 'year/' + year
        } else {
            return ''
        }
    }

    const fetchProjects = () => {
        return client(findStatus(pathname))
    }

    const { data: graph } = useQuery(
        ['chart-stat-year', year],
        () => fetchProjects(),
        { keepPreviousData: true }
    )

    const years = [dateYear - 2, dateYear - 1, dateYear]

    function handleYearChange(evt) {
        console.log(evt.target.value)
        setYear(evt.target.value)
    }

    let labelData = graph && graph.map((item) => item.month_bg)
    let datasetData = graph && graph.map((item) => item.stat)

    const data = {
        labels: labelData,
        datasets: [
            {
                label: year,
                fill: false,
                data: datasetData,
                borderColor: ['#fc8621'],
                backgroundColor: ['#fc8621'],
                pointBackgroundColor: ['#c24914'],
                pointBorderdColor: ['#c24914'],
            },
        ],
    }
    return (
        <>
            <select
                className='month-select'
                name='user_year'
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

export default StatChartYearly
