import React from 'react'

function Search() {
  return (
    <>
    <div className="search d-flex justify-content-center p-md-5 shadow mt-2 rounded" style={{border:'1px solid darkslateblue'}}>
        <form className='form-control'>
        <label htmlFor="text" className='m-2'>Destination</label>
        <input type="text" className='m-2 rounded' />
        <label htmlFor="text" className='m-2'>Date</label>
        <input type="date" className='m-2'/>
        <button>search</button>
        </form>
    </div>
    </>
  )
}

export default Search