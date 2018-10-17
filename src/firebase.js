import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBL6DStkwzRt7mqQaS_L3SWITDQy--CXYA",
  authDomain: "nba-app-9417e.firebaseapp.com",
  databaseURL: "https://nba-app-9417e.firebaseio.com",
  projectId: "nba-app-9417e",
  storageBucket: "nba-app-9417e.appspot.com",
  messagingSenderId: "107433586148"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos
}