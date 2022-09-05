const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">HTML</span>
      <span className="mb-12">웹 페이지의 틀을 만드는 마크업 언어</span>
      <span className="text-xl font-bold">HTML 용법</span>
      <span>1. HTML은 tag들의 집합</span>
      <span>2. 태그 : 부등호로 묶인 HTML의 기본 구성 요소</span>
      <span className="mb-12">3. HTML 확장자 사용</span>
      <span className="text-xl font-bold">
        HTML은{"\n"}
        {inputContents("tree", "??")}
        {"\n"}구조입니다.
      </span>
      <span className="mb-12">부모 노드, 자식 노드로 구성되어 있습니다.</span>
      <span className="text-xl font-bold mb-8">HTML의 속성(attributes)</span>
      <span className="mb-8">
        {inputContents("id", "i?")} : 고유한(unique) 이름을 붙일 때, 중복 불가.
        Selector 기호 : #
      </span>
      <span>
        {inputContents("class", "c????")} : 반복되는 영역을 유형별로 구분할 때,
        중복 가능, Selector 기호 : .
      </span>
    </>
  );
};

export default Page1;
