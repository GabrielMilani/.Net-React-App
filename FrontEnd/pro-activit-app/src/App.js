import './App.css';
import { Route, Switch } from 'react-router-dom';
import Activity from "./pages/activities/Activity";
import Client from './pages/clients/Client';
import DashBoard from './pages/dashboard/Dashboard';
import ClientForm from './pages/clients/ClientForm';
import PageNotFound from './pages/PageNotFound';

export default function App() {
    
    return (
        <Switch>
            <Route path='/' exact component={DashBoard} ></Route>
            <Route path='/activity/list' component={Activity} ></Route>
            <Route path='/client/list' component={Client} ></Route>
            <Route path='/client/:id/activity' component={Activity} ></Route>
            <Route path='/client/detail/:id?' component={ClientForm} ></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    );
};
