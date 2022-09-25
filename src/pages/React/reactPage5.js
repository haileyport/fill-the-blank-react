const Page5 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">React 개발 흐름</span>
      <span>1. 컴포넌트 단위로 시작하는 특징이 있습니다.</span>
      <span>
        컴포넌트들은 {inputContents("tree", "??")} 구조로 나타낼 수 있습니다.
      </span>
      <span>
        2. {inputContents("bottomUp", "???")}으로 개발합니다. (Bottom-Up)
      </span>
      <span>테스트가 쉽고 확장성이 좋습니다.</span>
      <span>3. 단일 책임원칙 (SRP: Single Responsibillity Principle)</span>
      <span className="mb-12">하나의 컴포넌트는 한 가지 일만 합니다.</span>
      <span className="text-xl font-bold mb-8">React 데이터 흐름</span>
      <span>
        1. {inputContents("topDown", "???")}으로 전달됩니다. (Top-Down)
      </span>
      <span>데이터 전달 주체는 부모 컴포넌트입니다.</span>
      <span>2. 단방향 데이터 흐름을 따릅니다. (One-way Data-Flow)</span>
      <span>React 의 대표 특징 중 하나 입니다.</span>
    </>
  );
};

export default Page5;
