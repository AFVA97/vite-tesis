import PropTypes from "prop-types"
import InfoNavBar from "./infoNavBar"
import LayoutInicio from "./layouts/layoutInicio"
import LayoutPregrado from "./layouts/layoutPregrado"
import LayoutPosgrado from "./layouts/layoutPosgrado"
import LayoutInvCient from "./layouts/layoutInvCient"
import LayoutExtUniv from "./layouts/layoutExtUniv"
import LayoutFacultad from "./layouts/layoutFacultad"
import TitleLayout from "./titleLayout";

import { useParams} from "react-router-dom"


function infoScreen({title}){
    const params=useParams();
    
    
    function layout(){
        switch(title){
          case "Facultad":
            return <LayoutFacultad  {...params}/>;
            case "Pregrado":
              return <LayoutPregrado {...params}/>;
            case "Posgrado":
              return <LayoutPosgrado {...params}/>;
            case "Investigación Científica":
              return <LayoutInvCient {...params}/>;
            case "Extensión Universitaria":
              return <LayoutExtUniv {...params}/>;
            default:
                return <LayoutInicio {...params}/>;
          }
    }
    return(
        <>
          <div className="sticky-top">
            <InfoNavBar {...{title}}/>
            <TitleLayout {...params} isprofesor={(title==="Facultad")?(false):(true)} />
          </div>
            {
                layout()
            }
            
        </>
    )
};
export default infoScreen;

infoScreen.propTypes={
    title:PropTypes.string
  }