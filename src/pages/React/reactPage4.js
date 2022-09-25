const Page4 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">React Props</span>
      <span>1. 외부로부터 전달받은 값(속성) 입니다.</span>
      <span>출생지, 생일 같이 변하지 않는 속성입니다.</span>
      <span>2. {inputContents("object", "??")} 형태 입니다.</span>
      <span>따라서, 어떤 타입의 값이라도 전달할 수 있습니다.</span>
      <span className="mb-12">읽기 전용입니다.</span>
      <span className="text-xl font-bold mb-8">React State</span>
      <span>컴포넌트 내에서 변할 수 있는 값입니다.</span>
      <span>
        State 를 다루기 위해 State Hook {inputContents("useState", "use?????")}
        을 사용합니다.
      </span>
      <span>
        React State 의 상태 변경은 상태 변경 함수 호출로만 가능합니다.
      </span>
    </>
  );
};

export default Page4;
