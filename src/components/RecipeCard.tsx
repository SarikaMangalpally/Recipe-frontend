import React, {useState} from "react";
import { RecipeType } from "../types/recipe";

interface Recipe {
    recipe: RecipeType
}

const RecipeCard: React.FC<Recipe> = ({recipe}: Recipe) => {
    const [flipcard, setFlipCard] = useState(false);
    return <>
      <div className="perspective-1000 w-72 h-72 rounded-xl " onClick={()=> {
          setFlipCard(!flipcard)
      }}>
        <div className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${flipcard && 'rotate-y-180'}`}>
          <div className={`absolute inset-0 recipe-card-section recipe-card-section-items-postion bg-slate-400 text-white backface-hidden`}>
            <h2 className="font-poppins-light-italic text-20">{recipe.title}</h2>
          </div>
          <div className={`absolute text-16 font-poppins-extraLight-italic inset-0 recipe-card-section recipe-card-section-items-postion space-y-4 py-2 px-4 bg-gray-200 rotate-y-180 backface-hidden`}>
            <p>Servings: {recipe.servings}</p>
            <p>Instructions: {recipe.instructions}</p>
          </div>
        </div>
      </div>
    </>
}

export default RecipeCard