import React from 'react'

function memerycard({imageurl, name , comment}) {
  return (
    <div className='card' >
        <div className='people-image'>
            <img src={imageurl} alt='' placeholder=''></img>
        </div>
        <div className='name'>
            <h3> {name} </h3>
        </div>
        <div className='comment'>
            <p>{comment}</p>
        </div>
      
    </div>
  )
}

export default memerycard
