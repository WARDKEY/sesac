import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../utils/data";

function LoginPage({ currentUser, onLogIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/todo");
    }
  }, [currentUser, navigate]); // currentUser 값이 바뀌거나 url이 바뀌었을 때 검증

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 검사
    // 입력 값이 없는 경우
    if (!email || !password) {
      setErrorMessage("모든 항목을 입력해주세요.");
      return;
    }

    // 유저 찾음
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    // 로그인 성공
    if (foundUser) {
      onLogIn({ email: foundUser.email });
      navigate("/todo");
    } else {
      setErrorMessage("로그인에 실패하였습니다.");
      // 로그인 샐패
    }
  };

  const handleTestAccountClick = (email, password) => {
    setEmail(email);
    setPassword(password);
    setErrorMessage("");
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div
          className="card p-4 shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="card-title text-center mb-4">로그인</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일 주소
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
            <p id="errorMessage" className="text-danger text-center">
              {errorMessage}
            </p>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                로그인
              </button>
            </div>
          </form>

          {/* 테스트 편의 입력 */}
          <div className="mt-4 pt-3 border-top">
            <h6 className="text-muted text-center mb-3">테스트 계정</h6>
            <div className="small text-muted">
              <div className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100 mb-1"
                  onClick={() =>
                    handleTestAccountClick("user1@example.com", "password123")
                  }
                >
                  <strong>일반 사용자:</strong> user1@example.com / password123
                </button>
              </div>
              <div className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100 mb-1"
                  onClick={() =>
                    handleTestAccountClick("admin@example.com", "adminpass")
                  }
                >
                  <strong>관리자:</strong> admin@example.com / adminpass
                </button>
              </div>
              <div className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100"
                  onClick={() =>
                    handleTestAccountClick("guest@example.com", "guest")
                  }
                >
                  <strong>게스트:</strong> guest@example.com / guest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
