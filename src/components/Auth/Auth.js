import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);

      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Виникла помилка (бек підключи)",
      );
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Вітаємо у PriceRoom!</h2>
      <div className="auth-form">
        <input
          type="text"
          placeholder="Юзернейм"
          className="auth-input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="auth-buttons">
          <button className="auth-button" onClick={handleLogin}>
            Увійти
          </button>
          <p className="auth-signup-text">
            Ще немає аккаунту?{" "}
            <Link to="/signup" className="auth-link">
              Зареєструватись
            </Link>
          </p>
        </div>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {isAuthenticated && <p className="success-message">{isAuthenticated}</p>}
    </div>
  );
};

export default Auth;
