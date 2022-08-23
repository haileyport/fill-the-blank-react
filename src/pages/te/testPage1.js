const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">Test</span>
      <br />
      <span>박스를 유연하게 늘리거나 줄여 레이아웃을 잡는 방법</span>
      <br />
      <br />
      <span className="text-xl font-bold">
        display: {inputContents("flex", "f???")}
      </span>
      <br />
      <span>
        부모 박스 요소에 적용해 자식 박스의 방향과 크기를 결정하는 레이아웃
        구성법
      </span>
    </>
  );
};

export default Page1;
