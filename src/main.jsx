import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const theme = {
    mainColor: '#d13834',
    secondaryColor: '#fecb22',
    mainColorLight: '#FAEBEA',
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
