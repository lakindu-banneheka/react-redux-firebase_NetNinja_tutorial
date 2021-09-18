// import react from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>marrio plan</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
