import React, {memo, useCallback, useMemo, useState} from 'react';

const Child = memo((props) => {
  console.log(112);
  return(
    <button onClick={()=> props.doSth()}>累加</button>
  )
})



function App1() {
  const [num, setNum] = useState(1)

  // const doSth = useCallback(() => {
  //   setNum(num => num+1)
  // }, []);

  const doSth = useMemo(() => {
      return ()=> setNum(num => num+1)
    }, []);

  return (
    <>
      <h3>数字为：{num}</h3>
      <div>123</div>
      <Child doSth={doSth}/>
    </>
  );
}

export default App1;
