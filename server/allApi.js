
import {commonApi} from './commonApi';
const serverURl = "http://localhost:4000"

//register
export const registerApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURl}/usersdetails`,reqBody) 
}

//getUser

export const getUserApi = async()=>{
    return await commonApi("GET", `${serverURl}/usersdetails`,"" )
}