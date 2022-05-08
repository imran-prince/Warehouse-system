
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

import Footer from './Components/Footer/Footer';
import StockUpdate from './Components/StockUpdate/StockUpdate';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import ManageItems from './Components/ManageItems/ManageItems';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/logIn' element={<Login></Login>} ></Route>
        <Route path='/manageinventory' element={<RequreAuth>
          <ManageInventory></ManageInventory>
        </RequreAuth>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='manageitems/updateproduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/items' element={<RequreAuth>
          <Items></Items>
        </RequreAuth>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='blogs' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:id' element={<RequreAuth>
          <StockUpdate></StockUpdate>
        </RequreAuth>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
