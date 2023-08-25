import React from 'react';
import { Header } from '../Header/Header';
import { SearchPage } from '../SearchPage/SearchPage';
import { FavoritesPage } from '../FavoritesPage/FavoritesPage';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path='/' exact>
          <SearchPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;