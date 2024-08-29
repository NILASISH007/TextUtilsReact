import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode , setMode]=useState('light');
  const ToggleSwich = () =>{
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }

  }
  return (
    <>
<Navbar tittle="TextUtils" aboutText ="About TextUtils" mode={mode} toggleMode={ToggleSwich}/>
<div className="container my-3">
<TextForm heading ="Enter Your Text To Analyze"/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
