import Header from '../Header_Teach'
import ThPregrado from './TableHead/thPregrado'
import ElementPregrado from './Elements/elementPregrado'
import ThPosgrado from './TableHead/thPosgrado'
import ElementPosgrado from './Elements/elementPosgrado'
import ThInvCient from './TableHead/thInvCient'
import ElementInvCient from './Elements/elementInvCient'
import ThExtUniv from './TableHead/thExtUniv'
import ElementExtUniv from './Elements/elementExtUniv'
import PosgradoLayout from '../layouts/PosgradoLayout'
import PregradoLayout from '../layouts/PregradoLayout'
import ExUnivLayout from '../layouts/ExUnivLayout'
import InvCientLayout from '../layouts/InvCientLayout'
import { useAuth } from '../../../context/authContext'

function inicio() {
  const{getProfile}=useAuth()
  const user=getProfile()
    return (
      <>
        <div className='sticky-top'>
          <Header username={user.username}/>
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