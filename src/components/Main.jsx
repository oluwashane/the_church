import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Events from './pages/Events'
import GiveOnline from './pages/GiveOnline';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/donate" component={GiveOnline} />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Main
