import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/auth");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [localStorage.getItem("token")]);

  return (
    <nav className="menu">
      <div className="menu-container">
        <div className="menu-logo">
          <Link to="/">
            <h1>Priceroom</h1>
          </Link>
        </div>

        <ul className="menu-items">
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/history" className="history-link">
                  <button className="history-btn">
                    <img
                      src="/assets/images/historyW.png"
                      alt="Історія"
                      className="history-icon"
                    />
                    <span className="history-text">Історія</span>
                  </button>
                </Link>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Вийти
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth">Увійти</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
