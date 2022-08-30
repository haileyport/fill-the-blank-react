const Page4 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">반복문</span>
      <br />
      <span>단순한 반복을 보다 효율적이고 간결하게 할 수 있도록 해줍니다.</span>
      <span>조건을 잘 적용해야합니다.</span>
      <br />
      <br />
      <span className="text-xl font-bold">for 구문</span>
      <br />
      <span>
        반복할 조건을
        {inputContents("reset", "초??")}, 조건식, 증감문 순으로 넣어 줍니다.
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">while 구문</span>
      <br />
      <span>초기화가 필요 없을때 while 구문 사용합니다.</span>
    </>
  );
};

export default Page4;
