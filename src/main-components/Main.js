import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Profile from './Profile';
import BestBooks from './BestBooks'
import Favorites from './fav-components/Favorites'


import {
    Switch,
    Route
} from "react-router-dom";

class Main extends Component {

    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        {isAuthenticated ? <BestBooks /> : <Login />}
                    </Route>
                    <Route exact path="/profile">

                        <Profile />
                    </Route>
                    <Route exact path="/favorites">

                        <Favorites />
                    </Route>
                </Switch>

            </div>
        );
    }
}

export default withAuth0(Main);
