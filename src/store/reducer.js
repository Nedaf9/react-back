// 创建初始状态，并导出一个函数
// const defaultState = {
//   num: 1
// }
//
// // 导出一个函数
// export default (state = defaultState, action) => {
//   console.log('action', action);
//   const { type } = action;
//   let newState = JSON.parse(JSON.stringify(state))
//   switch (type) {
//     case 'addNum':
//       newState.num++;
//       break;
//     default:
//       break;
//   }
//   return newState;
// }


//  toolkit
import { createSlice,createAction,createAsyncThunk } from '@reduxjs/toolkit';


export const setTime = createAsyncThunk(
  'users/fetchByIdStatus',
  ()=> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(50);
      },3000)
    }).then((res)=> console.log('res',res))
  },
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action)=>{
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTime.fulfilled, (state, action) => {
        console.log('OKOK');
        state.value += 5
      })
  },
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
