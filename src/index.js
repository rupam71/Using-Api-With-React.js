import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './component/Rout';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Rout />
</BrowserRouter>, document.getElementById('root'));
