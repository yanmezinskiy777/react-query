import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/layout/header.component";
import ProfilePage from "./components/pages/profile.page";
import BlogPage from "./components/pages/blog.page";
import HomePage from "./components/pages/home.page";
import UsersPage from "./components/pages/users.page";
import DynamicBlogPage from "./components/pages/dynamic-blog.page";
import DynamicMapPage from "./components/pages/dynamic-map.page";
import DependQueryPage from "./components/pages/dependt-query.page";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dynamic-blog" element={<DynamicBlogPage postsId={[1,4]} />} />
            <Route path="dynamic-parallel-blog" element={<DynamicMapPage postIds={[2,5]} />} />
            <Route path="dependt-query-page" element={<DependQueryPage id={5} />} /> 
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
