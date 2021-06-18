import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog,
} from "@fortawesome/free-solid-svg-icons";

import './Header.scss';
const Header = () => {
    return(
       <div className = "header"> 
       <div className = "logo"> 
       <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"/>
                <span className = "help-text">
                  
                </span>
       </div>
       <div className = "action-btn">
            <FontAwesomeIcon className = "icon-block" icon = {faQuestionCircle}/>
            <FontAwesomeIcon className = "icon-block" icon = {faExclamationCircle}/>
            <FontAwesomeIcon className = "icon-block" icon = {faCog}/>
       </div>
       </div>
    )
}
export default Header; 