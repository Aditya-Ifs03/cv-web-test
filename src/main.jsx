import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles first so component styles can override the base layer.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
