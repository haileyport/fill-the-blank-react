const Page3 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">시맨틱 요소</span>
      <span>
        시맨틱 웹이 중시되어서 여러 시맨틱 요소가 HTML5 에서 새롭게
        만들어졌습니다.
      </span>
      <span className="mb-12">
        {inputContents("semantic", "시??")} : 의미가 있는, 의미론적인
      </span>
      <span className="text-xl font-bold mb-8">
        시멘틱 요소 사용해야 하는 이유
      </span>
      <span>
        {inputContents("search", "??")} 엔진이 시멘틱 요소를 더 선호, 구글,
        네이버 등에서 상위 노출
      </span>
      <span className="mb-8">여러 개발자가 작업할 때 편리</span>
      <span className="text-xl font-bold mb-8">시멘틱 요소의 종류</span>
      <span className="mb-8">
        {inputContents("footer", "<f?????>")} : 페이지의 가장 아랫부분에
        위치하며 라이선스, 주소, 연락처 등을 넣습니다.
      </span>
      <span className="mb-8">
        {inputContents("header", "<h?????>")} : 페이지나 해당 섹션의 가장
        윗부분, 사이트의 제목이 보통 들어갑니다.
      </span>
      <span className="mb-8">
        {inputContents("nav", "<n??>")} : 상단바 등 사이트를 안내하는 요소로
        사용. 보통 {"<ul>"}을 넣어 목록 형태로 사용
      </span>
      <span>
        {inputContents("main", "<m???>")} : 문서의 주된 콘텐트를 표시합니다.
      </span>
    </>
  );
};

export default Page3;
