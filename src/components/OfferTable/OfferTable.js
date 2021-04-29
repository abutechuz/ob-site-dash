import React from 'react'
import TableController from '../TableContoller/TableController'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import './OfferTable.scss'

function OfferTable() {
    const [page, setPage] = React.useState(1)

    const elList = React.useRef(null)

    const [elements, setElements] = React.useState(0)

    const fetchProjects = (page = 0) => client('advices?limit=5&page=' + page)

    const { data, isSuccess } = useQuery(
        ['advices', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList.current.childElementCount)
    }, [data])
    return (
        <div className='offer-list__wrapper'>
            <h2 className='offer-section__heading title'>Barcha Takliflar</h2>
            <ul className='offer-list' ref={elList}>
                {isSuccess &&
                    data?.map((offer) => (
                        <li
                            className='offer-list__item'
                            key={offer.id + +Math.random()}>
                            <div className='offer-list__id'>{offer?.id}.</div>
                            <div className='offer-list__right-box'>
                                <h3 className='offer-list__username'>
                                    {offer?.username}
                                </h3>
                                <small className='offer-list__date'>
                                    {offer?.time}
                                </small>
                            </div>
                            <div className='offer-list__offer'>
                                {offer?.advice}
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

export default OfferTable
