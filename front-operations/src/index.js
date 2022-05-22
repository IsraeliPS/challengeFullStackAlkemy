import React from 'react';
import ReactDOM from 'react-dom/client';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es'; 
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Provider } from 'react-redux'

import { ChallengeApp } from './ChallengeApp';
import { generateStore } from './reducers/store';

import './styles/challengeApp.scss'
import { AuthenticateProvider } from './context/AuthenticateContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={generateStore()}>
        <AuthenticateProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <ChallengeApp />
            </MuiPickersUtilsProvider>
        </AuthenticateProvider>
    </Provider>
);
