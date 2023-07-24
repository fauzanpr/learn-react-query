import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/Home.page";
import Superheroes from "./components/Superheroes.page";
import RQSuperHeroes from "./components/RQSuperheroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/RQsuperheroes",
    label: "RQSuperHeroes",
  },
  {
    id: 3,
    url: "/superheroes",
    label: "SuperHeroes",
  }
];

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <nav className="flex gap-4 text-blue-500">
        {navLinks.map((navLink) => (
          <Link to={navLink.url}>{navLink.label}</Link>
        ))}
      </nav>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RQsuperheroes" element={<RQSuperHeroes />} />
          <Route path="/superheroes" element={<Superheroes />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
