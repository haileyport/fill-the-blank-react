import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const category = [
    { title: '메타인지', url: '/meta' },
    { title: 'HTML', url: '/html' },
    { title: 'CSS', url: '/css' },
    { title: 'JavaScript1', url: '/javascript1' },
    { title: 'JavaScript2', url: '/javascript2' },
    { title: 'React', url: '/react' },
    { title: 'Git', url: '/git' },
    { title: '객체지향', url: '/obj' },
    { title: '네트워크', url: '/network' },
    { title: '스코프&재귀', url: '/recursion' },
  ];
  return (
    <nav className='fixed w-full h-16 items-center mx-auto bg-indigo-900 z-10'>
      <div className='flex justify-between w-full px-8'>
        {/* 메뉴 */}
        <div className='flex justify-between w-full items-center space-x-4'>
          <NavLink className='font-bold text-violet-100' to='/'>
            빈칸 채우기 for 40th 스터디 카페
          </NavLink>
          <div className='hidden xl:flex space-x-1'>
            {category.map((el, idx) => {
              return (
                <NavLink
                  key={idx}
                  className='flex py-5 px-2 font-bold text-violet-100 hover:bg-indigo-700'
                  to={el.url}
                >
                  {el.title}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className='flex'>
          <div className='xl:hidden flex items-center'>
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div
        className={classNames(
          'flex flex-col md:hidden w-full h-fit bg-indigo-900 bg-opacity-80	',
          {
            hidden: !menuToggle,
          }
        )}
      >
        {category.map((el, idx) => {
          return (
            <NavLink
              key={idx}
              className='block py-4 px-8 text-sm text-violet-100 font-semibold hover:bg-indigo-700'
              to={el.url}
            >
              {el.title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;
