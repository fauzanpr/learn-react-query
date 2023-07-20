import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import Superheroes from "./components/Superheroes.page";
import RQSuperHeroes from "./components/RQSuperheroes.page";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <nav className="flex gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/RQsuperheroes">RQSuperHeroes</Link>
        <Link to="/superheroes">SuperHeroes</Link>
      </nav>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RQsuperheroes" element={<RQSuperHeroes />} />
          <Route path="/superheroes" element={<Superheroes />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
