import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddItems from "./pages/AddItems";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-item" element={<AddItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
