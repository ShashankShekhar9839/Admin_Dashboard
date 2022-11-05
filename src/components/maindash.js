import React from 'react'
import '../components/maindash.css'
import Cards from './Cards/cards';
import Table from './Table/table';


const MainDash = () => {
  return (
    <div className='main-dash'>
        <h1>DashBoard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash;
