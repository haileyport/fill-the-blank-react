const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>
        {inputContents('scope', '???')}(=유효범위) : 프로그래밍 언어에서 어느
        범위까지 참조하는 지를 뜻합니다.
      </span>
      <span>스코프의 종류에는 크게 두 가지가 있습니다.</span>
      <span>
        - {inputContents('global', '?? ???')} : 스크립트 전역에서 참조되는
        범위이며, 어느 곳에서든 참조 될 수 있습니다.
      </span>
      <span className='mb-12'>
        - {inputContents('local', '?? ???')} : 스크립트 내부에 특정 영역
        내에서만 참조 되는 범위이며, 이 밖에서는 참조 될 수 없습니다.
      </span>
      <span className='text-xl font-bold mb-8'>스코프의 특징</span>
      <span>- 함수 단위의 스코프</span>
      <span>- 변수명 중복 허용</span>
      <span>- 암묵적 선언</span>
      <span>- 어휘적 유효범위 (lexical scope)</span>
      <span className='mb-12'>
        일반적인 함수는 선언 될 때 this에 바인딩 할 객체가 정적으로 결정되는
        것이 아닌, 함수가 호출될 때 함수가 어떻게 호출 되었는지에 따라 this에
        바인딩 할 객체를 동적으로 결정합니다.
      </span>
      <span className='text-lg font-bold mb-8'>
        {inputContents('block', '?? ???')}
      </span>
      <span>
        중괄호를 기준으로 범위를 구분하며, 블록 범위를 벗어나는 즉시 접근 할 수
        없게 됩니다.
      </span>
      <span className='text-lg font-bold mb-8'>
        {inputContents('func', '?? ???')}
      </span>
      <span className='mb-12'>
        함수 코드 안에서 선언된 변수는 함수 실행부터 종료까지만 참조 가능합니다.
        외부에서는 참조 할 수 없습니다.
      </span>
      <span className='text-lg font-bold mb-8'>화살표 함수는?</span>
      <span className='mb-12'>
        화살표 함수는 선언 할 때에 this에 바이닝 할 객체가 정적으로 결정됩니다.
        동적으로 결정되는 일반 함수와는 다르게, 화살표 함수의 this는 언제나 상위
        스코프의 this를 가리킵니다. 이를 Lexical this라고 하며, 어휘적
        유효범위와 유사하다고 볼 수 있습니다.
      </span>
      <span className='text-lg font-bold mb-8'>
        변수 선언에 따른 스코프 생성
      </span>
      <span>
        {inputContents('var', '???')} 키워드로 선언된 변수는 화살표 함수를
        제외한 모든 블록 스코프를 무시하며 함수 스코프만 따르게 됩니다.
      </span>
      <span>
        따라서 의도하지 않은 값의 변경, 즉{' '}
        {inputContents('sideEffect', '??? ???')}를 초래 할 수 있습니다.
      </span>
      <span className='mb-12'>
        따라서 이런 현상을 막기 위해 let과 const 키워드 사용을 권장합니다.
      </span>
      <span className='text-lg font-bold mb-8'>변수 선언시 주의할 점</span>
      <span>
        - 전역 변수 및 전역 함수는 var 키워드로 선언하지 말아야합니다. (윈도우
        객체에 속하게 됩니다.)
      </span>
      <span>
        - 전역 변수에 너무 많은 변수를 할당하지 말아야합니다. (사이드 이펙트를
        초래하며, 협업시 혼란을 야기합니다.)
      </span>
    </>
  );
};

export default Page1;
