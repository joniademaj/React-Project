import React from 'react'
import './App.css'

function Logo(props){
    return (
      <div>
        <img src={props.src} alt={props.alt}></img>
      </div>
    )
}

function Header() {
    const logoImage = 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31';
    return (
        <div className="header">
            <Logo src={logoImage} alt="Microsoft" />

            <div className="primaryMenu">
                <ul>
                    <li>Microsoft 365</li>
                    <li>Office</li>
                    <li>Windows</li>
                    <li>Surface</li>
                    <li>Xbox</li>
                    <li>Deals</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="secondaryMenu">
                <ul>
                    <li>All Microsoft</li>
                    <li>Search</li>
                    <li>Cart</li>
                    <li>Sign in</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;