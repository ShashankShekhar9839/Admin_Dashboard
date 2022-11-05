import React from 'react'
import '../Cards/cards.css';
import Card from '../card/card';
import { cardData } from '../../data/data'; 

const Cards = () => {
  return (
    <div className='cards'>
       {
        cardData.map((card,id)=>{
            return(
                <div className='parent-container'>
                    <Card
                     
                     title={card.title}
                     color={card.color}
                     barValue={card.barValue}
                     value={card.value}
                     series={card.series}


                    />
                </div>
            )
        })
       }

    </div>
  )
}

export default Cards;
 