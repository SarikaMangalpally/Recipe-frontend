import axios from 'axios';
import {RecipeType} from './types/recipe';

const API_URL = 'http://ec2-13-57-8-175.us-west-1.compute.amazonaws.com:8000/api'
// const API_URL = 'http://127.0.0.1:8000/api';

export const getRecipes = () => {
  return axios.get(`${API_URL}/recipes/`);
};
export const getRecipeById = (id: number) => {
  return axios.get(`${API_URL}/recipes/${id}/`);
};

export const createRecipe = (recipe: RecipeType) => {
  return axios.post(`${API_URL}/recipes/`, recipe);
};

export const updateRecipe = (id: number, recipe: RecipeType) => {
  return axios.put(`${API_URL}/recipes/${id}/`, recipe);
};

export const deleteRecipe = (id: number) => {
  return axios.delete(`${API_URL}/recipes/${id}/`);
};
