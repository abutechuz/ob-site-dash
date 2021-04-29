import './App.scss'
import Login from './screens/Login/Login'

function UnAuthenticatedApp() {
    return (
        <>
            <div className='site-main'>
                <Login />
            </div>
        </>
    )
}

export default UnAuthenticatedApp
