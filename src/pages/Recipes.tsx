import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import {getRecipes} from '../api';
import {RecipeType} from '../types/recipe';


const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
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

    return (
        <>
        {
            loading?<div>Loading...</div>: error? <div className="text-red-500">{error}</div>: 
        <>   
            <h1 className='font-poppins-light-italic text-32 uppercase my-12 ml-5 md:ml-12'>Recipes</h1>
            <ul className='w-10/12 max-w-screen-2xl mx-auto my-20 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-2 lg:gap-x-0 gap-y-10 lg:gap-y-14'>
                {
                    recipes.map((recipe: RecipeType, index) => {
                        return <li className='relative m-auto rounded-xl' key={index}>
                                <RecipeCard recipe={recipe}/>
                            </li>
                    } )
                }
            </ul>
        </>
        }
        </>
    );
};

export default Recipes;
