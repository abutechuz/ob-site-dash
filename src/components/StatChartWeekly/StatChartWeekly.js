import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'

function StatChartWeekly() {
    const { pathname } = useLocation()

    function findStatus(pathname) {
        if (pathname === '/chart-stat') {
            return 'week'
        } else {
            return ''
        }
    }

    const { data: graph } = useQuery({
        queryKey: 'chart-stat-week',
        queryFn: () => {
            return client(findStatus(pathname))
        },
    })

    let labelData = graph && graph.map((item) => item.week)
    let datasetData = graph && graph.map((item) => item.entery_sum)

    const data = {
        labels: labelData,
        datasets: [
            {
                label: 'So\'nggi hafta',
                fill: false,
                data: datasetData,
                borderColor: ['rgba(81, 212, 170, 0.8'],
                backgroundColor: ['rgba(81, 212, 170, 0.8'],
                pointBackgroundColor: ['rgb(81, 175, 170'],
                pointBorderdColor: ['rgb(54,55,64'],
            },
        ],
    }
    return (
        <>
            <Line data={data} width={500} />
        </>
    )
}

export default StatChartWeekly
