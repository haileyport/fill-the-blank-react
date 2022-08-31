import React from "react";
import Layout from "../components/Layout";
import { data } from "./../data/dummyData";

const JS2Contents = () => {
  return (
    <>
      <span className="text-xl font-bold">업데이트 예정</span>
      <br />
      <span>
        배열, 객체, 클로저, 고차함수, 클래스 등 추후 업데이트 예정입니다. + Git
      </span>
    </>
  );
};

const JS2 = () => {
  return <Layout contents={<JS2Contents />} />;
};

export default JS2;
