const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>리액트 정의</span>
      <span className='mb-12'>
        프론트엔드 개발을 위한 JavaScript 오픈소스 라이브러리
      </span>
      <span className='text-xl font-bold mb-8'>리액트의 3가지 특징</span>
      <span className='text-lg font-bold mb-8'>1. 선언형 (Declarative)</span>
      <span>
        명시적 작성이 가능한 JSX 활용한 {inputContents('declare', '???')}{' '}
        프로그래밍 지향
      </span>
      <span className='mb-12'>
        컴포넌트 단위로 개발하며 코드를 보고 실제 동작 상상 가능
      </span>
      <span className='text-lg font-bold mb-8'>
        2. 컴포넌트 기반 (Component-Based)
      </span>
      <span>
        {inputContents('component', '????')} : 기능 단위 구현을 위해 코드를
        묶어둔 것
      </span>
      <span>컴포넌트로 분리하면 서로 독립적이고 재사용 가능합니다.</span>
      <span>기능 개발(작동) 자체에 집중해서 개발할 수 있습니다.</span>
      <span className='mb-12'>유지보수 및 테스트에 유리합니다.</span>
      <span className='text-lg font-bold mb-8'>
        3. 범용성 (Learn Once, Write Anywhere)
      </span>
      <span>JavaScript 프로젝트 어디에든 유연하게 적용될 수 있습니다.</span>
      <span>
        프레임워크(Angular) 는 생태계 종속, 라이브러리(React)는 기존
        프로젝트에도 유연하게 사용 가능
      </span>
    </>
  );
};

export default Page1;
