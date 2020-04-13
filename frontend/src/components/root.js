import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { fetchUser } from '../actions/auth_actions';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.dispatch(fetchUser());
        }
    })
    return (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    )
    };

export default Root;