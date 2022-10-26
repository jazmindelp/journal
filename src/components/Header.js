import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{

    const [showAboutMe, setShowAboutMe] = useState(false);

    return(
        <div className="header">
            <div id="app-title">
                <NavLink to={{pathname: '/'}}>
                journal
                </NavLink>
            </div>

            <div className="header-info">
               
                <div className="header-item"
                    onMouseEnter={() => setShowAboutMe(true)}
                    onMouseLeave={() => setShowAboutMe(false)}>
                    About me

                {showAboutMe && (
          
            <ul className="list-about-me">
                <li> 
                    <a href="https://www.linkedin.com/in/jazm%C3%ADn-del-puerto-61397222a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/jazmindelp" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
            </ul>
        
      )}
            
            </div>
            </div>
        </div>
    )
}

export default Header;
