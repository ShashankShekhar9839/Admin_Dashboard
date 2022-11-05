import React from 'react'
import '../Updates/updates.css';
import {updateData} from '../../data/data';

const Updates = () => {
  return (
    <div className='update'>
        {
            updateData.map((item)=>{
                return(
                    <div className='update-item'>
                        <div>
                        <img src={item.img} alt=""/>
                        </div>
                        <div className='notification'>
                            <span>{item.name}</span>
                            <span>{" "}{item.noti}</span>
                           
                            </div>
                            <span>{item.time}</span>
                           
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Updates;
