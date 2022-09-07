const Page3 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">객체 메서드</span>
      <span>
        객체가 가지고 있는 키/값 쌍 중에 키만 골라 배열로 리턴하는 메서드 :{" "}
        {inputContents("Objectkeys", "O?????.????()")}
      </span>
      <span>
        객체가 가지고 있는 키/값 쌍 중에 값만 골라 배열로 리턴하는 메서드 :{" "}
        {inputContents("Objectvalues", "O?????.??????()")}
      </span>
      <span className="mb-12">
        객체가 가지고 있는 키/값 쌍으로 이루어진 배열로 이루어진 2차원 배열을
        리턴하는 메서드 : {inputContents("Objectentries", "O?????.???????()")}
      </span>
      <span className="text-xl font-bold mb-8">
        객체 Properties의 접근 방법
      </span>
      <span>객체를 순회하는 방법 : {inputContents("forin", "f??-??")}</span>
      <span className="mb-12">
        함수를 인자로 받거나 함수를 반환하는 함수 :{" "}
        {inputContents("gocha", "고???")}
      </span>
      <span className="text-xl font-bold mb-8">대표적인 고차 함수</span>
      <span>
        입력으로 들어온 배열 내 모든 요소를 인자로 제공받는 콜백 함수를
        호출함으로써 새로운 배열을 리턴하는 메서드 :{" "}
        {inputContents("map", "m??()")}
      </span>
      <span>
        콜백 함수에 의해 제공된 조건을 통과한 모든 엘리먼트를 가진 새로운 배열을
        리턴하는 메서드 : {inputContents("filter", "f?????()")}
      </span>
      <span>
        호출하는 배열의 각각의 요소에 대해서 콜백 함수를 실행하고 하나의 결과
        값만 리턴하는 메소드 : {inputContents("reduce", "r?????()")}
      </span>
    </>
  );
};

export default Page3;
