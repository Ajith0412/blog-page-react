import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Postdetails from "./screens/postdetails/Postdetails";
import Createpost from "./screens/create/Createpost";
import Editpost from "./screens/edit/Editpost";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Createpost />} />
          <Route path="/post/:id" element={<Postdetails />}></Route>
          <Route path="/edit/:id" element={<Editpost />} ></Route>
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
