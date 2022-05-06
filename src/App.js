
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Items from './Components/Items/Items';
import RequreAuth from './Components/RequreAuth/RequreAuth';
import Blog from './Components/Blog/Blog';
import Notfound from './Components/Notfound/Notfound';
function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/logIn' element={<Login></Login>} ></Route>
        <Route path='/items' element={<RequreAuth>
          <Items></Items>
        </RequreAuth>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='blogs' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
