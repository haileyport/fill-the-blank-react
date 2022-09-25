import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Meta from "./pages/Meta";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import JS1 from "./pages/JS1";
import JS2 from "./pages/JS2";
import ReactQuiz from "./pages/React";

import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-fit">
        <Menu />
        <div className="pt-36 h-auto ">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/meta" element={<Meta />}></Route>
            <Route path="/html" element={<Html />}></Route>
            <Route path="/css" element={<CSS />}></Route>
            <Route path="/javascript1" element={<JS1 />}></Route>
            <Route path="/javascript2" element={<JS2 />}></Route>
            <Route path="/react" element={<ReactQuiz />}></Route>
          </Routes>
        </div>
      </div>
      <footer className="pt-12 z-20 p-4 w-full">
        <p>
          © 2022 코드스테이츠 SEB FE 40기 박연우, 전은혜, 허정우 | 빈칸 채우기
          Ver.2.0 - 40th 스터디 카페
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
