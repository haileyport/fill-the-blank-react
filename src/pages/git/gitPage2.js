const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold mb-8">Repository</span>
      <span>
        Git Repository: 저장소. 말 그대로 파일이나 폴더를 저장해두는 곳
      </span>
      <span>
        Remote Repository: 원격 온라인 서버 상의 저장소로, 여러 사람이 함께
        공유할 수 있다.
      </span>
      <span className="mb-12">
        Local Repository: 내 컴퓨터의 저장소로, 개인 전용 저장소이다.
      </span>
      <span className="text-lg font-bold mb-8">Git 관련 용어</span>
      <span>
        Fork: 다른 사람의 Remote Repository를 내 Remote Repository로 가지고오는
        작업
      </span>
      <span>
        {inputContents("clone", "?????")}: Remote Repository를 Local
        Repository로 가져오는 작업
      </span>
      <span>
        {inputContents("push", "????")}: Local Repository에 기록해 놓은 commit을
        Remote Repository로 업로드 하는 작업
      </span>
      <span>
        {inputContents("pull", "????")}: Remote Repository의 변경 사항을 Local
        Repository로 가져오는 작업
      </span>
    </>
  );
};

export default Page2;
