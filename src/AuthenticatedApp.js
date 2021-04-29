import { Switch, Route } from 'react-router-dom'
import DashNav from './components/DashNav/DashNav'
import DashMain from './components/DashMain/DashMain'
import Stat from './screens/Stat/Stat'
import Question from './screens/Question/Question'
import Offer from './screens/Offer/Offer'
import Speaker from './screens/Speaker/Speaker'
import Posts from './screens/Posts/Posts'
import User from './screens/User/User'
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
                        <Route path='/' component={Stat} exact />
                        <Route path='/chart-stat' component={DashChart} />
                        <Route path='/question' component={Question} exact />
                        <Route path='/offer' component={Offer} exact />
                        <Route path='/speaker' component={Speaker} exact />
                        <Route path='/posts' component={Posts} exact />
                        <Route path='/users' component={User} exact />
                        <Route path='/settings' component={Settings} exact />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default AuthenticatedApp
