import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
// import Search from "../components/Search";
import AddRecipeForm from "../components/AddRecipeForm";
import Search from "../components/Search";
interface HomeProps {

}
const Home: React.FC<HomeProps> = ()=> {
    const navigate = useNavigate();
    const [formVisible, setFormVisibility] = useState(false);
    const [searchVisibility, setSearchVisibility] = useState(false);
    const handleFormHide = () => {
        setFormVisibility(false);
    }
    const handleSearch =() => {
        console.log('Clicked on search');
        handleSearchVisibility();
    }
    const handleSearchVisibility =() => {
            setSearchVisibility(!searchVisibility);
    }
    const handleViewRecipes = () => {
        if (searchVisibility) {
            handleSearchVisibility();
        }
        console.log('Clicked on view recipes');
        navigate('/recipes');
    }
    const handleAddRecipe = () => {
        if (searchVisibility) {
            handleSearchVisibility();
        }
        console.log('Clicked on add recipe');
        setFormVisibility(true);
    }
    return <>
        <h1 className="text-center text-44 my-12 font-poppins-light-italic">Page full of yummy recipies!!!</h1>
        <div className=" space-x-8 px-8 py-4 bg-gray-300 text-center max-w-screen-sm mx-auto bg-opacity-50 rounded-md">
            <input type="button" value="Search" className="cursor-pointer" onClick={handleSearch}/>
            <input type="button" value="View All Recipes" className="cursor-pointer" onClick={handleViewRecipes}/>
            <input type="button" value="Add a Recipe" className="cursor-pointer" onClick={handleAddRecipe}/>
        </div>

        <AddRecipeForm formVisible = {formVisible} onHide={handleFormHide}/>
        <Search searchVisible = {searchVisibility}/>
    </>
}
export default Home