import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar/navbar.js"
import Users from './users/Users.js';
import UsersFunctional from './users/usersFunctional.js';
import AddUser from './users/addUser.js';

function App() {
  return (
    <div className="App">
      <h1>Hello From App</h1>
      <Navbar />
      {/* <Users /> */}
      <UsersFunctional />
      <div>
        <AddUser />
      </div>
    </div>
  );
}

export default App;
