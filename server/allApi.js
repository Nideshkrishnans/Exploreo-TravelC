
import {commonApi} from './commonApi';
const serverURl = "https://exploreo-server.onrender.com"

//register
export const registerApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURl}/usersdetails`,reqBody) 
}

//getUser
export const getUserApi = async()=>{
    return await commonApi("GET", `${serverURl}/usersdetails`,"" )
}


//host a trip api
export const hostApi = async(reqBody)=>{
    return await commonApi('POST',`${serverURl}/host`,reqBody)
}

//code to get allhostdetails
export const getAllHostApi=async ()=>{
    return await commonApi('GET',`${serverURl}/host`,"")
 }



//add a feed
export const postfeedApi=async(reqBody)=>{
    return await commonApi ('POST',`${serverURl}/post`,reqBody)
}

//code to get allpostdetails
export const getAllPostApi=async ()=>{
    return await commonApi('GET',`${serverURl}/post`,"")
 }


 //code to add profile
 export const updateProfileApi=async(reqBody)=>{
    return await commonApi ('POST',`${serverURl}/profile`,reqBody)
}

//code to get user profile
export const getProfileApi=async ()=>{
    return await commonApi('GET',`${serverURl}/profile`,"")
 }

//code to delete trip host
export const deleteTripCard = async(id)=>{
    return await commonApi('DELETE',`${serverURl}/host/${id}`,{})
 } 

 export const updateProfile = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverURl}/profile/${id}`,reqBody)
 } 

 //code to delete trip host
export const deletePostCard = async(id)=>{
    return await commonApi('DELETE',`${serverURl}/Post/${id}`,{})
 } 
