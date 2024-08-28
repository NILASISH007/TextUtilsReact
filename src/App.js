
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar tittle="TextUtils" aboutText ="About TextUtils"/>
<div className="container my-3">
<TextForm heading ="Enter Your Text To Analyze"/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
