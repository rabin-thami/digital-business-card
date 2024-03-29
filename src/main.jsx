import React from "react"
import ReactDOM from "react-dom/client"
import InfoSection from "./Information.jsx"
import MidSection from "./AboutMe.jsx"
import Footer from "./Footer.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <InfoSection />
      <MidSection />
      <Footer/>
    </div>
  </React.StrictMode>
)