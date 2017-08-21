import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react roture deps
import {Router,Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import App from './components/App';


const router = (
    <Provider store = {store}>
     <Router history = {history}>
         <Route path="/" component ={App}>
             <IndexRoute component  ={PhotoGrid}></IndexRoute>
             <Route path ="/view/:postiD" component={Single}></Route>
         </Route>
     </Router>
    </Provider>
);
render(router,  document.getElementById('root'));


