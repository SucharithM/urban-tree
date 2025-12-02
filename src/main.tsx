import { createRoot } from "react-dom/client";
import store from './app/store'
import { Provider } from 'react-redux'

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>);
