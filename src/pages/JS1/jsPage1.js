const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">변수</span>
      <span>각 보관함의 이름</span>
      <span>이름을 통해 데이터 사용 (재활용)</span>
      <span className="mb-12">이름(Label)이 붙은 값</span>
      <span className="text-xl font-bold mb-8">변수 사용법</span>
      <span>{inputContents("declare", "??")} : 보관함 확보, let age;</span>
      <span>
        {inputContents("assign", "??")} : 보관함에 데이터 저장, age = 30;
      </span>
      <span>
        {inputContents("declare2", "??")}과 {inputContents("assign2", "??")}{" "}
        동시에 가능, let age = 30;
      </span>
    </>
  );
};

export default Page1;
