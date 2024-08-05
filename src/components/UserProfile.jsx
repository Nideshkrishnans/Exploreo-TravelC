import React from 'react'
import user from '../assets/user.png'
import Editprofile from './Editprofile'
import Uploadfeed from './Uploadfeed'

function UserProfile() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column shadow rounded my-4 p-3" >
        <div>
            <img src={user} alt="" style={{width:'250px'}}/>
        </div>
        <div>
            <h2 className='fw-bold'>AjuAkuEsh</h2>
        </div>
        <div>
            <p className='text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt commodi vel ipsam nostrum ad similique impedit neque. Doloribus sed qui nisi? Ullam explicabo rerum quis incidunt vitae itaque praesentium nihil.</p>
        </div>
              <div className='d-flex'>
                <p className='border me-2 rounded-5 px-3 py-1'>Male</p>
                <p className='border me-2 rounded-5 px-3 py-1'>No Smoking</p>
                <p className='border rounded-5 px-3 py-1'>No Alcohol</p>
              </div>

              <div className="mb-3 my-5">
              <Editprofile/>
              <Uploadfeed />
            </div>
        </div>
    </>
  )
}

export default UserProfile