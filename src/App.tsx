import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/layout/header.component";
import ProfilePage from "./components/pages/profile.page";
import BlogPage from "./components/pages/blog.page";
import HomePage from "./components/pages/home.page";
import UsersPage from "./components/pages/users.page";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="user/:id" element={<ProfilePage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        </Routes>
      </Router>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
