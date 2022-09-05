const Page3 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">Array.isArray(obj)</span>
      <span className="mb-12">
        obj 가 배열인 경우 반환 값은 {"<true>"} 입니다.
      </span>
      <span className="text-xl font-bold mb-8">
        {inputContents("func", "??")}
      </span>
      <span>작은 기능의 단위</span>
      <span>코드의 묶음 (즐겨찾기 버튼)</span>
      <span className="mb-12">
        코드를 묶음으로 만들어 놓고 필요할때 찾아 사용
      </span>
      <span className="text-xl font-bold mb-8">함수 선언 방식</span>
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
    </>
  );
};

export default Page3;
