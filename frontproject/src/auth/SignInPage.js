import '../main/FirstPage.css'
import './SignInPage.css'
import Naver from '../images/loginIcon/naver.png'
import Facebook from '../images/loginIcon/facebook.png'
import Closed from '../images/closedButton.png'

function SignInPage(props) {

    let { handleShowBox } = props

    return (
        <div className="signInBox">
            <img className="closedButton" onClick={() => handleShowBox(false)} src={Closed} alt="button" />
            <div className="welcomeBox">
                <div className="signInBar">|</div>
                <div className="signInWelcome">Welcome back!</div>
            </div>
            <div className="signInInputBox">
                <input className="signInInput" placeholder="Email Address" />
                <input className="signInInput" type="password" placeholder="Password" />
                <div className="signInButton">Sign In</div>
                <hr className="snsIconHr" />
                <div className="snsIconWrapper">
                    <div className="naverWrapper">
                        <img className="signInNaverIcon" src={Naver} alt="icon" />
                        <div className="signInNaverText" style={{ fontSize: '12px' }}>Sign in with Naver</div>
                    </div>
                    <div className="naverWrapper" style={{ background: "#3b5998"}}>
                        <img className="signInNaverIcon" src={Facebook} alt="icon" />
                        <div className="signInNaverText" style={{ fontSize: '12px' }}>Sign in with Facebook</div>
                    </div>
                </div>
                <div className="signUpBox">
                    <div className="signUpText">Don't have an account?</div>
                    <div className="signUpButton">Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
