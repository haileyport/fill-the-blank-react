const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">
        {inputContents("object", "??")}
      </span>
      <span className="mb-12">
        클론으로 구분된 이름/값 쌍의 형태를 지닌 데이터 타입이며 중괄호로
        생성된다.
      </span>
      <span className="text-xl font-bold mb-8">객체의 특징</span>
      <span>1. 순서가 없는 데이터 모음입니다.</span>
      <span>
        2. 키/값 쌍으로 이루어져 있고, index가 아닌 키로 접근하기 때문에 순서가
        뒤 바뀌어도 상관이 없습니다.
      </span>
      <span>
        3. 객체의 키의 값에는 텍스트, 숫자 뿐만 아니라 함수나 다른 객체도 넣을
        수 있습니다.
      </span>
      <span className="mb-12">
        4. 객체의 키에는 공백, 한글, 특수문자 등이 들어갈 수 있습니다.
      </span>
      <span className="text-xl font-bold mb-8">
        객체 Properties의 접근 방법
      </span>
      <span>
        {inputContents("dot", "???")} notation : 읽기 쉽고 더 자주 사용하는
        방법으로 . 을 사용합니다.
      </span>
      <span>
        {inputContents("bracket", "???????")} notation : 변수, 공백을 사용 할 수
        있습니다.
      </span>
    </>
  );
};

export default Page2;
