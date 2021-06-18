import { useHistory } from 'react-router-dom';
import Header from '../UI/Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";
import {
    faKeyboard,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import './HomePage.scss';

const HomePage = () => {
    const history = useHistory();
const startCall = () => {
// generate unique ID

    const uid = shortid.generate();

    // redirect to the call page

    history.push(`/${uid}#init`);

}


    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Microsoft Teams is for everyone.</h2>
                        <p> Meet, chat, call, and collaborate in just one place.</p>
                        <div className="action-btn">
                            <button className="btn blue" onClick = {startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                   Create a Team
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    < FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Join a Team with a code" />
                                </div>
                                <button className="btn no bg">Join</button>
                            </div>
                           
                        </div>

                    </div>
                    <div className="help-text">
                        <a href="">Learn More</a> about Teams
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDeEK?ver=e1e6&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;