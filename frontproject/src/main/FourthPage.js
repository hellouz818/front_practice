import { useState } from 'react'
import './FourthPage.css'
import axios from 'axios'


function FourthPage() {

    const [file, setFile] = useState('')

    const testApi = () => {
        let formData = new FormData();
        let title = 'first test';
        let content = 'first contents';
        formData.append('file', file)
        formData.append('title', title)
        formData.append('content', content)
        
        axios.post('http://127.0.0.1:8000/testApi/', {
            formData
        }).then(data => {
            console.log(data)
        })
    }

    const onChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    return (
        <div className="mainContainer4">
            <div className="subscribeHeader">
                <div className="subscribeHeaderText">SUBSCRIBE</div>
                <div className="subscribeSubText">Sign-up to our newsletter</div>
            </div>
            <div className="subscribeBox">
                <input type="file" onChange={onChange} className="subscribeInputBox" placeholder="Your email" />
                <div className="subscribeSubmitButton" onClick={testApi}>SUBMIT</div>
            </div>
        </div>
    )
}

export default FourthPage
