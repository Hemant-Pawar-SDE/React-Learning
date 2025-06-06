import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import store from "./Redux-Toolkit/Store.js";
// import Counter from "./Redux-Toolkit/Counter.jsx";

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// );
