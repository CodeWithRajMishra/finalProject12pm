import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDetail";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/> }/>  
            <Route path="home" element={<Home/> }/>     
            <Route path="carddata" element={<CardData/>}/>
            <Route path="prodetail/:proid" element={<ProductDetail/>}/>
          </Route>
        </Routes>
        <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
             <Route path="insertpro" element={<InsertProduct/>}/>
             
           </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;