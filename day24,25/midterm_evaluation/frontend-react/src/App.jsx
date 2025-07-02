import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import LoginPage from "./pages/auth/LoginPage";
import TodoPage from "./pages/todos/TodoPage";

const AppRoutes = () => {
  const { loading } = useAuth();
  if (loading) {
    return <div className="">Loading....</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/" element={<LoginPage replace />}></Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TodoProvider>
          <AppRoutes></AppRoutes>
        </TodoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
