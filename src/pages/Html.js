import React, { useState } from "react";
import Layout from "./Layout";
import { data } from "./../data/dummyData";
import { inputTag } from "./../utils/input";

const HtmlContents = () => {
  const [text, setText] = useState({});
  const [newCss, setNewCss] = useState({});

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
    for (let key in data.html) {
      if (key === text[key]) {
        changeCss(key, `bg-green-100`);
      } else {
        changeCss(key, `bg-red-100`);
        changeText(key, "");
      }
    }
  };

  const inputContents = (name, place) =>
    inputTag(name, place, text, textHandler, newCss);

  return (
    <>
      <span className="text-xl font-bold">HTML</span>
      <br />
      <span>웹 페이지의 틀을 만드는 마크업 언어</span>
      <br />
      <br />
      <span className="text-xl font-bold">HTML 용법</span>
      <span>1. HTML은 tag들의 집합</span>
      <span>2. 태그 : 부등호로 묶인 HTML의 기본 구성 요소</span>
      <span>3. HTML 확장자 사용</span>
      <br />
      <br />
      <span className="text-xl font-bold">
        HTML은{"\n"}
        {inputContents("tree", "t???")}
        {"\n"}구조입니다.
      </span>
      <span>부모 노드, 자식 노드로 구성되어 있습니다.</span>
      <br />
      <br />
      <span className="text-xl font-bold">자주 사용되는 태그들</span>
      <br />
      <span>{`<div> : Divition`}</span>
      <span>{inputContents("span", "<s???>")} : Span</span>
      <span>{inputContents("img", "<i??>")} : Img</span>
      <span>{inputContents("link", "<l???>")} : Link</span>
      <span>{inputContents("ul", "<u?>")} : Unordered List</span>
      <span>{inputContents("ol", "<o?>")} : Ordered List</span>
      <span>{inputContents("li", "<l?>")} : List Item</span>
      <span>
        {inputContents("input", "<i????>")} : Input(Text, Radio, Checkbox)
      </span>
      <span>
        {inputContents("textarea", "<t???????>")} : Multi-line Text Input
      </span>
      <span>{inputContents("button", "<b?????>")} : Button</span>
      <br />
      <br />
      <span className="text-xl font-bold">시맨틱 요소</span>
      <br />
      <span>
        시맨틱 웹이 중시되어서 여러 시맨틱 요소가 HTML5 에서 새롭게
        만들어졌습니다.
      </span>
      <span>{inputContents("semantic", "시??")} : 의미가 있는, 의미론적인</span>
      <br />
      <br />
      <span className="text-xl font-bold">시멘틱 요소 사용해야 하는 이유</span>
      <br />
      <span>
        {inputContents("search", "??")} 엔진이 시멘틱 요소를 더 선호, 구글,
        네이버 등에서 상위 노출
      </span>
      <span>여러 개발자가 작업할 때 편리</span>
      <br />
      <span className="text-xl font-bold">시멘틱 요소의 종류</span>
      <br />
      <span>
        {inputContents("footer", "<f?????>")} : 페이지의 가장 아랫부분에
        위치하며 라이선스, 주소, 연락처 등을 넣습니다.
      </span>
      <br />
      <span>
        {inputContents("header", "<h?????>")} : 페이지나 해당 섹션의 가장
        윗부분, 사이트의 제목이 보통 들어갑니다.
      </span>
      <br />
      <span>
        {inputContents("nav", "<n??>")} : 상단바 등 사이트를 안내하는 요소로
        사용. 보통 {"<ul>"}을 넣어 목록 형태로 사용
      </span>
      <br />
      <span>
        {inputContents("main", "<m???>")} : 문서의 주된 콘텐트를 표시합니다.
      </span>
      <br />
      <span className="text-xl font-bold">HTML의 속성(attributes)</span>
      <br />
      <span>
        {inputContents("id", "i?")} : 고유한(unique) 이름을 붙일 때, 중복 불가.
        Selector 기호 : #
      </span>
      <br />
      <span>
        {inputContents("class", "c????")} : 반복되는 영역을 유형별로 구분할 때,
        중복 가능, Selector 기호 : .
      </span>
      <br />
      <br />
      <button className="w-[80px]" onClick={answerHandler}>
        제출
      </button>
    </>
  );
};

const HTML = () => {
  return <Layout contents={<HtmlContents />} />;
};

export default HTML;
