import React from "react";
import './index.css'
import profileImage from './assets/profile.jpg'

function InfoSection() {
    return (
        <section className="info__section">
            <div className="profileImageContainer">
                <img src={ profileImage} alt="Profile Picture" />
            </div>
            <div className="personal__info__section">
                <h1>Rabin Thami</h1>
                <p>Frontend Developer</p>
                <a href="http://rabinthami.com.np">rabinthami.com.np</a>
            </div>
            <div className="info__button__section">
                <button>
                    <i class="fa-light fa-envelope"></i> Email
                </button>
                <button>
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </button>
            </div>
        </section>
    )
}


export default InfoSection