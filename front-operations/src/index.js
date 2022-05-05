import React from 'react';
import ReactDOM from 'react-dom/client';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es'; 

import { ChallengeApp } from './ChallengeApp';

import './styles/challengeApp.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <ChallengeApp />
    </MuiPickersUtilsProvider>
);
