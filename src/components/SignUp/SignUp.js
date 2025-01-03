import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Перевірка наявності токена в localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Якщо токен є, перенаправляємо на домашню сторінку або профіль
      navigate('/');
    }
  }, [navigate]);

  const validatePassword = () => {
    return password.length >= 8;
  };

  const handleSignUp = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Паролі не є однаковими.');
      return;
    }

    if (!validatePassword()) {
      setErrorMessage('Пароль має бути довжиною мінімум у 8 символів.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        password,
      });

      if (response.data.success) {
        setSuccessMessage('Користувача було створено!');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage(
          response.data.message || 'Виникла помилка, повторіть спробу.',
        );
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || 'Виникла помилка, повторіть спробу.',
        );
      } else {
        setErrorMessage('Виникла помилка, повторіть спробу.');
      }
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Зареєструватись</h2>

      <div className="signup-step">
        <input
          type="text"
          placeholder="Юзернейм"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        {password && password.length < 8 && (
          <p className="error-message">
            Пароль має бути довжиною мінімум у 8 символів.
          </p>
        )}
        <input
          type="password"
          placeholder="Підтвердити пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
        />
        <button className="auth-button" onClick={handleSignUp}>
          Зареєструватись
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default SignUp;
