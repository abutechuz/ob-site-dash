import './DashNav.scss'
import oBLogo from '../../assets/img/obLogo.png'
import {
    Statistik,
    Seting,
    IconGraph,
    IconQuestion,
    IconOffer,
    IconSpeakers,
    IconUsers,
    IconPost,
    IconWebsite,
} from '../Svgs/Svgs'
import { NavLink } from 'react-router-dom'

function DashNav() {
    return (
        <>
            <div className='site-navigation'>
                <div className='site-navigation__container'>
                    <NavLink className='site-navigation__logo-link' to='/'>
                        <p className='logo-heading'>
                            Osmondagi bolalar <br />
                            website
                        </p>
                    </NavLink>
                    <nav className='site-navigation__nav nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/'
                                    exact>
                                    <Statistik className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Orders
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/offers'>
                                    <IconGraph className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Offers
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/stores'>
                                    <IconQuestion className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Stores
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/categories'>
                                    <IconOffer className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Categories
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/products'>
                                    <IconSpeakers className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Products
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/team'>
                                    <IconUsers className='nav__link-svg' />
                                    <span className='nav__link-span'>Team</span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    className='nav__link'
                                    activeClassName='nav__link--active'
                                    to='/videos'>
                                    <IconPost className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Videos
                                    </span>
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <a
                                    className='nav__link'
                                    href='http://165.227.211.149/'>
                                    <IconWebsite className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Bot Dashboard
                                    </span>
                                </a>
                            </li>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to='/settings'>
                                    <Seting className='nav__link-svg' />
                                    <span className='nav__link-span'>
                                        Setings
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default DashNav
