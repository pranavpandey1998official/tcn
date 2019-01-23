import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import  firebase from '../config/fbConfig';


const Store = createStore(rootReducer, 
    compose(
    applyMiddleware(
        thunk.withExtraArgument( { getFirebase , getFirestore} )),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase,{useFirestoreForProfile: true,  userProfile:'users',attachAuthIsReady: true}),   
    )
    );

export default Store;