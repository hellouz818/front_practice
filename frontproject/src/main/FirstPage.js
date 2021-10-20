import './FirstPage.css'
import Leaf from '../images/plantIcon.png';

function FirstPage() {
    return (
        <div className="mainContainer1">
            <div className="beigeContainer">
                <div className="mainHeader">
                    <div className="logo">LO</div>
                    <div className="headerButtonWrapper">
                        <div className="headerButton">ABOUT</div>
                        <div className="headerButton">ARTICLE</div>
                        <div className="headerLineButton">SUBSCRIBE</div>
                    </div>
                </div>
                <div className="mainTitleWrapper">
                    <div className="mainTitle">LOMBOK</div>
                    <div className="subTitle">HOLISTIC HEALTH</div>
                    <hr className="smallLine" />
                </div>
                <div className="leafImageWrapper">
                    <img src={Leaf} className="leafImage1" alt="logo" />
                    <img src={Leaf} className="leafImage2" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default FirstPage
