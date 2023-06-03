import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseRoutes from './routers';

function App() {
  let isAuth=false
  return (
    <div className="App">
      <Router>
        <Routes >
          {isAuth ? 
            BaseRoutes?.map((item, index) => {
              return (
                <Route key={index} exect={item.exact} path={item.path} element={item.element} />
              )

            }) : <Route  exect={true} path={"/"} element={<Login/>} />
          }
        </Routes >
      </Router>
    </div>
  );
}

export default App;
