import React, { useState } from "react";
import Layout from "../components/Layout";
import { data } from "./../data/dummyData";

const MetaContents = () => {
  const [text, setText] = useState("");
  const [newCss, setnewCss] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    for (let key in data.meta) {
      if (data.meta[key] === text) {
        setnewCss(`bg-green-100`);
      } else {
        setnewCss(`bg-red-100`);
        setText("");
      }
    }
  };

  return (
    <>
      <span className="text-xl font-bold mb-8">메타인지 (MetaCognition)</span>
      <span className="mb-8">생각에 관한 생각, 내 머리 속의 거울</span>
      <span>1. 자기 자신을 보는 거울</span>
      <span>2. 스스로를 믿는 능력</span>
      <span className="mb-12">3. 나의 완벽하지 않은 모습을 인정하는 것</span>
      <input
        id="brainstorm"
        type="text"
        placeholder="???스톰"
        value={text || ""}
        onChange={textHandler}
        className={newCss}
      />
      <span className="mt-8 mb-12">
        완성되지 않은 생각들이 부딪히며 사고가 확장되는 것
      </span>
      <button className="w-[80px]" onClick={answerHandler}>
        제출
      </button>
    </>
  );
};

const Meta = () => {
  return <Layout contents={<MetaContents />} />;
};

export default Meta;
