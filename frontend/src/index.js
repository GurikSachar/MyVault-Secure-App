import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { DocumentsContextProvider } from './context/DocumentsContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DocumentsContextProvider>
        <App />
      </DocumentsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)