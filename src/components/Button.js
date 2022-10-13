const Button = ({ text, answerHandler }) => {
  return (
    <button className='w-[120px] mt-12' onClick={answerHandler}>
      {text}
    </button>
  );
};

export default Button;
