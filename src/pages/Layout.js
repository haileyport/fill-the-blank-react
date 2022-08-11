import React from "react";

const Layout = ({ contents }) => {
  return (
    <div className="h-full">
      <main className="flex justify-center items-center">
        <form className="flex flex-col text-left w-[700px] absolute top-40 left-50 px-9 py-9 rounded-lg border-2 border-yellow-50 ">
          {contents}
        </form>
      </main>
    </div>
  );
};

export default Layout;
