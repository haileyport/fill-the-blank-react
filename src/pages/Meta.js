import React, { useState } from "react";
import Layout from "./Layout";

const MetaContents = () => {
  const [text, setText] = useState("");
  const [newCSs, setNewCss] = useState("");
  const data = {
    brainstorm: "브레인스톰",
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    if (data.brainstorm === text) {
      setNewCss(`bg-green-100`);
    } else {
      setNewCss(`bg-red-100`);
      setText("");
    }
  };

  return (
    <>
      <span className="text-xl font-bold">메타인지 (MetaCognition)</span>
      <br />
      <span>생각에 관한 생각, 내 머리 속의 거울</span>
      <br />
      <span>1. 자기 자신을 보는 거울</span>
      <span>2. 스스로를 믿는 능력</span>
      <span>3. 나의 완벽하지 않은 모습을 인정하는 것</span>
      <br />
      <br />
      <input
        id="brainstorm"
        type="text"
        placeholder="???스톰"
        value={text || ""}
        onChange={textHandler}
        className={newCSs}
      />
      <br />
      <span>완성되지 않은 생각들이 부딪히며 사고가 확장되는 것</span>
      <br />
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
