import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesListPage from './components/RecipesListPage';
import RecipeDetailPage from './components/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RecipesListPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;