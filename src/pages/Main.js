import React, { useState } from "react";

const Main = () => {
  const css =
    "rounded-md focus:outline-none focus:border-sky-500 focus:bg-slate-100 focus:ring-sky-500 focus:ring-1 text-gray-800 ";
  const [text, setText] = useState("");
  const [newCSs, setNewCss] = useState(css);
  const data = {
    hello: "안녕하세요",
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    if (data.hello === text) {
      setNewCss(`${css}bg-green-100`);
    } else {
      setNewCss(`${css}bg-red-100`);
      setText("");
    }
    console.log(newCSs);
  };
  return (
    <div className="h-full">
      <main className="flex items-center">
        <form className="mx-32 px-9 py-9 left-1/2 top-1/4	rounded-lg border-2 border-yellow-50">
          <span>빈칸 채우기 for 40th 스터디 카페</span>
          <span>빈칸채우기 하는법</span>
          <br />
          <br />
          <span className="text-gray-800">
            {/* TODO: 정답인 경우 focus bg 변경 */}
            <input
              id="hello"
              type="text"
              placeholder="안????"
              value={text || ""}
              onChange={textHandler}
              className={newCSs}
            />
          </span>
          <br />
          <br />
          <span>
            1. 위 빈칸에 '안녕' 을 입력하고 엔터 or 제출 버튼 클릭해주세요.
          </span>
          <br />
          <span>
            2. 위 빈칸에 '안녕하세요' 을 입력하고 엔터 or 제출 버튼
            클릭해주세요.
          </span>
          <br />
          <br />
          <span>위 빈칸은 '안녕하세요'를 정답으로 지정해놨습니다.</span>
          <br />
          <span>submit이 수행되면 채점 결과에 맞는 효과가 나타납니다.</span>
          <br />
          <br />
          <span>
            빈칸마다 작성후 엔터 누르시면서 바로 확인하면서 진행하시거나
          </span>
          <br />
          <span>
            페이지의 빈칸 전체 작성후 제출을 클릭하여 확인하면서 진행하시면
            됩니다.
          </span>
          <br />
          <br />
          <button onClick={answerHandler}>제출</button>
        </form>
      </main>
    </div>
  );
};

export default Main;
