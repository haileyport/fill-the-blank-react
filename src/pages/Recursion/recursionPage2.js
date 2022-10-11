const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className='text-xl font-bold mb-8'>
        {inputContents('closer', '???')} : 함수와 함수가 선언된 환경의 렉시컬
        스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 이 스코프에 접근할
        수 있게 하는 기술입니다.
      </span>
      <span>
        내부함수는 외부함수의 지역변수에 접근 할 수 있는데 외부함수의 실행이
        끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할
        수 있습니다. 이러한 매커니즘을 클로저라고 합니다.
      </span>
      <span>- 클로저 함수는 함수 안의 함수라고 말할 수 있습니다.</span>
      <span>- 클로저 함수는 리턴하는 함수에 의해 스코프가 구분됩니다.</span>
      <span className='mb-12'>
        외부함수에서 선언된 변수를 내부함수에서 참조한다면 그 내부함수는 클로저
        함수입니다.
      </span>
      <span className='text-xl font-bold mb-8'>
        {inputContents('recursion', '????')} : 함수에서 자기 자신을 다시 호출해
        작업을 수행하는 함수입니다.
      </span>
      <span className='text-lg font-bold mb-8'>재귀 함수가 필요한 경우</span>
      <span>
        - 주어진 문제를 비슷한 구조의 더 작은 문제로 나눌 수 있는 경우
      </span>
      <span>
        - 중첩된 반복문이 많거나 반복문의 중첩 횟수를 예측하기 어려운 경우
      </span>
      <span className='mb-12'>
        base case를 분기로 문제를 더 이상 작게 쪼개지 못하는 경우까지 자기
        자신을 호출하여 더 작은 문제로 쪼갤 수 있습니다.
      </span>
      <span className='text-lg font-bold mb-8'>재귀 함수의 장단점</span>
      <span>장점</span>
      <span>
        - 변수의 개수를 줄일 수 있습니다. 예를 들어 현재 상태를 저장해야 할 경우
        tmp 변수를 만들기보다, 현재 상태를 메소드를 통해 재귀적으로 호출하면서
        변경된 상태를 전달 함으로 tmp 변수를 정의하지 않아도 됩니다.
      </span>
      <span>- 반복문을 대체 할 수 있어 코드가 간결해집니다.</span>
      <span className='mb-12'>
        상황에 따라 반복문이 여러번 중첩되어야 하는 경우 코드의 가독성을
        떨어뜨리고 얼마나 반복되는지 예측하기 힘든 경우에 재귀함수를
        사용함으로써 가독성을 높이고 비교적 예측하기 쉽게 만들어줍니다.
      </span>
      <span>단점</span>
      <span>
        - 지속적으로 함수를 호출하게 되면서 함수 내에서 정의된 로컬변수,
        파라미터, 리턴값 모두 Call stack에 저장해야합니다. 이런 과정은 선언한
        변수의 값만 사용하는 반복문보다 메모리를 더 많이 사용하게 되고 메모리가
        스택의 공간을 넘어가게 되면 Stack overflow 문제가 발생하게 됩니다.
      </span>
      <span className='mb-12'>
        - 함수 호출에서 복귀를 위한 컨텍스트 스위칭에 비용이 발생하게 됩니다.
      </span>
    </>
  );
};

export default Page2;
