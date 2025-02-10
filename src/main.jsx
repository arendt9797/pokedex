import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Provider로 감싸면 내부 컴포넌트는 store를 구독한다 */}
        <Provider store={store}>  
            <App />
        </Provider>
    </StrictMode>
);
