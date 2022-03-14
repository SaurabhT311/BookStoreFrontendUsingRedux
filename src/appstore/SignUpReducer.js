import { ActionTypes } from "../constants/constant";

const initialState={
    userDetails:''
}

// const initialAction={
//     type:'',
//     payload:{}
// }

export const SignUpReducer=(state=initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.REGISTRATION:
            return{...state, payload}
        default:
            return state
            }
    }