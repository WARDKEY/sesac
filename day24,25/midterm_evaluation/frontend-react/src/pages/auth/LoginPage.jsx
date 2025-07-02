import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userAPI } from "../../utils/data";

function LoginPage() {
  const navigate = useNavigate();

  // 상태 관리할 값들
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // context에서 꺼내옴
  const { currentUser, login } = useAuth();

  // 로그인 상태라면 /todo로 이동
  useEffect(() => {
    if (currentUser) {
      navigate("/todo");
    }
  }, [currentUser, navigate]); // currentUser 값이 바뀌거나 url이 바뀌었을 때 검증

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // 로그인 진행 중

    // 로그인 검사
    // 입력 값이 없는 경우
    if (!email || !password) {
      setErrorMessage("모든 항목을 입력해주세요.");
      setLoading(false);
      return;
    }

    try {
      const result = await userAPI.login(email, password);

      if (result.success) {
        console.log("LoginPage의 result.user === " + result.user.email);

        login({ email: result.user.email });
        navigate("/todo");
      }
    } catch (e) {
      setErrorMessage("로그인에 실패하였습니다.");
      return;
    } finally {
      setLoading(false);
    }
  };

  // 로그인 편의 메서드
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
                onChange={(e) => setEmail(e.target.value)} // input 입력값 상태 지정
                value={email}
                disabled={loading} // 로딩이 진행 중이면 입력 불가
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
                disabled={loading}
              ></input>
            </div>
            <p id="errorMessage" className="text-danger text-center">
              {errorMessage}
            </p>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    >
                    </span>
                      로그인 중...
                  </>
                ) : (
                  "로그인"
                )}
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
