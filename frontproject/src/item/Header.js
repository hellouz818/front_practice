import { useState } from 'react'
import './Header.css'
import SignInPage from '../auth/SignInPage'
import { Link } from 'react-router-dom'

function Header() {

    const [showSignInBox, setShowSignInBox] = useState(false)
    
    let lastScrollTop = 0
    const headerNav = document.getElementsByClassName('headerContainer')
    window.addEventListener("scroll", function () {
        let st = this.document.documentElement.scrollTop
        if (st > lastScrollTop) {
                if (!headerNav[0].classList.contains('show')) {
                    headerNav[0].classList.add('show');          
                }
        } else {
            if (st < 10) {
                headerNav[0].classList.remove('show')
            }   
        }
        lastScrollTop = st <= 0 ? 0 : st
    }, false)

    return (
        <>
            {
                showSignInBox &&
                <div className="loginBackground">
                    <SignInPage handleShowBox={setShowSignInBox} />
                </div>
            }
            <div className="headerContainer headerContainer-down">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="navLogo" style={{ color: '#ffffff' }}>LO</div>
                </Link>
                <div className="headerNavButtonWrapper" style={{ color: '#ffffff'}}>
                    <div className="headerNavButton" style={{ color: '#ffffff' }}>ABOUT</div>
                    <div className="headerNavButton" style={{ color: '#ffffff' }}>ARTICLE</div>
                    <div className="headerNavLineButton"  onClick={() => setShowSignInBox(true)} style={{ color: '#ffffff', border: '2px solid #ffffff' }}>
                        SIGN IN
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
