const Page3 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">React Router</span>
      <span className="text-lg font-bold mb-8">개요</span>
      <span>라우팅을 위해 가장 많이 사용하는 라이브러리</span>
      <span className="mb-12">
        SPA 는 하나의 페이지를 가지고 있지만 한 종류의 화면만 사용하지 않습니다.
      </span>
      <span className="text-lg font-bold mb-8">주요 컴포넌트</span>
      <span>1. 라우터 역할(Router)</span>
      <span>
        {inputContents("browserrouter", "<?????????????>")}: History API of
        HTML5 사용하여 페이지를 새로고침하지 않고 변경
      </span>
      <span>2. 경로를 매칭해주는 역할(Route Matchers)</span>
      <span>
        {inputContents("routes", "<??????>")}: 여러 {"<Route>"} 컴포넌트를 감싸
        경로가 일치하는 라우터에 렌더링합니다.
      </span>
      <span>
        {inputContents("route", "<?????>")}: path, element 속성을 가지고 url 에
        따라 어떤 컴포넌트를 보여줄지 결정합니다.
      </span>
      <span>3. 경로를 변경하는 역할(Route Changers)</span>
      <span>
        {inputContents("link", "<????>")}: History API of HTML 사용해 페이지의
        주소만 변경 해줍니다.
      </span>
    </>
  );
};

export default Page3;
