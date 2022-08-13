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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Menu />
        <div className="pt-36 h-auto">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/meta" element={<Meta />}></Route>
            <Route path="/html" element={<Html />}></Route>
            <Route path="/css" element={<CSS />}></Route>
            <Route path="/javascript1" element={<JS1 />}></Route>
            <Route path="/javascript2" element={<JS2 />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
