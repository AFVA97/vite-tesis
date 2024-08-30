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
            return <LayoutFacultad  _id={params._id}/>;
            case "Pregrado":
              return <LayoutPregrado _id={params._id}/>;
            case "Posgrado":
              return <LayoutPosgrado _id={params._id}/>;
            case "Investigación Científica":
              return <LayoutInvCient _id={params._id}/>;
            case "Extensión Universitaria":
              return <LayoutExtUniv _id={params._id}/>;
            default:
                return <LayoutInicio _id={params._id}/>;
          }
    }
    return(
        <>
          <div className="sticky-top ">
            <InfoNavBar {...{title}}/>
            <TitleLayout _id={params._id} isprofesor={(title==="Facultad")?(false):(true)} />
          </div>
            {
                layout()
            }
        </>
    )
};
export default infoScreen;

