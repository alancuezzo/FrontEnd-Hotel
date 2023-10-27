import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

