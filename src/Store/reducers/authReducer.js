import { LOGIN_SUCCESS, LOGIN_ERROR,SIGNOUT_SUCCESS } from '../actions/actionTypes'

const initState = {
    authError:null
}

const authReducer = (state =initState , action) => {
    switch(action.type){
        case LOGIN_ERROR:
        return {
            ...state,
            authError : 'Login failed'
        }
        case LOGIN_SUCCESS:
        
            console.log("login sucess")

            return {
                ...state,
                authError: null
            }
        case SIGNOUT_SUCCESS:
            return{
                ...state,
                authError: null
            }
        default :
        return state
    }
}

export default authReducer;