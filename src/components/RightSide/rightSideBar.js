import React from 'react'
import '../RightSide/rightside.css';
import Updates from '../Updates/updates';

const RightSideBar = () => {
  return (
    <div className='right-side'>
        <div>
        <h3>Updates</h3>
        <Updates/>
        </div>
    </div>
  )
}

export default RightSideBar;
