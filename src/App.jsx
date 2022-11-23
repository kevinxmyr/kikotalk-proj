import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from './pages/Signup'

function App() {

  return (
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          {/* <Route path='/signup' component={Signup}/> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
