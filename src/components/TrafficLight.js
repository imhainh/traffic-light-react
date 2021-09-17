import React from 'react';
import './TrafficLight.css'
import ClassNames from 'classnames'
import {RED, GREEN, ORANGE} from '../AppConstants.js'
class TrafficLight extends React.Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         currentColor: GREEN
    //     };

    // }
    
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             currentColor: this.getNextColor(this.state.currentColor)
    //         });
    //     }, 1000);
    // }

    // getNextColor(color) {
    //     switch (color) {
    //         case GREEN:
    //             return ORANGE;
    //         case ORANGE:
    //             return RED;
    //         default:
    //             return GREEN;
    //     }
    // };
    
    render() {
        const {currentColor} = this.props;
        return (
            <div className="TrafficLight">
                <div className={ ClassNames("bulb", "green", {'active': currentColor === GREEN})}></div>
                <div className={ ClassNames("bulb", "orange", {'active': currentColor === ORANGE})}></div>
                <div className={ ClassNames("bulb", "red", {'active': currentColor === RED})}></div>
            </div>
        )
    }
}
export default TrafficLight;
