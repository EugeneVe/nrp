import React from 'react'
import "../sass/style.scss"
import Blurswitch from './Blurswitch'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

const Email = () => {
    return (
        <div className="MainContent fadePage">
            <div className="containerWarp contentInner">
                <div className="anyPage">
                    <div className="empty">
                        <h2>Email Sent!</h2>
                        <p className="faFeatherAlt"><FontAwesomeIcon icon={faFeatherAlt} /></p>
                        <p>Go back to main page</p>
                        <Link to="/" className="navUnderlineNone navList"><button className="sendButton switch-on">Home</button></Link>
                    </div>
                </div>
                <Blurswitch />
            </div >
        </div >
    )
}

export default Email;