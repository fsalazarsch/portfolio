import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Solo establecer idioma por defecto si no existe uno guardado
if (!localStorage.getItem('language')) {
  const userLang = (navigator.language || navigator.userLanguage).split('-')[0];
  // Validar que el idioma sea uno de los soportados (es, en, pt)
  const supportedLangs = ['es', 'en', 'pt'];
  const defaultLang = supportedLangs.includes(userLang) ? userLang : 'en';
  localStorage.setItem('language', defaultLang);
} 

// Initialize theme - check localStorage first, then cookie, then system preference
const getInitialTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  
  // Check cookie if js-cookie is available (loaded in index.html)
  if (typeof window !== 'undefined' && window.Cookies) {
    const cookieMode = window.Cookies.get('mode');
    if (cookieMode === 'dark-mode') {
      return 'dark';
    }
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

const initialTheme = getInitialTheme();
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', initialTheme);
}

document.body.classList.add(localStorage.getItem('theme') + '-mode');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
