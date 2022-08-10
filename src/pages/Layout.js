import React from "react";

const Layout = ({ contents }) => {
  return (
    <div className="h-full">
      <main className="flex justify-center items-center ">
        <form className="flex flex-col text-left w-[700px] mx-32 px-9 py-9 left-1/2 top-1/4	rounded-lg border-2 border-yellow-50 ">
          {contents}
        </form>
      </main>
    </div>
  );
};

export default Layout;
