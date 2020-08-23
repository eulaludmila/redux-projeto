import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Reservas from './pages/Reservas'
import Header from './components/Header'

export default function Routes() {
    return(
        <Switch>
            {/* <Header/> */}
            <Route path="/" exact component={Home}/>
            <Route path="/reservas" component={Reservas}/>
        </Switch>
    )
}