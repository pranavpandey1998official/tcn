import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from './actionTypes'


export const signIn = ( credentials ) => {
    return (dispatch,getState, { getFirebase }) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.username,
            credentials.password
        ).then(() => {
            
            dispatch({type: LOGIN_SUCCESS})
        }).catch((err) => {
            console.log("wrong")
            dispatch( { type: LOGIN_ERROR ,err})
        })
    }
}

export const signOut = () => {
    return (dispatch,getState, {getFirebase} ) => {
        const firebase =getFirebase();
          
        firebase.auth().signOut().then(()=>{
            dispatch({ type: SIGNOUT_SUCCESS})
        })
    }
}