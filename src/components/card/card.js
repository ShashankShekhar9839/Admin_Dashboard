import React, { useState } from 'react'
import '../card/card.css';

// for making circular charts, this react library is used

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// importng chart from apex chart library
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded,setExpanded]=useState(false);

  return (
        <>
             {
              expanded?(
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
             
              ):
              <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
             }
             </>
  )
}

function CompactCard({param,setExpanded}){



  return(
    <div onClick={setExpanded} className='compact-card'
      style={{
        background:param.color.background,
        boxShadow:param.color.boxShadow
      }}
      >
{/* div for circular graph , a react library used for this */}
       <div className='radial-bar'>
        <CircularProgressbar 
         value={param.barValue}
         text={`${param.barValue}%`}
        />
       </div>

{/* div for showing details */}
       <div className='details'>
        <span>{param.title}</span>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
       </div>
    </div>
  )
}


// expanded card

function ExpandedCard({param,setExpanded}){
  const data={
    options:{
      chart:{
        type:'area',
        height:'auto',
        backGround:'red'
      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:1
      },

      fill:{
         colors:['#fff'],
         type:'gradient'

      },
      dataLabels:{
        enabled:false
      },

      grid:{
        show:true
      }


    }
  }
  return(
    <div className='expanded-card'
    style={{backGround : param.color.background,
    boxShadow:param.color.boxShadow
    }}
    >

      {/* cross for closing the expanded card */}
      <span className='x' onClick={setExpanded} style={{cursor:'pointer', alignSelf:'flex-end'}}>x</span>

    
      <span>{param.title}</span>
      <div className='chart-container'>
        <Chart series={param.series} type='area' options={data.options}/>
       
      </div>

      <span>Last 24 hours</span>
     

    </div>
  )
}

export default Card;
