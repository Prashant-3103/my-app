import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
const [mode, setMode]=useState('light');
const [alert, setAlert]= useState(null);
const showAlert=(message,type)=>
{
setAlert(
  {
    msg:message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 500);
}

const toggleMode=()=>
{
  if(mode==='light'){
setMode('dark');
document.body.style.backgroundColor='#042743'
showAlert("dark mode has been enabled ", "success");
document.title="text util-dark mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("light mode has been enabled ", "success");
    document.title="text util-light mode"
  }
}
  return (
    <>
   <Router>
<Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="enter your text" mode={mode} />
            {/* <Home /> */}
          </Route>
        </Switch>
        </div>

        </Router>



    </>
  );
}

export default App;
