//import { useState } from 'react'
import { useEffect, useState } from "react";
import "./CookieConsent.css";

function CookieConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true") {
      setConsentGiven(true);
    }
  }, []);

  function handleConsent() {
    console.log('test');
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true);
  }

  return (
    <>
      {consentGiven == false ? (
        <div className="cookie-consent" id="cookie-consent">
            <div className="cookie-consent-text">
                <p>This website uses cookies to enhance user experience</p>
            </div>
            <div className="cookie-consent-button-div">
                <button className="cookie-consent-button" onClick={handleConsent} >I Understand</button>
            </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CookieConsent;
