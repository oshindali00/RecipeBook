import Login from './components/login';
import Recipe from './components/recipeFeed';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
  <Routes>
    <Route path='' element={<Login/>}></Route>  
    <Route path='/recipeFeed' element={<Recipe/>}></Route>  

  </Routes>
    </div>

  );
}
export default App;
