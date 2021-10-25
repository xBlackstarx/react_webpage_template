import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopNavigation from './components/TopNavigation';
import LeftSidebar from './components/LeftSidebar';
import PersonalTodoPage from './pages/PersonalTodo';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TopNavigation />
      
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <LeftSidebar />
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-3">
            {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              
            </div> */}

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/personal-todo">
                <PersonalTodoPage />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </main>
        </div>

        <div className="row">
          <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-3 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
