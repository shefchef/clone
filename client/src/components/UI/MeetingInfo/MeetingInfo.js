import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimes,
    faUser,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import './MeetingInfo.scss';


const MeetingInfo = ({ setmeetInfoPopup, url }) => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h1>Invite people to join you</h1>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => { setmeetInfoPopup(false); }} />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Add participants
            </button>
            <p className="info-text">
                Copy and share the link to invite someone
            </p>
            <div className="meet-link">
                <span> {url} </span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick = {() => navigator.clipboard.writeText(url)} />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                Share via default email
            </button>
        </div>
    )
}
export default MeetingInfo;