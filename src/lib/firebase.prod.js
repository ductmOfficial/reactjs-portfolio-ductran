import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCaYuTvgTv7K-q2Rtz02_K10_OKhoB0qo4',
  authDomain: 'react-portfolio-fe1de.firebaseapp.com',
  projectId: 'react-portfolio-fe1de',
  storageBucket: 'react-portfolio-fe1de.appspot.com',
  messagingSenderId: '77583195880',
  appId: '1:77583195880:web:8af89542aa590b2848735d',
};

const firebase = initializeApp(config);
const analytics = getAnalytics(firebase);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase();

// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
export { firebase, analytics };
