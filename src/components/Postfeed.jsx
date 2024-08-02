import React from 'react'
import user from '../assets/user.png'

function Postfeed() {
  return (
    
    <div className='m-5' style={{backgroundColor:'white'}}>
        <div className='d-flex'>
            <img src={user} alt="" width={'30px'} height={'30px'} />
            <h6>username</h6>
        </div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPK7gzVvAp5IQtgW5OUuTUDyfVZSMU5RvxKQ&s" alt="" width={'100%'} height={'90%'}/>

        <h3>username</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate praesentium aut provident fugiat. Doloribus, earum. Accusantium maxime eligendi tempora quis totam! Tempore inventore veniam corrupti at iste, magnam vel?</p>
        <hr />

    </div>
    
  )
}

export default Postfeed