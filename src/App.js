import './App.scss'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnAuthenticatedApp from './UnAuthenticatedApp.js'
import useToken from './hooks/useToken'

function App() {
    const [token] = useToken()
    if (token) {
        return <AuthenticatedApp />
    } else {
        return <UnAuthenticatedApp />
    }
}

export default App
