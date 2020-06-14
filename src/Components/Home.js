import React from 'react'
import '../sass/home.scss'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Blurswitch from './Blurswitch'

const currentHour = new Date().getHours();

const greetingMessage =
    currentHour >= 4 && currentHour < 12 ?
        'Good morning' :
        currentHour >= 12 && currentHour <= 17 ?
            'Good afternoon' :
            currentHour > 17 || currentHour < 4 ?
                'Good evening' :
                'Welcome'

class Home extends React.Component {

    state = {
        active: false,
    }

    render() {
        //google search form
        window.onkeyup = keyup;
        var inputTextValue;
        function keyup(e) {
            inputTextValue = e.target.value;
            if (e.keyCode === 13) {
                window.open('https://www.google.com.ua/search?q=' + inputTextValue, '_blank');
            }
        }
        return (
            <div className="MainContent">
                <div className="containerWarp">
                    <div className="formWrap">
                        {['top'].map(placement => (
                            <OverlayTrigger key={placement} placement={placement} overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                    Google search
                                </Tooltip>}>
                                <div className="searchIcon"><FontAwesomeIcon icon={faSearch} className="googleSearch" />
                                    <input className="formInner" title="google search" /></div>
                            </OverlayTrigger>
                        ))}
                    </div>
                    <div className={this.state.active ? " light-on " : " contentInner "} />
                    <div className="dateTimeContent">
                        <h1>{greetingMessage}</h1>
                        <span>Today is  <Moment format="dddd DD.MM.YYYY" /></span>
                        <h2><Moment format="HH:mm" /></h2>
                    </div>
                    <Blurswitch />
                </div>
            </div>
        );
    }
}
export default Home;