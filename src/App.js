import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider> 
        <div className='App'>
          <Home />
        </div>
    </UserProvider>
  );
}

export default App;
