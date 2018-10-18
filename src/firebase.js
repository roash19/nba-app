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
const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((snaphotChild) => {
    data.push({
      ...snaphotChild.val(),
      id: snaphotChild.key

    })
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}