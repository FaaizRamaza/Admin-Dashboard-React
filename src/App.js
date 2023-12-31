import "./App.css";
import TopNav from "./components/topnav/TopNav";
import SideNav from "./components/sidenav/SideNav";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import UserProfile from "./pages/userprofile/UserProfile";
import CreateUser from "./pages/createuser/CreateUser";
import ProductList from "./pages/productlist/ProductList";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="container">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<UserProfile/>}></Route>
          <Route path="/createuser" element={<CreateUser/>}></Route>
          <Route path="/productlist" element={<ProductList/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
