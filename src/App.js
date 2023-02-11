import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceProvider from './Components/pages/serviceProvider'
import Home from './Components/pages/home'
import Reviews from './Components/pages/reviews'
import Signup from './Components/pages/signup'
import Login from './Components/pages/login'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" component={ Home } />
          <Route path="/serviceProvider"  component={ServiceProvider} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Routes>
        <Home />
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
