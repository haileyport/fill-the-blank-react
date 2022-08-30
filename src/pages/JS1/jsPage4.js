const Page4 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">조건문</span>
      <br />
      <span>어떠한 조건을 판별하는 기준을 만드는 것</span>
      <span>'if', 'else if', 'else' 를 활용</span>
      <br />
      <br />
      <span className="text-xl font-bold">논리 연산자</span>
      <br />
      <span>논리 연산자 NOT의 기호 : {inputContents("not", "?")}</span>
      <span>논리 연산자 AND의 기호 : {inputContents("and", "??")}</span>
      <span>논리 연산자 OR의 기호 : {inputContents("or", "??")}</span>
      <br />
      <br />
      <span className="text-xl font-bold">falsy 값</span>
      <br />
      <span>
        falsy 값은 if문에서 false로 변환되므로 if 구문이 실행되지 않습니다.
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">6가지 falsy 값</span>
      <br />
      <span>if (false)</span>
      <span>if (null)</span>
      <span>if (undefined)</span>
      <span>if (0)</span>
      <span>if (NaN)</span>
      <span>if ('')</span>
    </>
  );
};

export default Page4;
