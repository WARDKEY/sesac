import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import TodoPage from "./pages/todos/TodoPage";
import "./assets/styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // 로그인 상태 확인
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // 로그인
  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  // 로그아웃
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage currentUser={currentUser} onLogIn={login} />} // props로 넘거줌
        ></Route>
        <Route
          path="/todo"
          element={<TodoPage currentUser={currentUser} onLogout={logout} />}
        ></Route>
        <Route
          path="*"
          element={
            <LoginPage currentUser={currentUser} onLogIn={login} replace />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
