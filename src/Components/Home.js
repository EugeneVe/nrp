import React from 'react'
import '../sass/home.scss'
import Moment from 'react-moment'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
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
        const UnBlured = '✓'
        const Blured = '✕'
        return (
            <div className="MainContent">
                <div className="containerWarp">
                    <div
                        className={this.state.active ? "round switch-on" : "round switch-off"}
                        onClick={() => this.setState({ active: !this.state.active })}>
                        {['top'].map(placement => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Blur On/Off
                                </Tooltip>
                                }
                            >
                                <span>{this.state.active ? Blured : UnBlured}</span>
                            </OverlayTrigger>
                        ))}
                    </div>
                    <div className={this.state.active ? " light-on " : " contentInner "} />
                    <h2><Moment format="HH:mm" /></h2>
                    <p></p>
                    <h1>{greetingMessage}</h1>
                    <span>Today is  <Moment format="dddd DD.MM.YYYY" /></span>
                </div>

            </div>
        );
    }
}
export default Home;