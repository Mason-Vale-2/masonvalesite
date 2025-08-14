import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global scroll override - disable scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Force scroll to top on page load
const forceScrollToTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

// Execute immediately
forceScrollToTop();

// Execute after DOM is ready
document.addEventListener('DOMContentLoaded', forceScrollToTop);

// Execute after window load
window.addEventListener('load', forceScrollToTop);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
