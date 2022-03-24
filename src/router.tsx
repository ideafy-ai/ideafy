import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:user" element={<Search />} />
    </Routes>
  );
}
export default Router;
