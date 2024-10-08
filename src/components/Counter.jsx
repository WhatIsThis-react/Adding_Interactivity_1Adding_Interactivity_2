import { useEffect, useState } from 'react';

export default function Counter() {
  // 다음 렌더링 전에 버튼이 작동하면 좋겠어요, 그리고 전 한번에 3 더하지 않고 1씩 3번 더하고 싶어요!!!
  const [number, setNumber] = useState(0);
  // 숫자가 이븐하지 않을 땐 false로 만들어줘요 ;; 이름 좀 이상하면 수정부탁드립니다...
  const [isEven, setIsEven] = useState(true);
  
  const handleClick = () => {
    setNumber(prevNumber => prevNumber + 1); 
    setNumber(prevNumber => prevNumber + 1); 
    setNumber(prevNumber => prevNumber + 1); 
  };
  
  useEffect(() => {
    setIsEven(number % 2 === 0); 
  }, [number]);

  

  return (
    <>
      <h1>{number}</h1>
      {isEven ? null : (
        <>
          <img
            src={require('../assets/이븐.jpeg')}
            style={{ height: 200 }}
            alt="이븐"
          ></img>
          <div>이븐하지 않아요. 잘 못 구워졌어요.</div>
        </>
      )}
      <button onClick={handleClick}>
        +3
      </button>
    </>
  );
}
