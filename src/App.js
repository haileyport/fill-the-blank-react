import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Meta from "./pages/Meta";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import JS1 from "./pages/JS1";
import JS2 from "./pages/JS2";
import Menu from "./component/Menu";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Menu />
        </div>
        <div className="bg-teal-800 border-2 border-rose-600">
          <Routes>
            <Route to="/" element={<Main />}></Route>
            <Route to="/meta" element={<Meta />}></Route>
            <Route to="/html" element={<Html />}></Route>
            <Route to="/css" element={<CSS />}></Route>
            <Route to="/javascript1" element={<JS1 />}></Route>
            <Route to="/javascript2" element={<JS2 />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
