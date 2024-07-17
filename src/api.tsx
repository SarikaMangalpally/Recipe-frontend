import axios from 'axios';
import {Recipe} from './types/recipe';

const API_URL = 'http://ec2-54-176-136-218.us-west-1.compute.amazonaws.com:8000/api'

export const getRecipes = () => {
  return axios.get(`${API_URL}/recipes/`); // Modified URL
};
export const getRecipeById = (id: number) => {
  return axios.get(`${API_URL}/recipes/${id}/`); // Modified URL
};

export const createRecipe = (recipe: Recipe) => {
  return axios.post(`${API_URL}/recipes/`, recipe); // Modified URL
};

export const updateRecipe = (id: number, recipe: Recipe) => {
  return axios.put(`${API_URL}/recipes/${id}/`, recipe); // Modified URL
};

export const deleteRecipe = (id: number) => {
  return axios.delete(`${API_URL}/recipes/${id}/`); // Modified URL
};