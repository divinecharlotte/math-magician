import react from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends react.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<Home />} />
            <Route path="/Quote" element={<Quote />} />
            <Route path="/Calculator" element={<Calculator />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
