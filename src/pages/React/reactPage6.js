const Page6 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">React 데이터 설계 순서</span>
      <span>"데이터 정의, 상태 위치 정하기" 순서로 데이터를 설계합니다.</span>
      <span className="text-lg font-bold mb-8">데이터 정의</span>
      <span>- 부모로부터 props 를 통해 전달됩니까?</span>
      <span>- 시간이 지나도 변하지 않습니까?</span>
      <span className="mb-12">
        - 컴포넌트 안의 다른 state 나 props 로 계산이 가능합니까?
      </span>
      <span className="mb-12">
        위의 세 가지 질문에 해당한다면 {inputContents("state", "?????")}가
        아닙니다
      </span>
      <span className="text-xl font-bold mb-8">상태 위치 정하기</span>
      <span>1. 상태가 특정 컴포넌트에서만 유의미 하다면 쉽습니다.</span>
      <span className="mb-12">
        2. 하나의 상태를 기반으로 두 컴포넌트가 영향 받는다면 공통 소유
        컴포넌트를 찾아 그곳에 상태를 위치해야 합니다.
      </span>
      <span className="text-xl font-bold mb-8">
        상태 {inputContents("getUp", "?????")}
      </span>
      <span>
        props 로 상위 컴포넌트의 상태 변경함수(Setter) 를 하위 컴포넌트로
        내려주고 하위 컴포넌트가 해당 함수를 실행 합니다.
      </span>
    </>
  );
};

export default Page6;
