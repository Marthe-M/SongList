import SongOverview from './Components/SongOverview'
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App () {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <ul className='nav-bar--list'>
          <li className='nav-bar--element'>
            <Link to='/SongOverview'>Home</Link>
          </li>
          <li className='nav-bar--element'>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li className='nav-bar--element'>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/SongOverview'>
            <SongOverview />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/'>
            <SongOverview />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
