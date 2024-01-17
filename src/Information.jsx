import React from "react";
import './index.css'
import profileImage from './assets/profile.jpg'


function TopInfoSection() {
    const handleButtonClick = (buttonType => {
        if(buttonType == "Email") {
            alert('Email is not Published yet')
        }
        else if(buttonType === "LinkedIn"){
            const url = "https://www.linkedin.com/in/rabinthami/"
            window.open (url, "_blank")
        }
    })
    return (
        <div className="top__section">
            <div className="image__container">
                <img src={profileImage} alt="Pofile Image" />
            </div>

            <div className="information__section">
                <h1>Rabin Thami</h1>
                <p>Frontend Developer</p>
                <a href="http://rabinthami.com.np" target="_blank">rabinthami.com.np</a>
            </div>

            <div className="information__button__section">
                <button onClick={() => handleButtonClick('Email')}> 
                    <i class="fa-regular fa-envelope"></i> Email
                </button>

                <button onClick={() => handleButtonClick('LinkedIn')}>
                <i class="fa-brands fa-linkedin"></i> LinkedIn
                </button>

            </div>
        </div>
    )
}


export default TopInfoSection