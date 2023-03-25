import React from 'react';
import Cardcss from './card.css';

function memerycard({imageurl, name , comment}) {
  return (
    <div className={Cardcss.card} >
        <div className='people-image'>
            <img src={imageurl} alt='' placeholder=''></img>
        </div>
        <div className={Cardcss.name}>
            <h3> {name} </h3>
        </div>
        <div className={Cardcss.comment}>
            <p>{comment}</p>
        </div>
      
    </div>
  )
}

export default memerycard
