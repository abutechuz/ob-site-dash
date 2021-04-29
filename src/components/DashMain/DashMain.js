import React from 'react'
import { Link } from 'react-router-dom'
import './DashMain.scss'
import { Male, Female, Statistik } from '../Svgs/Svgs'
import Container from '../Container/Container'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function DashMain() {
    const { data, isSuccess } = useQuery({
        queryKey: 'gender',
        queryFn: () => client('gender'),
    })
    const { data: users, isSuccess: isSuccessUser } = useQuery({
        queryKey: 'users',
        queryFn: () => client('users'),
    })

    return (
        <>
            <section className='genral-stat'>
                <Container className='genral-stat__container'>
                    <ul className='genral-stat__list'>
                        <li className='genral-stat__item'>
                            <div className='genral-stat__item-top'>
                                <p className='genral-stat__item-text'>Orders</p>
                                <Link
                                    className='genral-stat__item-svg-link'
                                    to='/chart-stat'>
                                    <Statistik
                                        className='genral-stat__item-svg'
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                            <div className='genral-stat__item-botom'>
                                <span className='genral-stat__item-span'>
                                    {isSuccessUser && users?.length + ' people'}
                                </span>
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default DashMain
