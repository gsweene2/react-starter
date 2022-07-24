// Library CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import { Container } from 'react-bootstrap';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
      <CustomFooter />
    </Router>
  );
}

export default App;
