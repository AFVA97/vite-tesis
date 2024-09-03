import Header from '../Header_Teach'
import PosgradoLayout from '../layouts/PosgradoLayout'
import PregradoLayout from '../layouts/PregradoLayout'
import ExUnivLayout from '../layouts/ExUnivLayout'
import InvCientLayout from '../layouts/InvCientLayout'
import { useAuth } from '../../../context/authContext'
import { useEffect } from 'react'
import { get } from 'mongoose'

function inicio({user}) {
  
  
    return (
      <>
        <div className='sticky-top'>
          <Header username={user.username} _id={user.ciuser}/>
        </div>
        <div className='text-center'>
          <h3 >Pregrados</h3>
          <PregradoLayout user={user}/>
        </div>
        
        <div className='text-center'>
          <h3 >Posgrados</h3>
          <PosgradoLayout user={user}/>
        </div>
        <div className='text-center'>
          <h3 >Investigación Científica</h3>
          <InvCientLayout user={user}/>
        </div>
        <div className='text-center'>
          <h3 >Extensión Universitaria</h3>
          <ExUnivLayout user={user}/>
        </div>
      </>
    )
  }
  
  export default inicio