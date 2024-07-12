import PropTypes from "prop-types"
import InfoNavBar from "./infoNavBar"
import LayoutInicio from "./layouts/layoutInicio"
import LayoutPregrado from "./layouts/layoutPregrado"
import LayoutPosgrado from "./layouts/layoutPosgrado"
import LayoutInvCient from "./layouts/layoutInvCient"
import LayoutExtUniv from "./layouts/layoutExtUniv"


function infoScreen({title}){
    function layout(){
        switch(title){
            case "Pregrado":
              return <LayoutPregrado/>;
            case "Posgrado":
              return <LayoutPosgrado/>;
            case "Investigación Científica":
              return <LayoutInvCient/>;
            case "Extensión Universitaria":
              return <LayoutExtUniv/>;
            default:
                return <LayoutInicio/>;
          }
    }

    return(
        <>
            <InfoNavBar {...title}/>
            {
                layout()
            }
        </>
    )
};
export default infoScreen;

infoScreen.propTypes={
    id:PropTypes.string
  }