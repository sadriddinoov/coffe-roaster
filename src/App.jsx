import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Plan from './pages/CreatePlan/Plan';
import Subscribe from './pages/Subscribe/Subcribe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
