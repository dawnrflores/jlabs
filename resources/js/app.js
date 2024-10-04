require('./bootstrap');

import { createRoot } from "react-dom/client";
import App from "./Layouts/App"
import Login from "./Login"

const root = createRoot(document.getElementById('app'));

root.render(<App />)