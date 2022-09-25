const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">JSX</span>
      <span className="mb-12">JavaScript 를 확장한 문법</span>
      <span className="mb-12">
        Babel 을 활용하여 {inputContents("browser", "????")}가 이해할 수 있도록
        JavaScript 코드로 변환 해줘야 합니다.
      </span>
      <span className="text-xl font-bold mb-8">SPA</span>
      <span>
        전통적인 방식인 깜빡임을 통해 “페이지 전체 불러오는 행위” 의 단점을
        보완하기 위한 방식입니다.
      </span>
      <span className="text-lg font-bold mb-8">장점</span>
      <span>1. 유저와 상호작용에 빠르게 반응</span>
      <span>2. 서버 과부하 문제 해결</span>
      <span>3. 더 나은 유저 경험 제공</span>
      <span className="text-lg font-bold mb-8">단점</span>
      <span>1. 첫 화면 로딩시간이 길어집니다</span>
      <span className="mb-12">
        2. 검색 엔진 최적화({inputContents("seo", "???(대문자)")}) 가 좋지
        않습니다.
      </span>
    </>
  );
};

export default Page2;
