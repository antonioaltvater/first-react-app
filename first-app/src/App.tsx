import React from 'react';

import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/index';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
}

export default App;
