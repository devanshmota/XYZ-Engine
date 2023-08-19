import './App.css';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/result' element={<Results />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
