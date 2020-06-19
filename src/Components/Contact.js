import React from 'react'
import "../sass/contact.scss"
import Blurswitch from './Blurswitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faComment, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'


function Contact() {
    return (
        <div className="MainContent">
            <div className="containerWarp contentInner contentInnerPages">
                <div className="anyPage">
                    <h2>Contacts</h2>
                    <div className="social">
                        <ul>
                            <a href="//www.facebook.com/wwwclick/" target="_blank" rel="noopener noreferrer"><li><p className="faOrigin fb"><FontAwesomeIcon icon={faFacebookSquare} /></p><p className="txtOrigin">Facebook</p></li></a>
                            <a href="//www.linkedin.com/in/eugeneve/" target="_blank" rel="noopener noreferrer"><li><p className="faOrigin ld"><FontAwesomeIcon icon={faLinkedin} /></p><p className="txtOrigin">Linkedin</p></li></a>
                            <a href="//www.instagram.com/eugene.vep/" target="_blank" rel="noopener noreferrer"><li><p className="faOrigin in"><FontAwesomeIcon icon={faInstagramSquare} /></p><p className="txtOrigin">Instagram</p></li></a>
                            <a href="//twitter.com/EugeneVep" target="_blank" rel="noopener noreferrer"><li><p className="faOrigin tw"><FontAwesomeIcon icon={faTwitterSquare} /></p><p className="txtOrigin">Twitter</p></li></a>
                        </ul>
                    </div>
                    <p className="feedback">Message to me:</p>
                    <div className="mail">
                        <form id="form" className="formWrap" action="//eugenev.fun/H340v93kd8sk2lueM4f8v62olssp.php" method="POST" encType="multipart/form-data">
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Name is required field
                                </Tooltip>}>
                                    <div className="icon"><FontAwesomeIcon icon={faUser} className="userName" />
                                        <input id="searchTxt" className="formInner" type="text" name="user_name" required /></div>
                                </OverlayTrigger>
                            ))}
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Phone is not required field
                                </Tooltip>}>
                                    <div className="icon"><FontAwesomeIcon icon={faPhone} className="userPhone" />
                                        <input id="searchTxt" className="formInner" type="tel" name="user_phone" /></div>
                                </OverlayTrigger>
                            ))}
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Email is required field
                                </Tooltip>}>
                                    <div className="icon"><FontAwesomeIcon icon={faEnvelope} className="userMail" />
                                        <input id="searchTxt" className="formInner" type="email" name="user_email" required /></div>
                                </OverlayTrigger>
                            ))}
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Message is required field
                                </Tooltip>}>
                                    <div className="icon"><FontAwesomeIcon icon={faComment} className="userMessage" />
                                        <textarea id="searchTxt" className="formInner message" type="text" name="user_text" required /></div>
                                </OverlayTrigger>
                            ))}
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        File attach is not required field
                                </Tooltip>}>
                                    <div className="icon"><FontAwesomeIcon icon={faPaperclip} className="userAttach" />
                                        <input id="searchTxt" className="formInner" type="file" name="upload" /></div>
                                </OverlayTrigger>
                            ))}
                            <input type="hidden" name="_next" />
                            <input type="text" name="_gotcha" className="spam" />
                            {['top'].map(placement => (
                                <OverlayTrigger key={placement} placement={placement} overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Send your message
                                </Tooltip>}>
                                    <button type="submit" className="sendButton switch-on">SEND</button>
                                </OverlayTrigger>
                            ))}

                        </form>
                    </div>
                </div>
                <Blurswitch />
            </div>
        </div >
    );
}
export default Contact;


