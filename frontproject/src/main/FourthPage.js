import './FourthPage.css'
import axios from 'axios'


function FourthPage() {

    const testApi = () => {
        let title = 'first test';
        let contents = 'first contents';
        axios.post('http://172.30.1.37:8000/testApi', {
            title, contents
        })
    }

    return (
        <div className="mainContainer4">
            <div className="subscribeHeader">
                <div className="subscribeHeaderText">SUBSCRIBE</div>
                <div className="subscribeSubText">Sign-up to our newsletter</div>
            </div>
            <div className="subscribeBox">
                <input className="subscribeInputBox" placeholder="Your email" />
                <div className="subscribeSubmitButton" onClick={testApi}>SUBMIT</div>
            </div>
        </div>
    )
}

export default FourthPage
