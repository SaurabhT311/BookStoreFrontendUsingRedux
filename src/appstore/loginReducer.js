import { ActionTypes } from "../constants/constant";

const initialState = {
    LogInuserDetails: ''
}

// const initialAction={
//     type:'',
//     payload:{}
// }

// export const loginReducer=(state=initialState,action=initialAction)=>{
// switch(action.type)
export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN:
            console.log("action",payload);
            // return {...state, userDetails: action.payload}
            return { ...state, payload }
        default:
            return state
    }
}