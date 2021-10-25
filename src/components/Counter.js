import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            hour: 0,
            minute: 0
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            let { counter, hour, minute } = this.state;
            counter++;
            if (counter >= 60) {
                counter = 0;
                minute += 1;
                if (minute >= 60) {
                    minute = 0;
                    hour += 1;
                }
            }
            this.setState({
                counter: counter,
                hour: hour,
                minute: minute
            });
        }, 1)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                {
                    this.props.children(this.state)
                }
            </div>
        );
    }
}
export default Counter;