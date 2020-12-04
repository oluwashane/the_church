import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Events from './pages/Events'
import GiveOnline from './pages/GiveOnline';
import PrayerForm from './PrayerFrom';
import Dash from '../components/pages/dashboard/Dash';
import AddEvent from '../components/pages/dashboard/AddEvent';
import PrayerRequest from '../components/pages/dashboard/PrayerRequest'
// import { monthlyEvent } from '../shared/events'

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/donate" component={GiveOnline} />
      <Route exact path="/prayer_request" component={PrayerForm} />
      <Route exact path="/admin" component={Dash} />
      <Route exact path="/new_event" component={AddEvent} />
      <Route exact path="/requests" component={PrayerRequest} />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Main
