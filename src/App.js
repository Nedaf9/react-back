import {useState} from "react";

function App() {
  const [value, setValue] = useState({
    userName: 'tom',
    passWord: '123456'
  });
  const handleChange = (type, e) => {
    // setValue(
    //   {
    //     ...value,
    //     [type]: e.target.value,
    //   }
    // )
    setValue((v) => ({ ...v, [type]: e.target.value }));
  };
  const { userName, passWord } = value;
  return (
    <div>
      <input value={value.userName} onChange={(e) => handleChange('userName', e)}/>
      <input value={value.passWord} onChange={(e) => handleChange('passWord', e)}/>
      {userName}:{passWord}
    </div>
  );
}

export default App;
