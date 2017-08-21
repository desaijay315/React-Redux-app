import  {createStore, compse } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer;
import rootReducer from './reducers/index';

//default data from post,comments

import posts from './data/posts';
import comments from './data/comments';

const defaultSate = {
	posts : posts,
	comments : comments
};

const store = createStore(rootReducer, defaultSate);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
