import React, { useState } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { data } from './../data/dummyData';

const MainContents = () => {
  const [text, setText] = useState('');
  const [newCss, setnewCss] = useState('');

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    if (data.main.hi === text) {
      setnewCss(`bg-green-100`);
    } else {
      setnewCss(`bg-red-100`);
      setText('');
    }
  };
  return (
    <>
      <span className='text-2xl font-bold mb-8'>
        빈칸 채우기 for 40th 스터디 카페
      </span>
      <span className='text-xl font-bold mb-12'>빈칸채우기 하는법</span>
      <span className='text-gray-800 mb-12'>
        <input
          id='hello'
          type='text'
          placeholder='안????'
          value={text || ''}
          onChange={textHandler}
          className={newCss}
        />
      </span>
      <span>
        1. 위 빈칸에 '안녕' 을 입력하고 엔터 or 제출 버튼 클릭해주세요.
      </span>
      <span className='mb-8'>
        2. 위 빈칸에 '안녕하세요' 을 입력하고 엔터 or 제출 버튼 클릭해주세요.
      </span>
      <span>위 빈칸은 '안녕하세요'를 정답으로 지정해놨습니다.</span>
      <span className='mb-8'>
        submit이 수행되면 채점 결과에 맞는 효과가 나타납니다.
      </span>
      <span>빈칸마다 작성후 엔터 누르시면서 바로 확인하면서 진행하시거나</span>
      <span className='mb-12'>
        페이지의 빈칸 전체 작성후 제출을 클릭하여 확인하면서 진행하시면 됩니다.
      </span>
      <Button answerHandler={answerHandler} text='정답 확인'></Button>
    </>
  );
};

const Main = () => {
  return <Layout contents={<MainContents />} />;
};

export default Main;
