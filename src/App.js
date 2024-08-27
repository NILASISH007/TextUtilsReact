
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar tittle="TextUtils" aboutText ="About TextUtils"/>
<div className="container my-3">
<TextForm heading ="Enter Your Text To Analyze"/>
</div>

</>
  );
}

export default App;
