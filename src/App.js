import './App.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";

function App() {
  return (
    <div className="h-screen flex-col flex">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
