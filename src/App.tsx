import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ShowDetail from "./Components/ShowDetail";
import ShowList from "./Components/ShowList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="shows" />} />
      <Route path="/" element={<MainPage />}>
        <Route path="shows" element={<ShowList />} />
        <Route path="shows/:showId" element={<ShowDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
