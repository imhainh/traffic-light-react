import './App.css';
import React from 'react';

import TrafficLight from './components/TrafficLight.js';
import Counter from './components/Counter.js';
import { RED, GREEN, ORANGE } from './AppConstants.js'

import NumberProvider from './components/NumberProvider.js'
import NumberContext from "./context/NumberContext"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentColor: GREEN
    };

  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case GREEN:
        return ORANGE;
      case ORANGE:
        return RED;
      default:
        return GREEN;
    }
  };


  render() {
    return (
      <NumberProvider>
        <div className="App">
          <TrafficLight currentColor={this.state.currentColor} />
          <Counter>
            {
              function ({ counter, hour, minute }) {
                return (
                  <div>
                    <h1>{hour}:{minute}:{counter}</h1>
                  </div>
                )
              }
            }
          </Counter>
          <a href="tel:0964437879" >thí í a</a>

          <NumberContext.Consumer>
            {
              function ({ number, updateNumber }) {
                return (
                  <div>
                    <h1>{number}</h1>
                    <button onClick={updateNumber}>update number</button>
                  </div>
                )
              }
            }
          </NumberContext.Consumer>
        </div>
      </NumberProvider>
    );
  }
}

export default App;

// =========================================================================
// import './App.css';
// import TrafficLight from './components/TrafficLight.js';


// function App() {
//   return (
//     <div className="App">
//       <TrafficLight />
//     </div>
//   );
// }

// export default App;