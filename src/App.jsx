import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
