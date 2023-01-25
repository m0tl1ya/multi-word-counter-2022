import './App.css';
import { RecoilRoot } from "recoil";

import TitleBar from './components/TitleBar'
import MultiWordCounter from './components/MultiWordCounter';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TitleBar />
        <MultiWordCounter></MultiWordCounter>
      </div>
    </RecoilRoot>
  );
}

export default App;
