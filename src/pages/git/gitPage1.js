const Page1 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">버전관리를 사용하는 이유</span>
      <span>1. 파일이 변경되면 변경 이력을 저장할 수 있다</span>
      <span>2. 이전 버전으로 돌아갈 수 있다</span>
      <span>3. 어떤 변경 사항이 발생했는지 알아보기 쉽다</span>
      <span>4. 협업하기 좋다</span>
      <span className="mb-12">5. 백업용으로 사용할 수 있다</span>
      <span className="text-lg font-bold mb-8">
        {inputContents("git", "???")}: 개발자의 코드를 효율적으로 관리하기
        위해서 개발된 분산형 버전 관리 시스템
      </span>
      <span>소스 코드 기록을 관리하고 추적할 수 있다.</span>
      <span>Github: Git repository를 관리할 수 있는 클라우드 기반 서비스</span>
      <span>스냅샷: 특정 시점에 생성된 백업 복사본</span>
      <span>
        {inputContents("commit", "??????")}: 스냅샷을 만들어 주는 작업
      </span>
    </>
  );
};

export default Page1;
