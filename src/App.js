import react from 'react';
import './index.css';
import Calculator from './components/Calculator';

class App extends react.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
