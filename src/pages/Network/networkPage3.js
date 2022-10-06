const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>
        HTTP 의 무상태성 (Stateless)
      </span>
      <span>- ‘상태를 가지지 않는다’ 는 뜻 입니다.</span>
      <span>- HTTP 가 클라이언트나 서버의 상태를 확인하지 않습니다.</span>
      <span className='mb-12'>
        - 따라서 필요에 따라 다른 방법(쿠키-세션, API 등)을 통해 상태를 확인할
        수 있습니다.
      </span>
      <span className='text-xl font-bold mb-8'>
        SSR 개요 (Server Side Rendering)
      </span>
      <span>
        - 웹 페이지를 브라우저로 보내기 전에 {inputContents('server', '??')}에서
        완전히 렌더링 합니다.
      </span>
      <span className='mb-12'>
        - 다른 경로로 이동 할때마다 새로운 HTML 파일을 보내줍니다.
      </span>
      <span className='text-xl font-bold mb-8'>
        CSR 개요 (Client Side Rendering)
      </span>
      <span>
        - {inputContents('client', '?????')} 에서 페이지를 렌더링합니다.
      </span>
      <span>
        - 골격이 될 단일 페이지(Single Page) 를 JavaScript 와 함께 클라이언트에
        보냅니다.
      </span>
      <span className='mb-12'>
        - 다른 경로로 이동해도 페이지를 리렌더링 할뿐 HTML 파일은 동일합니다.
      </span>
      <span className='text-xl font-bold mb-8'>SSR 사용하는 경우</span>
      <span>- SEO 가 우선순위인 경우 (Search Engine Optimization)</span>
      <span>
        - 웹 페이지 사용자와 {inputContents('interaction', '????')}이 적은 경우
      </span>
      <span className='mb-12'>
        - 웹 페이지 {inputContents('webFirst', '???')} 렌더링이 빠르게 필요한
        경우
      </span>
      <span className='text-lg font-bold mb-8'>CSR 사용하는 경우</span>
      <span>- SEO 가 우선순위가 아닌 경우</span>
      <span>- 풍부한 {inputContents('interaction2', '????')}이 있는 경우</span>
      <span>
        - 빠른 라우팅으로 강력한 {inputContents('experiance', '?????')}을 제공을
        제공하는 경우
      </span>
    </>
  );
};

export default Page2;
