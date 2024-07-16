import React, {ChangeEvent, useState} from "react";
import {createRecipe} from '../api';

interface FormProps {
    formVisible: boolean
    onHide: () => void;
}
interface FormState {
    title: string;
    servings: number;
    instructions: string;
}
const AddRecipeForm: React.FC<FormProps> = ({formVisible, onHide}: FormProps)=> {
    // const [title, setTitle] = useState('');
    // const [instructions, setInstructions] = useState('');
    // const [servings, setServings] = useState(0);
    const [formState, setFormState] = useState<FormState>({
        title: '',
        servings: 0,
        instructions: ''
    })
    const [errors, setErrors] = useState<{title: string, servings: string, instructions: string}>({title: '', servings: '', instructions: ''});

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }
    const handleCancelEvent = () => {
        setErrors({title: '', servings: '', instructions: ''})
        onHide();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm(formState);
        if(isValid) {
            //make post api call
            const response = await createRecipe(formState);
            console.log(response.status);
            if(response.status == 201) {
                console.log('Recipe Added to list')!
                setFormState({...formState, title: '', servings: 0, instructions: ''})
            }
        }
        else{
            console.log('invalid values');
        }
    }

    const validateForm = (recipe: { title: string; servings: number; instructions: string; }) => {
        let isValid = true;
        const errors: {title: string, servings: string, instructions: string} = ({title: '', servings: '', instructions: ''})
        if(!recipe.title) {
            isValid = false;
            errors.title = '* Title is required';
        }
        if(!recipe.servings) {
            isValid = false;
            errors.servings = '* Servings is required';
        }
        if(!recipe.instructions) {
            isValid = false;
            errors.instructions = '* Instructions is required';
        }
        setErrors(errors);
        return isValid;
    }
        
    return <>
    <div className={`max-w-sm mx-auto ${!formVisible && 'hidden bg-stone-400'}`}>
        <form onSubmit={handleSubmit} className="font-poppins-light space-y-4 my-6">
            
            <input type="text" name="title" value={formState.title} onChange={handleChange} placeholder="Recipe Title" className="w-full bg-slate-200 p-2 outline-none"/>
            {errors.title && <span className="text-red-500">{errors.title}</span>}
        
        
            <input type="text" inputMode="numeric" name="servings" onChange={handleChange} value={formState.servings} pattern="\d*|"  id={`${formState.servings}`} placeholder="No of servings" className="w-full bg-slate-200 p-2 outline-none"/>
            {errors.servings && <span className="text-red-500">{errors.servings}</span>}
        
            <textarea 
            name="instructions" 
            id="instructions" 
            value={formState.instructions} 
            onChange={handleChange} 
            placeholder="Add instructions to the dish!" 
            className="w-full bg-slate-200 p-2 outline-none"
            />
            {errors.instructions && <span className="text-red-500">{errors.instructions}</span>}
        
            <div className="mx-auto space-x-2">
                <button type="button" className="bg-slate-200 py-2 px-5 rounded-lg" onClick={handleCancelEvent}>Cancel</button>
                <button type="submit" className="py-2 px-5 rounded-lg bg-emerald-300">Add Recipe</button>
            </div>
        </form>
    </div>
    </>
}

export default AddRecipeForm