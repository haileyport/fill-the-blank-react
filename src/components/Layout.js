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
    </>
  );
};

export default Layout;
