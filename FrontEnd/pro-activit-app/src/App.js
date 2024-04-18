import './App.css';
import { Route, Routes } from 'react-router-dom';
import Activity from "./pages/activities/Activity";
import Client from './pages/clients/Client';
import DashBoard from './pages/dashboard/Dashboard';
import ClientForm from './pages/clients/ClientForm';
import PageNotFound from './pages/PageNotFound';

export default function App() {
    
    return (
        <Routes>
            <Route path='/' element={<DashBoard></DashBoard>}></Route>
            <Route path='/activity/list' element={<Activity></Activity>} ></Route>
            <Route path='/activity/*' element={<Activity></Activity>} ></Route>
            <Route path='/client/list' element={<Client></Client>} ></Route>
            <Route path='/client/*' element={<Client></Client>} ></Route>
            <Route path='/client/:id/activity' element={<Activity></Activity>} ></Route>
            <Route path='/client/detail/:id?' element={<ClientForm></ClientForm>} ></Route>
            <Route element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    );
};
