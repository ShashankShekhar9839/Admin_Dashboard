import React, { useState } from "react";
import "./sidebar.css";
import { sidebarData } from "../../data/data";



const SideBar = () => {
  const [selected,setSelected]=useState(0);



  return (
    <div className="Sidebar">
      {/* div for logo and name of the shop */}
      <div className="logo">
        <img
          className="logo-img"
          src="https://cdn3d.iconscout.com/3d/premium/preview/shopping-love-3025711-2526909@0.png?w=0&h=1400&f=jpeg"
          alt=""
        />
        <span>Dukan</span>
      </div>

      {/* div for menu */}
      
      <div className="menu">
       {
        sidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menu-item active':'menu-item' }
            key={index}
            onClick={()=>setSelected(index)}>
              <span>{item}</span>
            </div>
          )
        })
       }

      </div>



    </div>
  );
};

export default SideBar;
