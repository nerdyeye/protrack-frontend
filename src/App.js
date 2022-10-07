import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
