/* https://www.freecodecamp.org/news/how-to-make-an-image-search-app-in-react/ */

import React from "react";
import { createRoot } from "react-dom/client";

//import component
import App from './component/App';


// Render App Component (React 18 Syntax)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App tab="home" />
    ) 