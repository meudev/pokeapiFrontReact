import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import GenerationList from './pages/GenerationList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/generation" component={GenerationList} />
        </BrowserRouter>

    )
};

export default Routes;