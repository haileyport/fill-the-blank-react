const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">타입</span>
      <br />
      <span>변수에는 다양한 타입이 있습니다.</span> <br />
      <span>{inputContents("typeof", "t?????")}</span>
      <span>타입을 확인 해볼 수 있는 키워드(메서드, 연산자)</span>
      <br />
      <br />
      <span className="text-xl font-bold">타입 확인</span>
      <span>
        console.log(typeof 'Hello World') : {inputContents("string", "s?????")}
      </span>
      <span>console.log(typeof 40) : {inputContents("number", "n?????")}</span>
      <span>
        console.log(typeof {"(1<2)"}) : {inputContents("boolean", "b??????")}
      </span>
      <span>
        console.log(typeof undefined) :{" "}
        {inputContents("undefined", "u????????")}
      </span>
      <span>
        console.log{"(() => {})"} : {inputContents("function", "f???????")}
      </span>
      <span>
        console.log(typeof {"([])"}) : {inputContents("object", "o?????")}
      </span>
      <span>
        console.log(typeof {"({})"}) : {inputContents("object2", "o?????")}
      </span>
    </>
  );
};

export default Page2;
