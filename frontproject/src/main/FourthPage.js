import './FourthPage.css'

function FourthPage() {
    return (
        <div className="mainContainer4">
            <div className="subscribeHeader">
                <div className="subscribeHeaderText">SUBSCRIBE</div>
                <div className="subscribeSubText">Sign-up to our newsletter</div>
            </div>
            <div className="subscribeBox">
                <input className="subscribeInputBox" placeholder="Your email" />
                <div className="subscribeSubmitButton">SUBMIT</div>
            </div>
        </div>
    )
}

export default FourthPage
