const Page7 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">Effect Hook</span>
      <span>
        부수효과(Side Effect) : 함수 내 어떤 구현이 함수 외부에 영향을 끼치는
        경우
      </span>
      <span className="text-lg font-bold mb-8">데이터 정의</span>
      <span className="mb-12">
        React 에서 상태, 데이터가 부수 효과를 갖는 경우 Effect Hook,{" "}
        {inputContents("useEffect", "?????????")} 를 사용합니다.
      </span>
      <span className="text-xl font-bold mb-8">useEffect() 개요</span>
      <span className="mb-12">
        첫번째 인자로 함수, 두번째 인자는 선택적으로{" "}
        {inputContents("dependency", "??? ??")}(Dependency Array) 을 갖습니다.
      </span>
      <span className="text-xl font-bold mb-8">useEffect() 조건부 실행</span>
      <span>1. 종속성 배열이 없을 때</span>
      <span>1) 컴포넌트가 처음 생성될 때</span>
      <span>2) props 업데이트 될때</span>
      <span>3) state 업데이트 될때</span>
      <span className="mb-8">useEffect 함수가 실행됩니다</span>
      <span>2. 종속성 배열이 빈 배열 일때</span>
      <span className="mb-8">
        컴포넌트가 처음 생성될 때만 함수 실행됩니다.{" "}
      </span>
      <span>3. 종속성 배열에 상태가 있을때</span>
      <span>
        배열의 요소에 해당하는 값의 변경이 일어날 때 함수가 실행됩니다.
      </span>
    </>
  );
};

export default Page7;
