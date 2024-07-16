
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import RecipesPage from './pages/Recipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'recipes',
        element: <RecipesPage />,
      },
      // {
      //   path: 'recipes/:id',

      // }
      // Add other routes here
    ],
  }
]);
const App = () => {

  return (
    <>
      <RouterProvider router={router}>
        {/* all the app content of the webapp is routed here.*/}
      </RouterProvider>
    </>
  )
}

export default App

