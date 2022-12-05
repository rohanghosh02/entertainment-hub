import { Container } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/Navbar/MainNav";
import TrendingPage from "./components/Pages/Trending/TrendingPage";
import MoviesPage from "./components/Pages/Movies/MoviesPage";
import SeriesPage from "./components/Pages/Series/SeriesPage";
import SearchPage from "./components/Pages/Search/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact element={<TrendingPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
