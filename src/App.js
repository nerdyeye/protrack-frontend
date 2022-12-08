import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle";
import MainPage from "./components/pages/MainPage";
import Sidebar from "./components/organisms/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
