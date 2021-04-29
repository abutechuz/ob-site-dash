import React from 'react'
import TableController from '../TableContoller/TableController'
import './UserTable.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function UserTable() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)

    const fetchProjects = (page = 0) => client('users?limit=5&page=' + page)

    const { data, isSuccess } = useQuery(
        ['users', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])

    return (
        <div className='user-table__wrapper'>
            <h2 className='user-section__heading title'>Foydalanuchilar</h2>
            <table className='user-table'>
                <thead className='user-table__head'>
                    <tr className='user-table__head-tr'>
                        <th className='user-table__head-th user-table__head-th-id'>
                            ID
                        </th>
                        <th className='user-table__head-th user-table__head-th-name'>
                            Ismi
                        </th>
                        <th className='user-table__head-th user-table__head-th-surname'>
                            Familiyasi
                        </th>
                        <th className='user-table__head-th user-table__head-th-profession'>
                            Kasbi
                        </th>
                        <th className='user-table__head-th user-table__head-th-birth'>
                            Tug'ilgan yili
                        </th>
                        <th className='user-table__head-th user-table__head-th-gender'>
                            Jins
                        </th>
                        <th className='user-table__head-th user-table__head-th-region'>
                            Region
                        </th>
                        <th className='user-table__head-th user-table__head-th-score'>
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody className='user-table__body' ref={elList}>
                    {isSuccess &&
                        data?.map((user, index) => (
                            <tr
                                className='user-table__body'
                                key={user.id + Math.random()}>
                                <td className='user-table__body-td user-table__body-td-id'>
                                    {user.id ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-name'>
                                    {user.name ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-surname'>
                                    {user.surname ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-profession'>
                                    {user.profession ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-birth'>
                                    {user.birthyear ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-gender'>
                                    {user.gender ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-region'>
                                    {user.region ?? '-'}
                                </td>
                                <td className='user-table__body-td user-table__body-td-score'>
                                    {user.score ?? '-'}
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

export default UserTable
