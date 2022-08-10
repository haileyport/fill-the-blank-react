import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const category = [
    { title: "메타인지", url: "/meta" },
    { title: "HTML", url: "/html" },
    { title: "CSS", url: "/css" },
    { title: "JavaScript1", url: "/javascript1" },
    { title: "JavaScript2", url: "/javascript2" },
  ];
  return (
    <div className="flex flex-row justify-between items-center h-16 mx-auto px-4 bg-indigo-900">
      <header>
        <Link className="font-bold text-violet-100" to="/">
          빈칸 채우기 for 40th 스터디 카페
        </Link>
      </header>
      <div className="hidden md:flex space-x-1">
        {category.map((el, idx) => {
          return (
            <Link
              key={idx}
              className="flex py-5 px-2 font-bold text-violet-100"
              to={el.url}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
      {/* TODO: 햄버거 메뉴 */}
      {/* ref: https://cpro95.tistory.com/531 */}
      {/* <div className="md:hidden flex items-center">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Menu;
