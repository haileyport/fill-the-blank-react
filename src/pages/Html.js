import React, { useState } from "react";
import Layout from "../components/Layout";
import { data } from "./../data/dummyData";
import { inputTag } from "./../utils/input";

import Page1 from "./html/htmlPage1";
import Page2 from "./html/htmlPage2";
import Page3 from "./html/htmlPage3";

const HtmlContents = () => {
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
    const range = data.html[goPage - 1];
    for (let key in range) {
      if (range[key] === text[key]) {
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
    3: <Page3 inputContents={inputContents} />,
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
      {goPage <= Object.keys(pages).length ? (
        <button className="w-[80px] mt-12" onClick={answerHandler}>
          제출
        </button>
      ) : (
        <>{/* 다음 섹션으로 넘어가는 로직 적용 필요 */}</>
      )}
    </>
  );
};

const HTML = () => {
  return <Layout contents={<HtmlContents />} />;
};

export default HTML;
