import React, { createContext, useContext, useEffect, useState } from "react";

// 로그인 관련 Context 생성, 저장소 생성
const AuthContext = createContext();

// auth Provider 컴포넌트
// 저장소에 저장
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인 상태 확인
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // 로그인
  const login = (userData) => {
    setCurrentUser(userData);
    console.log("AuthContext의 userData === " + userData);
    console.log("AuthContext의 currentUser === " + currentUser);

    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  // 로그아웃
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 저장소에서 빼서 사용하게
// 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
