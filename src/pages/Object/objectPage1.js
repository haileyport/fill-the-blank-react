const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>객체 지향 개요</span>
      <span>
        - 사람이 세계를 보고 이해하는 방법을 프로그래밍에 흉내낸 방법론
      </span>
      <span>
        - 코드를 추상화하여 직관적으로 생각할 수 있도록 하는 것 입니다.
      </span>
      <span>- 데이터와 기능을 한곳에 묶어서 처리합니다. (객체 지향 원칙)</span>
      <span className='mb-12'>
        - 하나의 요소를 객체 단위로 구분시켜서 생각하면 보다 좋은 설계를 할 수
        있습니다.
      </span>
      <span className='text-xl font-bold mb-8'>객체 지향의 용어</span>
      <span>
        - {inputContents('class', '???')} : 청사진, 설계도의 역할; 세부속성이
        들어가지 않습니다.
      </span>
      <span>
        - {inputContents('instance', '????')} : 클래스를 바탕으로 한 객체;
        속성과 메서드가 함께 존재합니다.
      </span>
      <span>- 생성자 : 속성을 넣어주는 역할을 합니다</span>
      <span>- {inputContents('property', '??')} : 객체 내부 데이터</span>
      <span className='mb-12'>
        - {inputContents('method', '???')} : 객체 내부 데이터
      </span>
      <span className='text-xl font-bold mb-8'>객체지향 네 가지 컨셉</span>
      <span>
        - {inputContents('capsule', '???')} : 은닉화, 재사용성 향상에 관련이
        있습니다.
      </span>
      <span>
        - {inputContents('abstract', '???')} : 내부 구현은 복잡한데 실제로
        노출되는 부분은 단순하게 만든다는 개념입니다.
      </span>
      <span>
        - {inputContents('inheritance', '??')} : 부모 클래스의 특징을 자식
        클래스가 물려받는 것입니다.
      </span>
      <span className='mb-12'>
        - {inputContents('polymorphism', '???')} : 다양한 형태를 가질 수 있다는
        뜻입니다.
      </span>
    </>
  );
};

export default Page1;
