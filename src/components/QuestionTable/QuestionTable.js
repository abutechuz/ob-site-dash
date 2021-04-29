import React from 'react'
import TableController from '../TableContoller/TableController'
import './QuestionTable.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function QuestionTable() {
    const [page, setPage] = React.useState(1)

    const elList = React.useRef(null)

    const [elements, setElements] = React.useState(0)

    const fetchProjects = (page = 0) => client('questions?limit=5&page=' + page)

    const { data, isSuccess } = useQuery(
        ['questions', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList.current.childElementCount)
    }, [data])
    return (
        <div className='question-list__wrapper'>
            <h2 className='question-section__heading title'>Barcha Savollar</h2>
            <ul className='question-list' id='question_list' ref={elList}>
                {isSuccess &&
                    data?.map((q) => (
                        <li
                            className='question-list__item'
                            key={q?.time + Math.random()}>
                            <div className='question-list__id'>{q?.id}.</div>
                            <div className='question-list__right-box'>
                                <h3 className='question-list__username'>
                                    {q?.username}
                                </h3>
                                <small className='question-list__date'>
                                    {q?.time}
                                </small>
                            </div>
                            <div className='question-list__question'>
                                {q?.question}
                            </div>
                        </li>
                    ))}
            </ul>

            <TableController
                setPage={setPage}
                page={page}
                numberLi={elements}
            />
        </div>
    )
}

export default QuestionTable
