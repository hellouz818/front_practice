import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FirstPage.css'
import Leaf from '../images/plantIcon.png'
import SignInPage from '../auth/SignInPage'

function FirstPage() {

    const [showSignInBox, setShowSignInBox] = useState(false)
     
    return (
        <>
        {
            showSignInBox &&
            <div className="loginBackground">
                <SignInPage handleShowBox={setShowSignInBox} />
            </div>
        }
        <div className="mainContainer1">
            <div className="beigeContainer">
                <div className="mainHeader">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="logo">LO</div>
                    </Link>
                    <div className="headerButtonWrapper">
                        <div className="headerButton">ABOUT</div>
                        <div className="headerButton">ARTICLE</div>
                        <div className="headerLineButton" onClick={() => setShowSignInBox(true)}>SIGN IN</div>
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
        </>
    )
}

export default FirstPage
