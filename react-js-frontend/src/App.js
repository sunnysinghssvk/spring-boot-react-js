import './App.css';
import { Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Employees from './components/Employees';


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Home />
          <Routes>
            <Route path='/' Component={Features} exact />
            <Route path='/all-employees' Component={Employees} exact />
            <Route path='/add-employee' Component={AddEmployee} exact />
            <Route path='/delete-employee' Component={DeleteEmployee} exact />
            <Route path='/update-employee' Component={UpdateEmployee} exact />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
