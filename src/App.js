import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';

import Home from './Home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>



      </Routes>

    </div>
  );
}

export default App;
