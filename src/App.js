import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import CategoryPage from './pages/categoryPage';
import DietPage from './pages/dietPage';
import HomePage from './pages/homePage';
import MealTypes from './pages/mealTypes';
import RecipePage from './pages/recipePage';
import Template from './template';

function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/diets" element={<DietPage />} />
          <Route path="/meals" element={<MealTypes />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
