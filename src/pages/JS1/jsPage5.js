const Page5 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">문자열</span>
      <span className="mb-12">
        문자들이 ''나 "", ``로 감싸져 있는 경우, string
      </span>
      <span className="text-xl font-bold mb-8">
        문자열 사용법 (String.prototype. 은 생략)
      </span>
      <span>String.length : 문자열의 길이를 확인</span>
      <span>toLowerCase() : 소문자로 변환된 문자열을 반환합니다.</span>
      <span>
        {inputContents("upper", "to?????????()")} : 대문자로 변환된 문자열을
        반환합니다.
      </span>
      <span>
        {inputContents("trim", "t???()")} : 문자열 양 끝의 공백을 제거합니다.
      </span>
      <span>
        {inputContents("split", "s????()")} : 문자열의 문자를 전달해준 인자
        기준으로 분리하여 배열을 반환합니다.
      </span>
      <span className="mb-12">
        Array.prototype.join() : 배열의 요소들을 전달해준 인자를 사이에 두고
        합쳐진 문자열을 반환합니다.
      </span>
      <span>모든 String method 는 immutable 입니다.</span>
      <span>Array method 는 immutable 및 mutable 여부 잘 기억해야 합니다.</span>
    </>
  );
};

export default Page5;
