import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const [recipe] = useState(dummyRecipes.find(recipe => recipe.id === recipeId));

  return (
    <div>
      <h1>{recipe.title}</h1>
      {recipe.imageURL && <img src={recipe.imageURL} alt={recipe.title} />}
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps:</h2>
      <ol>
        {recipe.preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">Back </Link>
    </div>
  );
};

export default RecipeDetailPage;
