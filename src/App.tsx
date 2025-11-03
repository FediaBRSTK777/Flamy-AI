import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;