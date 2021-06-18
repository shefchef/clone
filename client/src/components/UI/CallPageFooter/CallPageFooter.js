import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserFriends,
    faCommentAlt,
    faUserCircle,
    faSmileBeam,
    faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

import './CallPageFooter.scss';


const CallPageHeader = () => {
    return (
        <div className="frame-header">
            <div className="header-items icon-block">
                <FontAwesomeIcon className = "icon" icon = {faUserFriends}/>

            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className = "icon" icon = {faCommentAlt}/>
                <spam className = "alert-circle-icon"> </spam>
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className = "icon" icon = {faUserCircle}/>
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className = "icon" icon = {faSmileBeam}/>
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className = "icon" icon = {faChalkboard}/>
            </div>
            <div className = "header-items date-block">
                1:00 PM
            </div>
        </div>
    )
}
export default CallPageHeader;