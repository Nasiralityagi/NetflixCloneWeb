import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';
import Navbar from './Navbar';

const AppRouter = () => (
    <BrowserRouter>
        <>
        <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);

export default AppRouter;