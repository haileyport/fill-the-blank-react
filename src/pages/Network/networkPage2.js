const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>HTTP 개요</span>
      <span>
        - HTML 과 같은 문서를 전송하기 위한 대표적인{' '}
        {inputContents('protocol', '????')}입니다.
      </span>
      <span>- 웹 브라우저와 웹 서버의 소통을 위해 디자인 되었습니다.</span>
      <span className='mb-12'>
        - 클라이언트가 HTTP Message 양식에 맞춰 요청을 보내면 서버도 HTTP
        Message 양식에 맞춰 응답합니다.
      </span>
      <span className='text-xl font-bold mb-8'>HTTP Message 개요</span>
      <span> - 클라이언트와 서버 사이에서 데이터가 교환되는 방식입니다.</span>
      <span>- 요청, 응답 두 가지 유형이 있습니다.</span>
      <span>- 몇 줄의 텍스트 정보로 구성됩니다.</span>
      <span className='text-xl font-bold mb-8'>HTTP Message 구조</span>
      <span className='text-lg font-bold mb-8'>
        - start line (요청시) / status line (응답시)
      </span>
      <span>- 요청이나 응답의 상태를 나타냅니다.</span>
      <span>- 항상 {inputContents('first', '???')} 줄에 위치합니다.</span>
      <span className='text-lg font-bold mb-8'>HTTP headers</span>
      <span>
        - 요청을 지정하거나 메세지에 포함된 본문을 설명하는 헤더의 집합입니다.
      </span>
      <span className='text-lg font-bold mb-8'>empty line</span>
      <span>- 헤더와 본문을 구분하는 빈 줄이 있습니다.</span>
      <span className='text-lg font-bold mb-8'>body</span>
      <span>
        - 요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서를 포함합니다.
      </span>
      <span>- 요청과 응답의 유형에 따라 선택적으로 사용합니다.</span>
    </>
  );
};

export default Page2;
