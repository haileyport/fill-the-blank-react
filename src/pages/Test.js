import React, { useState } from "react";
import Layout from "../components/Layout";
import { data } from "../data/dummyData";
import { inputTag } from "../utils/input";

import Page1 from "./te/testPage1";
import Page2 from "./te/testPage2";

const TestContents = () => {
  const [text, setText] = useState({});
  const [newCss, setNewCss] = useState({});
  const [isAns, setIsAns] = useState({});
  const [goPage, setGoPage] = useState(1);

  const inputContents = (name, place) => {
    return inputTag(name, place, text, textHandler, newCss);
  };

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
    for (let key in data.test) {
      if (key === text[key]) {
        changeCss(key, `bg-green-100`);
        isAns[key] = true;
      } else {
        changeCss(key, `bg-red-100`);
        isAns[key] = false;
        changeText(key, "");
      }
    }

    let pass = true;

    for (let item in isAns) {
      if (!isAns[item]) {
        pass = false;
      }
    }

    if (pass) setGoPage(goPage + 1);
  };

  const pages = {
    1: <Page1 inputContents={inputContents} />,
    2: <Page2 inputContents={inputContents} />,
  };

  return (
    <>
      {goPage > Object.keys(pages).length ? (
        <>
          <div>축하합니다! 다음 문제로 넘어가세요.</div>
        </>
      ) : (
        pages[goPage]
      )}
      <br />
      <br />
      <button className="w-[80px]" onClick={answerHandler}>
        제출
      </button>
    </>
  );
};

const Test = () => {
  return <Layout contents={<TestContents />} />;
};

export default Test;
