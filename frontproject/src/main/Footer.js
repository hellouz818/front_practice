import './Footer.css'
import InstaIcon from '../images/insta.png'
import TwitterIcon from '../images/twitter.png'

function Footer() {
    return (
        <div className="footerPage">
            <div className="footerNavigation">
                <div className="headerButton">ABOUT</div>
                <div className="headerButton">ARTICLE</div>
                <div className="headerButton">SUBSCRIBE</div>
            </div>
            <div className="snsButtonWrapper">
                <div className="snsButton">
                    <img src={InstaIcon} className="snsIcon" alt="icon" />    
                </div>
                <div className="snsButton">
                    <img src={TwitterIcon} className="snsIcon" alt="icon" />    
                </div>
                <div className="snsButton">
                    <img src={InstaIcon} className="snsIcon" alt="icon" />    
                </div>
                <div className="snsButton">
                    <img src={TwitterIcon} className="snsIcon" alt="icon" />    
                </div>
            </div> 
        </div>
    )
}

export default Footer
