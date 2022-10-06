const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>
        브라우저에 URL 을 입력하면 발생하는 일
      </span>
      <span>1. {inputContents('url', '???')}을 해석합니다.</span>
      <span>2. DNS 를 조회합니다. (Domain Name System)</span>
      <span>3. 해당 IP가 존재하는 서버로 이동합니다.</span>
      <span>
        4. ARP 를 이용하여 MAC 주소 변환을 합니다. (Address Resolution Protocol)
      </span>
      <span> - IP -{`>`} MAC</span>
      <span>
        - IP 는 {inputContents('logical', '??')}적인 주소; 서울지 종로구 사직로
        161
      </span>
      <span>
        - MAC 은 {inputContents('physical', '??')}적인 주소; 북위 37° 34′ 43″
        동경 126° 58′ 38″ (37.578611, 126.977222)
      </span>
      <span>
        5. {inputContents('tcp', '???')} 통신을 통해 Socket 을 열어야 합니다. (3
        way handshake로 연결 요청)
      </span>
      <span>6. 서버는 응답을 반환합니다.</span>
      <span> - HTTP 프로토콜로 들어온 패킷을 읽고 처리합니다.</span>
      <span> - 요청에 따른 적정한 응답 값을 반환합니다.</span>
      <span>7. 브라우저는 {inputContents('render', '???')}합니다.</span>
      <span> - HTML 을 읽어 DOM Tree 를 구축합니다.</span>
      <span> - 만들어진 DOM Tree 를 이용하여 화면에 그립니다.</span>
      <span> - 스크립트를 실행합니다.</span>
    </>
  );
};

export default Page1;
