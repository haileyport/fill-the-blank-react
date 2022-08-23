const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">
        부모 요소에 적용해야하는 Flexbox 속성
      </span>
      <br />
      <span>
        {inputContents("flex-direction", "????-????????n")} : 정렬 축 정하기,
        가본값은 가로 정렬, (row, column, ...)
      </span>
      <br />
      <span>
        {inputContents("justify-content", "???????-??????t")} : 자식 요소들을
        축의 수평 방향으로 어떻게 정렬할 것인지 정합니다.
      </span>
      <br />
      <span>
        {inputContents("align-item", "?????-???m")} : 자식 요소들을 축의 수직
        방향으로 어떻게 정렬할 것인지 정합니다.
      </span>
    </>
  );
};

export default Page2;
