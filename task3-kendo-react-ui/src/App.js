import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GridPage from "./pages/GridPage";
import { ToastContainer } from "react-toastify";
import appRoutes from "./routes/Routes";

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/GridPage" element={<GridPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
//  <Routes>
//    {appRoutes.map((item, index) => {
//      console.log(item.path);
//      <Route key={index} path={item.path} element={item.element} />;
//    })}
//    <Route path="/GridPage" element={<GridPage />} />
//  </Routes>;
