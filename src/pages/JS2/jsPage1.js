const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">
        {inputContents("array", "??")}
      </span>
      <span className="mb-12">
        다량의 데이터를 다룰 수 있는 데이터 타입이며 대괄호로 생성된다.
      </span>
      <span className="text-xl font-bold mb-8">
        배열 내 요소에 접근하는 방법
      </span>
      <span>
        배열의 {inputContents("index", "i????")}로 접근 할 수 있으며 0부터
        시작합니다.
      </span>
      <span className="mb-12">
        데이터가 존재하지 않는 인덱스의 값은{" "}
        {inputContents("undefined", "u????????")}입니다.
      </span>
      <span className="text-xl font-bold mb-8">배열 메서드</span>
      <span>
        특정 값이 배열인지 여부를 판별 할 수 있는 메서드 : Array.isArray()
      </span>
      <span>
        배열의 마지막 요소를 제거하는 메서드 : {inputContents("pop", "p??()")}
      </span>
      <span>
        배열의 마지막 요소를 추가하는 메서드 : {inputContents("push", "p???()")}
      </span>
      <span>
        배열의 첫번째 요소를 제거하는 메서드 :{" "}
        {inputContents("shift", "s????()")}
      </span>
      <span>
        배열의 첫번째 요소를 추가하는 메서드 :{" "}
        {inputContents("unshift", "u??????()")}
      </span>
      <span>
        배열에 들어있는 특정 값의 인덱스를 반환하는 메서드 :{" "}
        {inputContents("indexOf", "i??????()")}
      </span>
      <span>
        배열에 특정 값이 들어있는지 확인하는 메서드 :{" "}
        {inputContents("includes", "i???????()")}
      </span>
    </>
  );
};

export default Page1;
