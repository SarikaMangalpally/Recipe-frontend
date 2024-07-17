// src/components/Recipes.tsx

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {getRecipes} from '../api';
interface Recipe {
    id?: number;
    title?: string;
    ingredients?: string[];
    servings?: number;
    instructions?: string;
}

const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await getRecipes();
                setRecipes(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching recipes');
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h1>{recipe.id}</h1>
                        <h2>{recipe.title}</h2>
                        <p>Servings: {recipe.servings}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;
