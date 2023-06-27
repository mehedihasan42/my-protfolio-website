import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';

function App() {
    useEffect(()=>{
     Aos.init()
    },[])
    return (
    <h2 className='text-indigo-600 text-2xl font-bold'>My Protfolio</h2>
  );
}

export default App;
