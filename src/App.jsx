import Content from "./component/Content";
import NavBar from "./component/NavBar";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Content />
    </>
  );
}

export default App;
