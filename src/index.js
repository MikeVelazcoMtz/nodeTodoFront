import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Todo from './Todo';
import registerServiceWorker from './registerServiceWorker';

const states = [
    {
        name: 'home',
        url: '/home',
        component: App
    },
    {
        name: 'todo',
        url: '/todo',
        component: Todo
    }
];

const config = router => router.urlService.rules.initial({state: 'home'});


const plugins = [pushStateLocationPlugin];



ReactDOM.render(
    <UIRouter plugins={plugins} states={states} config={config}>
        <UIView />
    </UIRouter>,
    document.getElementById('root'),
);
registerServiceWorker();
