import React from 'react'
import "../sass/style.scss"
import Blurswitch from './Blurswitch'

const Contact = () => {
    return (
        <div className="MainContent">
            <div className="containerWarp contentInner contentInnerPages">
                <div className="anyPage">
                    <h2>Contacts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore nam soluta quisquam nesciunt, vitae, earum odio odit sapiente consequatur obcaecati expedita nihil. Molestias atque amet voluptatum, rem consequuntur ea.</p>
                </div>
                <Blurswitch />
            </div>
        </div>
    );

}
export default Contact;