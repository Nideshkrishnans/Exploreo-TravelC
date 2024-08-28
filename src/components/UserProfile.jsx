import React, { useEffect, useState } from 'react'
import dp from '../assets/dp.jpg'
import Editprofile from './Editprofile'
import Uploadfeed from './Uploadfeed'
import {getProfileApi} from '../../server/allApi'
import Updateprofile from './Updateprofile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLanguage, faLocationDot, faMobile, faSchool, faSmoking, faUser, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import dony from '../assets/dony.png'
import defaultk from '../assets/default.jpg'
import dony2 from '../assets/dony2.png'
import dony3 from '../assets/dony3.png'
import dony4 from '../assets/dony4.webp'
import dony5 from '../assets/dony5.webp'
import dony6 from '../assets/dony6.webp'


function UserProfile ({setAddPostStatus}) {

  const [profileDetails , setProfileDetails] = useState([]) 
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [setUpProfile,setSetUpProfile]=useState("")
  const [updateProfileStatus,setUpdateProfileStatus]=useState("")
console.log(profileDetails);


const getprofiledetails = async()=>{
  const result = await getProfileApi()
  setProfileDetails(result.data.map((item)=>item).filter((item)=>item.userName==`${userName}`))
}

console.log(profileDetails[0]?.avatarname);
const avatar1 =profileDetails[0]?.avatarname
console.log(avatar1);

sessionStorage.setItem("userProfileId",profileDetails[0]?.id)



useEffect(()=>{getprofiledetails()},[setUpProfile,updateProfileStatus])

  return (
    <>
{profileDetails[0] ?
    
      <div className="container shadow rounded my-4 p-3 " >
     
        <div className='text-center'>
        {avatar1=='david'? <img src={dony} alt="" style={{width:'90px',borderRadius:'50%'}} />
        : avatar1=='dony2'? <img src={dony2} alt="" style={{width:'90px',borderRadius:'50%'}} /> :
        avatar1=='dony3'? <img src={dony3} alt="" style={{width:'90px',borderRadius:'50%'}} /> :
        avatar1=='dony4'? <img src={dony4} alt="" style={{width:'90px',borderRadius:'50%'}}/> :
        avatar1=='dony5'? <img src={dony5} alt="" style={{width:'90px',borderRadius:'50%'}}/>:
        avatar1=='dony6'? <img src={dony6} alt="" style={{width:'90px',borderRadius:'50%'}}/>:
        <img src={defaultk} alt="" style={{width:'90px',borderRadius:'50%'}}/>
       }
      
          <h2 className='fw-bold mt-3'>{profileDetails[0]?.userName}</h2>
          
          <p style={{textAlign:'justify'}}>{profileDetails[0]?.bio}</p>
        </div>

        <div className="row ">
          <div className="col-md-5 text-center">
            <h5 className='fw-bold'>Personal Details</h5>
            <p>{profileDetails[0]?.gender && <FontAwesomeIcon icon={faUser} />} {profileDetails[0]?.gender} {profileDetails[0]?.age}</p>
            <p>{profileDetails[0]?.phonenum && <FontAwesomeIcon icon={faMobile} />} {profileDetails[0]?.phonenum}</p>
            <p>{profileDetails[0]?.education && <FontAwesomeIcon icon={faSchool} />} {profileDetails[0]?.education}</p>
            <p>{profileDetails[0]?.relationship && <FontAwesomeIcon icon={faHeart} />} {profileDetails[0]?.relationship}</p>
         
          </div>
          <div className="col-md-2 d-flex justify-content-around align-items-center">
            <div className='border bordered-dark' style={{height:"100%",width:"2px",backgroundColor:"black"}}></div>
          </div>
          <div className="col-md-5 text-center">
          <h5 className='fw-bold'>Other Details</h5>
          <p>{profileDetails[0]?.language && <FontAwesomeIcon icon={faLanguage} />} {profileDetails[0]?.language} </p>
          <p>{profileDetails[0]?.drinking && <FontAwesomeIcon icon={faWineGlass} />} {profileDetails[0]?.drinking}</p>
          <p>{profileDetails[0]?.smoking && <FontAwesomeIcon icon={faSmoking} />} {profileDetails[0]?.smoking}</p>
          <p>{profileDetails[0]?.location && <FontAwesomeIcon icon={faLocationDot} />} {profileDetails[0]?.location}</p>


          </div>
        </div>
              

        <div className="mb-3 my-5 d-flex justify-content-around align-items-center">
          <Updateprofile setUpdateProfileStatus={setUpdateProfileStatus}  profileDetails={profileDetails[0]}/>
          <Uploadfeed  setAddPostStatus={setAddPostStatus}/>
        </div>
      </div>
      :
      <div className='w-100 p-5 ms-md-5 '>
        <div className='ms-md-5'><Editprofile setSetUpProfile={setSetUpProfile}/></div>
      </div>
      }
      
    </> 
  )
}

export default UserProfile