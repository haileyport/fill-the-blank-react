import React, { useState } from "react";
import Layout from "../components/Layout";
import { data } from "./../data/dummyData";
import { inputTag } from "./../utils/input";

const CssContents = () => {
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
    for (let key in data.css) {
      if (key === text[key]) {
        changeCss(key, `bg-green-100`);
      } else {
        changeCss(key, `bg-red-100`);
        changeText(key, "");
      }
    }
  };

  return (
    <>
      <span className="text-xl font-bold mb-8">
        CSS (Cascading Style Sheets)
      </span>
      <span className="mb-8">
        웹 페이지 스타일 및 레이아웃을 정의하는 스타일시트 언어
      </span>
      <span>
        더 나은 사용자 경험(UX)을 제공하기 위해 UI 및 레이아웃을 적절히
        구성합니다.
      </span>
      <span className="mb-12">
        배우기 가장 쉬운 동시에, 가장 어려운 언어 중 하나
      </span>
      <span className="text-xl font-bold">Flexbox</span>
      <span className="mb-12">
        박스를 유연하게 늘리거나 줄여 레이아웃을 잡는 방법
      </span>
      <span className="text-xl font-bold mb-8">
        display: {inputContents("flex", "f???")}
      </span>
      <span className="mb-12">
        부모 박스 요소에 적용해 자식 박스의 방향과 크기를 결정하는 레이아웃
        구성법
      </span>
      <span className="text-xl font-bold mb-8">
        부모 요소에 적용해야하는 Flexbox 속성
      </span>
      <span className="mb-8">
        {inputContents("flex-direction", "????-????????n")} : 정렬 축 정하기,
        가본값은 가로 정렬, (row, column, ...)
      </span>
      <span className="mb-8">
        {inputContents("justify-content", "???????-??????t")} : 자식 요소들을
        축의 수평 방향으로 어떻게 정렬할 것인지 정합니다.
      </span>
      <span className="mb-12">
        {inputContents("align-item", "?????-???m")} : 자식 요소들을 축의 수직
        방향으로 어떻게 정렬할 것인지 정합니다.
      </span>
      <button className="w-[80px]" onClick={answerHandler}>
        정답 확인
      </button>
    </>
  );
};

const CSS = () => {
  return <Layout contents={<CssContents />} />;
};

export default CSS;
