import logo from './favic.png';
import HeaderNav from './comp/HeaderNav';
import Footer from './comp/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './comp/Registration';
import {Route,Routes,} from "react-router-dom";
import Table from './comp/Table';
import UpdateForm from './comp/UpdateForm';
import Home from './comp/Home';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      {/* <Home/> */}
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/Register" element={<Registration/>}/>
        <Route path="/Table" element={<Table/>}/>
        <Route path="/update" element={<UpdateForm/>}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      
      <Footer/>
      
    </div>
  );
}

export default App;
