import React from "react";
import "./../index.css";

const Layout = ({ contents }) => {
  return (
    <>
      <div className="flex justify-center">
        <form className="flex flex-col h-fit text-left w-[700px] left-50 px-9 py-9 rounded-lg border-2 border-yellow-50">
          {contents}
        </form>
      </div>
      <footer className="bottom-0 pt-12 left-0 z-20 p-4 w-full">
        <p>
          © 2022 코드스테이츠 SEB FE 40기 박연우, 전은혜, 허정우 | 빈칸 채우기
          Ver.2.0 - 40th 스터디 카페
        </p>
      </footer>
    </>
  );
};

export default Layout;
