import './ThirdPage.css'
import backgroundImage from '../images/sample8.jpg'

function ThirdPage() {
    return (
        <div className="mainContainer3">
            <img src={backgroundImage} className="backgroundImage" alt="background" />
            <div className="main3ContentsContainer">
                <div className="main3ContentsWrapper">
                    <div className="main3Title">ABOUT</div>
                    <hr className="main3Line" />
                    <div className="main3Contents">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage
