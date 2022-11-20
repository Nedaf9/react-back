import React from 'react';
import {connect} from 'react-redux'

function App2(props) {
  return (
    <>
      <div>redux 数字: {props.num}</div>
      <button onClick={()=> props.add()}>累加</button>
    </>

  );
}

const mapStateToProps = (state)=>{
  return {
    num: state.num,
  }
}

// 事件派发映射
const mapDispatchToProps = (dispatch) => {
  return{
    add(){
      dispatch({
        type: 'addNum'
      })
    }
  }
}

// export default connect(两映射)(当前组件名称)
export default connect(mapStateToProps, mapDispatchToProps)(App2) ;
