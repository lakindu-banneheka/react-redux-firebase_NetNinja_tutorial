// import react from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
