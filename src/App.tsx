import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query"
import Header from "./components/layout/header.component";
import UserPage from "./components/pages/users.page";
import BlogPage from "./components/pages/blog.page";
import HomePage from "./components/pages/home.page";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
