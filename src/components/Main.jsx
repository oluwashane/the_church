import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Events from './pages/Events'
import GiveOnline from './pages/GiveOnline';
import PrayerForm from './PrayerFrom';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardEvent from './pages/dashboard/DashboardEvent';
import DashboardPrayer from './pages/dashboard/DashBoardPrayer';
// import { monthlyEvent } from '../shared/events'

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/donate" component={GiveOnline} />
      <Route exact path="/prayer_request" component={PrayerForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/event" component={() => <DashboardEvent />} />
      <Route exact path="/dashboard/prayer_request" component={() => <DashboardPrayer />} />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Main
