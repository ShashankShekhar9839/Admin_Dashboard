export const sidebarData=["DashBoard","Orders","Customers","Products","Analytics"];

// cards data

export const cardData=[

    {
        title:'Sales',
        color:{
            background:"linear-gradient(90deg,#FFB6C1,#00FFFF,#FFFFFF)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:'25,970',
        series:[
            {
            name:'Sales',
            data:[31,40,28,51,42,109,100,130],
        },
    ],

    },

    {
        title:'Revenue',
        color:{
            background:"linear-gradient(90deg,#FFB6C1,#00FFFF,#FFFFFF)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:50,
        value:'25,970',
        series:[
            {
            name:'Expenses',
            data:[10,20,28,51,42,36,100],
        },
    ],
    },

    {
        title:'Expenses',
        color:{
            background:"linear-gradient(90deg,#FFB6C1,#00FFFF,#FFFFFF)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:90,
        value:'35,970',
        series:[
            {
            name:'Sales',
            data:[31,40,28,51,42,109,100],
        },
    ],
    }

    

]

// data for updates section

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

export const updateData= [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
      },
      {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
      },
      {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
      }
]