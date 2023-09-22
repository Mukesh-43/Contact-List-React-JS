import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // so this will overwrite bootstrap
import { BrowserRouter as Router } from 'react-router-dom'; //getting routers from react-router-dom

import { legacy_createStore as createStore} from 'redux';  // getting createStore from redux
import reducer from './Redux-reducers/reducer';     // getting reducer from the destination
import { composeWithDevTools } from 'redux-devtools-extension'; // this acts as an enhancer
import { Provider } from 'react-redux'; // Provider connects with the redux store and delivers action

const store = createStore(reducer, composeWithDevTools());// create store requires two parameters (reducer, enhancer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>{/* passing store with provider */}
        <Router>
            <App /> {/* This'll call app component */}
        </Router>
    </Provider>
  </React.StrictMode>
);
