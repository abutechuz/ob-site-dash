import React from 'react'
import TableController from '../TableContoller/TableController'
import './SpeakerTable.scss'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'

function SpeakerTable() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)

    const fetchProjects = (page = 0) => client('speakers?limit=5&page=' + page)

    const { data, isSuccess } = useQuery(
        ['speakers', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])
    return (
        <div className='speaker-table__wrapper'>
            <h2 className='speaker-section__heading title'>
                Barcha Speaker uchun Takliflar
            </h2>
            <table className='speaker-table'>
                <thead className='speaker-table__head'>
                    <tr className='speaker-table__head-tr'>
                        <th className='speaker-table__head-th speaker-table__head-th--id'>
                            ID
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-name'>
                            Speaker ismi
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-surname'>
                            Speaker familiyasi
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-profession'>
                            Kasbi
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-age'>
                            Yoshi
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-work'>
                            Ish joyi
                        </th>
                        <th className='speaker-table__head-th speaker-table__head-th-time'>
                            Tavsiya etilgan vaqt
                        </th>
                    </tr>
                </thead>
                <tbody className='speaker-table__body' ref={elList}>
                    {isSuccess &&
                        data?.map((speaker) => (
                            <tr
                                className='speaker-table__body'
                                key={speaker.id + Math.random()}>
                                <td className='speaker-table__body-td speaker-table__body-td--id'>
                                    {speaker.id ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-name'>
                                    {speaker.name ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-surname'>
                                    {speaker.surname ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-profession'>
                                    {speaker.profession ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-age'>
                                    {speaker.age ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-work'>
                                    {speaker.workplace ?? '-'}
                                </td>
                                <td className='speaker-table__body-td speaker-table__body-td-time'>
                                    {speaker.time ?? '-'}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <TableController
                setPage={setPage}
                page={page}
                numberLi={elements}
            />
        </div>
    )
}

export default SpeakerTable
