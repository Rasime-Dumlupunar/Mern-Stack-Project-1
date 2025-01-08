import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { ToastContainer, toast } from "react-toastify";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);

  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route
            path="/"
            element={!token?.token ? <Link to={"/auth"} /> : <Home />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;