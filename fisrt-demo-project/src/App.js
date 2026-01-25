import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar/navbar.js"
import Users from './users/Users.js';
function App() {
  return (
    <div className="App">
     <h1>Hello From App</h1>
     <Navbar />
     <Users />
    </div>
  );
}

export default App;
