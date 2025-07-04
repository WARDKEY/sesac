import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import TodoPage from "./pages/todos/TodoPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// queryClient 생성 및 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분간 데이터를 fresh로 유지
      cacheTime: 10 * 60 * 1000, // 10분간 캐시 유지
      retry: 3, // 실패 시 3번 재시도
      refetchOnWindowFocus: false, // 창 포커스 시 자동 새로고침 비활성화
    },
  },
});

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
    // queryClient는 router보다 위에 등록
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
            <AppRoutes></AppRoutes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
