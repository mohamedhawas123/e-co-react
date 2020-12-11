import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDXuOYpsVPXYLz1Fg2HSNkQ97Ucfswcpq0",
    authDomain: "shop-db-4f506.firebaseapp.com",
    databaseURL: "https://shop-db-4f506.firebaseio.com",
    projectId: "shop-db-4f506",
    storageBucket: "shop-db-4f506.appspot.com",
    messagingSenderId: "860861898497",
    appId: "1:860861898497:web:b88283afb0a094d5264500",
    measurementId: "G-8YFQPSMNSE"
  };


  export const createUserProfile = async(userAuth, additionlData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userShot = await userRef.get()
    

    if(!userShot.exists) {
      const {displayName, email} = userAuth
      const createAt = new Date()
    

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionlData,
      })
    } catch(err) {
      console.log(err.message)
    }
  }
  return userRef;


  }

  


firebase.initializeApp(config);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)

  })

  return await batch.commit()

}


export const convertCollectionsSnapshotToMap = collections => {
  const transformCollection = collections.docs.map(doc=> {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })

    return transformCollection.reduce( (accum, collection) => {
      accum[collection.title.toLowerCase()] = collection
      return accum
    } )

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const proviver = new firebase.auth.GoogleAuthProvider();
proviver.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(proviver)





export default firebase