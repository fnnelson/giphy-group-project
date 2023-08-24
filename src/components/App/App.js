import React from 'react';
import { Header } from '../Header/Header';
import { SearchPage } from '../SearchPage/SearchPage';
import { FavoritesPage } from '../FavoritesPage/FavoritesPage';

function App() {
  return (
    <div>
      <Header />
      <SearchPage />
      <FavoritesPage />
    </div>
  );
}

export default App;