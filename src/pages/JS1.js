import React, { useState } from "react";
import Layout from "./Layout";
import { data } from "./../data/dummyData";
import { inputTag } from "./../utils/input";

const JS1Contents = () => {
  const [text, setText] = useState({});
  const [newCss, setNewCss] = useState({});

  const inputContents = (name, place) =>
    inputTag(name, place, text, textHandler, newCss);

  const textHandler = (e) => {
    changeText(e.target.id, e.target.value);
  };

  const changeText = (key, val) => {
    setText((cur) => {
      let condition = { ...cur };
      condition[key] = val;
      return condition;
    });
  };

  const changeCss = (key, val) => {
    setNewCss((cur) => {
      let condition = { ...cur };
      condition[key] = val;
      return condition;
    });
  };

  const answerHandler = (e) => {
    e.preventDefault();
    for (let key in data.js1) {
      if (data.js1[key] === text[key]) {
        changeCss(key, `bg-green-100`);
      } else {
        changeCss(key, `bg-red-100`);
        changeText(key, "");
      }
    }
  };

  return (
    <>
      <span className="text-xl font-bold">변수</span>
      <br />
      <span>각 보관함의 이름</span>
      <span>이름을 통해 데이터 사용 (재활용)</span>
      <span>이름(Label)이 붙은 값</span>
      <br />
      <br />
      <span className="text-xl font-bold">변수 사용법</span>
      <br />
      <span>{inputContents("declare", "??")} : 보관함 확보, let age;</span>
      <span>
        {inputContents("assign", "??")} : 보관함에 데이터 저장, age = 30;
      </span>
      <span>
        {inputContents("declare2", "??")}과 {inputContents("assign2", "??")}{" "}
        동시에 가능, let age = 30;
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">타입</span>
      <br />
      <span>변수에는 다양한 타입이 있습니다.</span> <br />
      <span>{inputContents("typeof", "t?????")}</span>
      <span>타입을 확인 해볼 수 있는 키워드(메서드, 연산자)</span>
      <br />
      <br />
      <span className="text-xl font-bold">타입 확인</span>
      <span>
        console.log(typeof 'Hello World') : {inputContents("string", "s?????")}
      </span>
      <span>console.log(typeof 40) : {inputContents("number", "n?????")}</span>
      <span>
        console.log(typeof {"(1<2)"}) : {inputContents("boolean", "b??????")}
      </span>
      <span>
        console.log(typeof undefined) :{" "}
        {inputContents("undefined", "u????????")}
      </span>
      <span>
        console.log{"(() => {})"} : {inputContents("function", "f???????")}
      </span>
      <span>
        console.log(typeof {"([])"}) : {inputContents("object", "o?????")}
      </span>
      <span>
        console.log(typeof {"({})"}) : {inputContents("object2", "o?????")}
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">Array.isArray(obj)</span>
      <br />
      <span>obj 가 배열인 경우 반환 값은 {"<true>"} 입니다.</span>
      <br />
      <br />
      <span className="text-xl font-bold">{inputContents("func", "??")}</span>
      <br />
      <span>작은 기능의 단위</span>
      <span>코드의 묶음 (즐겨찾기 버튼)</span>
      <span>코드를 묶음으로 만들어 놓고 필요할때 찾아 사용</span>
      <br />
      <br />
      <span className="text-xl font-bold">함수 선언 방식</span>
      <br />
      <span>
        함수 {inputContents("declareStyle", "??식")} : function hi{" "}
        {"() { return 'Hello World' }"}, 전통방식, 호이스팅 발생
      </span>
      <span>
        함수 {inputContents("expressionStyle", "??식")} : const hi = function{" "}
        {"() { return 'Hello World' }"}
      </span>
      <span>
        {inputContents("arrow", "??표")} 함수 : const hi = () {"=>"} 'Hello
        World', 한줄 코드 작성시 중괄호와 return 생략 가능
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">조건문</span>
      <br />
      <span>어떠한 조건을 판별하는 기준을 만드는 것</span>
      <span>'if', 'else if', 'else' 를 활용</span>
      <br />
      <br />
      <span className="text-xl font-bold">논리 연산자</span>
      <br />
      <span>논리 연산자 NOT의 기호 : {inputContents("not", "?")}</span>
      <span>논리 연산자 AND의 기호 : {inputContents("and", "??")}</span>
      <span>논리 연산자 OR의 기호 : {inputContents("or", "??")}</span>
      <br />
      <br />
      <span className="text-xl font-bold">falsy 값</span>
      <br />
      <span>
        falsy 값은 if문에서 false로 변환되므로 if 구문이 실행되지 않습니다.
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">6가지 falsy 값</span>
      <br />
      <span>if (false)</span>
      <span>if (null)</span>
      <span>if (undefined)</span>
      <span>if (0)</span>
      <span>if (NaN)</span>
      <span>if ('')</span>
      <br />
      <br />
      <span className="text-xl font-bold">문자열</span>
      <br />
      <span>문자들이 ''나 "", ``로 감싸져 있는 경우, string</span>
      <br />
      <br />
      <span className="text-xl font-bold">
        문자열 사용법 (String.prototype. 은 생략)
      </span>
      <br />
      <span>String.length : 문자열의 길이를 확인</span>
      <span>toLowerCase() : 소문자로 변환된 문자열을 반환합니다.</span>
      <span>
        {inputContents("upper", "to?????????()")} : 대문자로 변환된 문자열을
        반환합니다.
      </span>
      <span>
        {inputContents("trim", "t???()")} : 문자열 양 끝의 공백을 제거합니다.
      </span>
      <span>
        {inputContents("split", "s????()")} : 문자열의 문자를 전달해준 인자
        기준으로 분리하여 배열을 반환합니다.
      </span>
      <span>
        Array.prototype.join() : 배열의 요소들을 전달해준 인자를 사이에 두고
        합쳐진 문자열을 반환합니다.
      </span>
      <br />
      <br />
      <span>모든 String method 는 immutable 입니다.</span>
      <span>Array method 는 immutable 및 mutable 여부 잘 기억해야 합니다.</span>
      <br />
      <br />
      <span className="text-xl font-bold">반복문</span>
      <br />
      <span>단순한 반복을 보다 효율적이고 간결하게 할 수 있도록 해줍니다.</span>
      <span>조건을 잘 적용해야합니다.</span>
      <br />
      <br />
      <span className="text-xl font-bold">for 구문</span>
      <br />
      <span>
        반복할 조건을
        {inputContents("reset", "초??")}, 조건식, 증감문 순으로 넣어 줍니다.
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">while 구문</span>
      <br />
      <span>초기화가 필요 없을때 while 구문 사용합니다.</span>
      <br />
      <br />
      <button className="w-[80px]" onClick={answerHandler}>
        제출
      </button>
    </>
  );
};

const JS1 = () => {
  return <Layout contents={<JS1Contents />} />;
};

export default JS1;
