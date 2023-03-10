import React from 'react'

const List = (props) => {
  return (
   <>
   <div className='parentBlock'>
    <div className='mainBlock'>
    <h1>{props.payload[0].movieName}</h1>
    <h1>{props.payload[0].heroName}</h1>
    <h1>{props.payload[0].heroinName}</h1>
    <h1>{props.payload[0].collection}</h1>
    </div>

    <div className='mainBlock'>
    <h1>{props.payload[1].movieName}</h1>
    <h1>{props.payload[1].heroName}</h1>
    <h1>{props.payload[1].heroinName}</h1>
    <h1>{props.payload[1].collection}</h1>
    </div>

    <div className='mainBlock'>
    <h1>{props.payload[2].movieName}</h1>
    <h1>{props.payload[2].heroName}</h1>
    <h1>{props.payload[2].heroinName}</h1>
    <h1>{props.payload[2].collection}</h1>
    </div>
     
    <div className='mainBlock'>
    <h1>{props.payload[3].movieName}</h1>
    <h1>{props.payload[3].heroName}</h1>
    <h1>{props.payload[3].heroinName}</h1>
    <h1>{props.payload[3].collection}</h1>
    </div>

    <div className='mainBlock'>
    <h1>{props.payload[4].movieName}</h1>
    <h1>{props.payload[4].heroName}</h1>
    <h1>{props.payload[4].heroinName}</h1>
    <h1>{props.payload[4].collection}</h1>
    </div>

    <div className='mainBlock'>
    <h1>{props.payload[5].movieName}</h1>
    <h1>{props.payload[5].heroName}</h1>
    <h1>{props.payload[5].heroinName}</h1>
    <h1>{props.payload[5].collection}</h1>
    </div>

   </div>
   <  div className='main1'>
    <div className='sub1'>
    
    <h1>{props.payload[6].movieName}</h1>
    <h1>{props.payload[6].heroName}</h1>
    <h1>{props.payload[6].heroinName}</h1>
    <h1>{props.payload[6].collection}</h1>
    </div>
   
   <div className='sub1'>
    <h1>{props.payload[7].movieName}</h1>
    <h1>{props.payload[7].heroName}</h1>
    <h1>{props.payload[7].heroinName}</h1>
    <h1>{props.payload[7].collection}</h1>
    </div>

    <div className='sub1'>
    <h1>{props.payload[8].movieName}</h1>
    <h1>{props.payload[8].heroName}</h1>
    <h1>{props.payload[8].heroinName}</h1>
    <h1>{props.payload[8].collection}</h1>
    </div>
      
    <div className='sub1'>
    <h1>{props.payload[9].movieName}</h1>
    <h1>{props.payload[9].heroName}</h1>
    <h1>{props.payload[9].heroinName}</h1>
    <h1>{props.payload[9].collection}</h1>
    </div>

    <div className='sub1'>
    <h1>{props.payload[10].movieName}</h1>
    <h1>{props.payload[10].heroName}</h1>
    <h1>{props.payload[10].heroinName}</h1>
    <h1>{props.payload[10].collection}</h1>
    </div>
    
    </div>
   </>
  )
}

export default List