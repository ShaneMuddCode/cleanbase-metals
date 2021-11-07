import './App.scss'
import NavbarTop from './components/NavbarTop'
import HomeScreen from './screens/HomeScreen'
import FocusScreen from './screens/FocusScreen'
import MapScreen from './screens/MapScreen'
import AboutScreen from './screens/AboutScreen'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarTop />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/focus' component={FocusScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/map' component={MapScreen} />
      </Switch>
    </Router>
  )
}

export default App
