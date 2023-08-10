import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />

      {/* <Switch>
        <Route path="/login" component={Login} />
      </Switch> */}

      <Footer />
    </div>
  );
}

export default App;
