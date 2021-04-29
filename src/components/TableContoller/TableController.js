import React from 'react'
import { IconPrev, IconNext } from '../Svgs/Svgs'
import './TableController.scss'

function TableController({ setPage, page, numberLi }) {
    function handlePrevClick(evt) {
        evt.preventDefault()

        if (page === 1) {
            setPage(1)
        } else {
            setPage((p) => p - 1)
        }
    }

    function handleNextClick(evt) {
        evt.preventDefault()

        setPage((p) => p + 1)
    }

    return (
        <div className='table-controllers'>
            <button
                className='table-control'
                onClick={handlePrevClick}
                disabled={page === 1 ? true : false}>
                <IconPrev />
            </button>
            <button
                className='table-control'
                onClick={handleNextClick}
                disabled={numberLi < 5 ? true : false}>
                <IconNext />
            </button>
        </div>
    )
}

export default TableController
