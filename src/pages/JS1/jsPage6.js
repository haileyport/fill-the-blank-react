const Page4 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">반복문</span>
      <span>단순한 반복을 보다 효율적이고 간결하게 할 수 있도록 해줍니다.</span>
      <span className="mb-12">조건을 잘 적용해야합니다.</span>
      <span className="text-xl font-bold mb-8">for 구문</span>
      <span className="mb-12">
        반복할 조건을
        {inputContents("reset", "초??")}, 조건식, 증감문 순으로 넣어 줍니다.
      </span>
      <span className="text-xl font-bold mb-8">while 구문</span>
      <span>초기화가 필요 없을때 while 구문 사용합니다.</span>
    </>
  );
};

export default Page4;
