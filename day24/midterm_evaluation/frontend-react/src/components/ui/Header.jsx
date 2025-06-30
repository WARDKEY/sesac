import React, { useEffect } from "react";

function Header({ currentUser, onLogout }) {
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          My ToDo App
        </div>
        <div className="d-flex">
          <span className="navbar-text text-white me-3" id="userDisplay">
            {currentUser.email}님 환영합니다!
          </span>
          <button
            className="btn btn-light"
            id="logoutButton"
            onClick={onLogout}
          >
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
