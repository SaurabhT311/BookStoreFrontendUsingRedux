import {ActionTypes} from '../../constants/constant'
import { REGISTRATION_API } from "../../config/config";
import axios from "axios";


export const setRegistrationResponse = (response) => {
    return {
        type: ActionTypes.REGISTRATION,
        payload: response
    }
}


export const userRegistration = async (name, email, mobile, password,dispatch) => {
    const regCreds = {
        fullName: name,
        email: email,
        mobile: mobile,
        password: password
    }
    return axios.post(REGISTRATION_API.REGISTRATION_API_URL, regCreds).then(response => {
        dispatch(setRegistrationResponse(response))
        return response;
    }).catch((error) => {
        console.log(error);
    })
}
