import './App.css';
import TrafficLight from './components/TrafficLight.js';
import React from 'react';
import { RED, GREEN, ORANGE } from './AppConstants.js'

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
      <div className="App">
        <TrafficLight currentColor={this.state.currentColor} />
      </div>
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