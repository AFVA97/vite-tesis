import { useState } from "react"
import {  Link } from "react-router-dom"



function userAccount() {
    const [active, setactive] = useState("invisible")
    function onClick() {
        if(active==="invisible")
            setactive("visible")
        else
            setactive("invisible")
    }
    return(
        <>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img 
                            src="/user.svg" 
                            alt="Logo" 
                            width="30" 
                            height="24" 
                            className="d-inline-block align-text-top"
                        />  
                    </button>
                    <ul className="dropdown-menu dropstart">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>



            
              
            
        </>
    )
}
export default userAccount