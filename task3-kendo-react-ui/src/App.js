import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GridPage from "./pages/GridPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/GridPage" element={<GridPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
