import { ActionTypes } from "../../constants/constant"
import { LOGIN_API } from "../../config/config"
import axios from "axios"


export const setLogInResponse = (response) => {
    return {
        type: ActionTypes.LOGIN,
        payload: response
    }
}


export const userLogin = async (email, password,dispatch) => {
    const loginCred = {
        email: email,
        password: password
    }
    console.log("login cred", loginCred);
    return axios.post(LOGIN_API.LOGIN_API_URL, loginCred).then(response => {
        localStorage.setItem("Usertoken", response.data.data.token)
        localStorage.setItem("Useremail", response.data.data.email)
        localStorage.setItem("UserName", response.data.data.fullName)
        dispatch(setLogInResponse(response))
        return response
    }).catch(error => {
        return error
    })
}