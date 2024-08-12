import PregradoScreen from './pregradoScreen'
import PosgradoScreen from './posgradoScreen'
import ExtUnivScreen from './ext_univScreen'
import InvCientScreen from './inv_cientScreen'


function inicio() {
    return (
      <div>
        <PregradoScreen/>
        <PosgradoScreen/>
        <InvCientScreen/>
        <ExtUnivScreen/>
      </div>
    )
  }
  
  export default inicio