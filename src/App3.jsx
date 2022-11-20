import React, {useEffect} from 'react';

// import {increment, incrementByAmount} from './store/reducer'
import {useDispatch, useSelector} from "react-redux";
import {increment, incrementByAmount, setTime} from "./store/reducer";

function App3() {
  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch();
  return (
    <>
      <div>redux 数字: {count}</div>
      <button onClick={()=> dispatch(increment())}>累加</button>
      <button onClick={()=>dispatch(incrementByAmount(3))}>累加3</button>
      <button onClick={()=> dispatch(setTime())}>异步加</button>
      <button onClick={()=>window.location.href = '/'}>跳转</button>
    </>

  );
}


export default App3 ;
