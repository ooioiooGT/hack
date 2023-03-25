import React from 'react';
import Image1 from './image.svg';
import Memerycard from './memerycard';
import Placeimage from './placeholder.svg';
import Memcss from './styles.css'
import Banner from '../../components/topbanner';
import Navigation from '../../components/navigation';
import {db} from "../../api/firebase";


function rememberance() {
  var user = JSON.parse(localStorage.getItem('user'))
  db.collection('users').doc(user.uid).collection('relatives').get()
  .then((querySnapshot) => {
    // Loop through the query snapshot and retrieve the relevant fields for each user
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const name = data.name;
      console.log(name)

    });
  })
  return (
    <Navigation 
     body={
    <div className='rememberance'>
      <div className='navbar'>
        navbar
      </div>
      <div className='rememberance-page'>
        <div className='rememberance-image'>
            <img src={Image1} alt=''></img>
        </div>
        <div className='text-intor'>
            <Banner
                title='Memorials'
                body='“Our dead are never dead to us until we have forgotten them: they can be injured by us, they can be wounded; they know all our penitence, all our aching sense that their place is empty, all the kisses we bestow on the smallest relic of their presence.”
                ― George Eliot'
            />

        </div>
        <div className={Memcss.cardcontainer}>
            <Memerycard 
                imageurl={Placeimage}
                name = {name}
                comment = {"sweet girl"}

            />
            <Memerycard 
                imageurl={Placeimage}
                name = {"gilber chen "}
                comment = {"sweet girl"}

            />
            <Memerycard 
                imageurl={Placeimage}
                name = {"gilber chen "}
                comment = {"sweet girl"}
    /> 
        </div>
      </div>
    </div>
     }/>
  )
}
export default rememberance;
