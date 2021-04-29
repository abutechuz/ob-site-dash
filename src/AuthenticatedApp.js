import { Switch, Route } from 'react-router-dom'
import DashNav from './components/DashNav/DashNav'
import DashMain from './components/DashMain/DashMain'

import Orders from './screens/Orders/Orders'
import Offers from './screens/Offers/Offers'
import Stores from './screens/Stores/Stores'
import Categories from './screens/Categories/Categories'
import Products from './screens/Products/Products'
import Team from './screens/Team/Team'
import Videos from './screens/Videos/Videos'
import DashChart from './screens/DashChart/DashChart'
import Settings from './screens/Settings/Settings'

function AuthenticatedApp() {
    return (
        <>
            <div className='site-main'>
                <DashNav />
                <div className='site-content'>
                    <DashMain />
                    <Switch>
                        <Route path='/' component={Orders} exact />
                        <Route path='/offers' component={Offers} exact />
                        <Route path='/stores' component={Stores} exact />
                        <Route
                            path='/categories'
                            component={Categories}
                            exact
                        />
                        <Route path='/products' component={Products} exact />
                        <Route path='/team' component={Team} exact />
                        <Route path='/videos' component={Videos} exact />
                        <Route path='/settings' component={Settings} exact />
                        <Route path='/chart-stat' component={DashChart} />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default AuthenticatedApp
