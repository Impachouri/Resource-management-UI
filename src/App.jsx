import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddItems from "./pages/AddItems";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-item" element={<AddItems />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
