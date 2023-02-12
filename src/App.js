
import './App.css';
import Global from "../src/styles/global"
import { UserProvider } from './components/context/index';

import RoutesMain from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
    <Global/>
      <RoutesMain/>
      </UserProvider>
    </div>
  );
}

export default App;
