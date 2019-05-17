import 'scss/style.scss';

import { AppContainer }     from 'react-hot-loader';
//Core
import React                from 'react';
import { render }           from 'react-dom';
// Root
import Root                 from './roots';

const renderRouter = (Component, element) => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        element
    );
};

const main = document.getElementById('main');

if (main) {
    renderRouter(Root, main);
}

if (module.hot) {
    module.hot.accept([
        './roots'
    ], () => {

        if (main) {
            const newRoot = require('./roots').default;
            renderRouter(newRoot, main);
        }
    });
}