import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import RootLayout from './RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index element={<Home />} />,
        <Route path="/recipes" element={<Recipes />} />,
        <Route path="/Contact" element={<Contact/>} />
      </Route>
    )
  );

export default router;