import React from 'react';
import { Link } from 'react-router-dom';

const dummyRecipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese', 'Black pepper'],
    preparationSteps: ['Cook spaghetti al dente', 'Mix eggs, cheese, and pepper', 'Fry pancetta until crispy', 'Combine all ingredients'],
    imageURL: 'https://example.com/spaghetti_carbonara.jpg'
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    description: 'Creamy Indian curry dish with tender chicken pieces in a spicy tomato-based sauce.',
    ingredients: ['Chicken', 'Yogurt', 'Tomato sauce', 'Spices', 'Cream'],
    preparationSteps: ['Marinate chicken in yogurt and spices', 'Grill or bake chicken until cooked', 'Simmer chicken in tomato sauce and cream'],
    imageURL: 'https://example.com/chicken_tikka_masala.jpg'
  },
];

const RecipesListPage = () => {
  return (
    <div>
      <h1>My Recipe</h1>
      <ul>
        {dummyRecipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesListPage;
