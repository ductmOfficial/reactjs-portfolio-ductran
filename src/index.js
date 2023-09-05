/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom/client';

// third-party
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// project imports
import { FirebaseContext } from 'context/firebase';
import { firebase } from 'lib/firebase.prod';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// style + assets
import 'assets/scss/style.scss';

// SwiperCore.use([Virtual, Navigation, Pagination]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
