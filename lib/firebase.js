//have to load the firebase-admin in order to interact with the firebase project 
import admin from "firebase-admin";


//var serviceAccount = require("path/to/serviceAccountKey.json");

const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_PRIVATEKEY
);

/*
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
} catch(err) {
  if ( err.message.indexOf("already exists") === -1 ) {
    console.log("firebase err:", err.stack);
  }
}

export default admin.firestore();