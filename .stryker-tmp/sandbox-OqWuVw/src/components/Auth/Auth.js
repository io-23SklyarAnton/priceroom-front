// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
const Auth = () => {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    const [username, setUsername] = useState(stryMutAct_9fa48("3") ? "Stryker was here!" : (stryCov_9fa48("3"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("4") ? "Stryker was here!" : (stryCov_9fa48("4"), ''));
    const [errorMessage, setErrorMessage] = useState(stryMutAct_9fa48("5") ? "Stryker was here!" : (stryCov_9fa48("5"), ''));
    const [successMessage, setSuccessMessage] = useState(stryMutAct_9fa48("6") ? "Stryker was here!" : (stryCov_9fa48("6"), ''));
    const [isAuthenticated, setIsAuthenticated] = useState(stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7"), false));
    const navigate = useNavigate();
    useEffect(() => {
      if (stryMutAct_9fa48("8")) {
        {}
      } else {
        stryCov_9fa48("8");
        const token = localStorage.getItem(stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), 'token'));
        if (stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11"), token)) {
          if (stryMutAct_9fa48("12")) {
            {}
          } else {
            stryCov_9fa48("12");
            navigate(stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), '/'));
          }
        }
      }
    }, stryMutAct_9fa48("14") ? [] : (stryCov_9fa48("14"), [navigate]));
    const handleLogin = async () => {
      if (stryMutAct_9fa48("15")) {
        {}
      } else {
        stryCov_9fa48("15");
        setErrorMessage(stryMutAct_9fa48("16") ? "Stryker was here!" : (stryCov_9fa48("16"), ''));
        setSuccessMessage(stryMutAct_9fa48("17") ? "Stryker was here!" : (stryCov_9fa48("17"), ''));
        try {
          if (stryMutAct_9fa48("18")) {
            {}
          } else {
            stryCov_9fa48("18");
            const response = await axios.post(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), 'http://localhost:5000/auth/login'), stryMutAct_9fa48("20") ? {} : (stryCov_9fa48("20"), {
              username,
              password
            }));
            localStorage.setItem(stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'token'), response.data.token);
            setIsAuthenticated(stryMutAct_9fa48("22") ? false : (stryCov_9fa48("22"), true));
            navigate(stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), '/'));
          }
        } catch (error) {
          if (stryMutAct_9fa48("24")) {
            {}
          } else {
            stryCov_9fa48("24");
            setErrorMessage(stryMutAct_9fa48("27") ? error.response?.data?.message && 'Виникла помилка (бек підключи)' : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), (stryMutAct_9fa48("29") ? error.response.data?.message : stryMutAct_9fa48("28") ? error.response?.data.message : (stryCov_9fa48("28", "29"), error.response?.data?.message)) || (stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'Виникла помилка (бек підключи)'))));
          }
        }
      }
    };
    return <div className="auth-container">
      <h2 className="auth-title">Вітаємо у PriceRoom!</h2>
      <div className="auth-form">
        <input type="text" placeholder="Юзернейм" className="auth-input" onChange={stryMutAct_9fa48("31") ? () => undefined : (stryCov_9fa48("31"), e => setUsername(e.target.value))} value={username} />
        <input type="password" placeholder="Пароль" className="auth-input" onChange={stryMutAct_9fa48("32") ? () => undefined : (stryCov_9fa48("32"), e => setPassword(e.target.value))} value={password} />
        <div className="auth-buttons">
          <button className="auth-button" onClick={handleLogin}>
            Увійти
          </button>
          <p className="auth-signup-text">
            Ще немає аккаунту?{stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), ' ')}
            <Link to="/signup" className="auth-link">
              Зареєструватись
            </Link>
          </p>
        </div>
      </div>

      {stryMutAct_9fa48("36") ? errorMessage || <p className="error-message">{errorMessage}</p> : stryMutAct_9fa48("35") ? false : stryMutAct_9fa48("34") ? true : (stryCov_9fa48("34", "35", "36"), errorMessage && <p className="error-message">{errorMessage}</p>)}
      {stryMutAct_9fa48("39") ? successMessage || <p className="success-message">{successMessage}</p> : stryMutAct_9fa48("38") ? false : stryMutAct_9fa48("37") ? true : (stryCov_9fa48("37", "38", "39"), successMessage && <p className="success-message">{successMessage}</p>)}
      {stryMutAct_9fa48("42") ? isAuthenticated || <p className="success-message">{isAuthenticated}</p> : stryMutAct_9fa48("41") ? false : stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40", "41", "42"), isAuthenticated && <p className="success-message">{isAuthenticated}</p>)}
    </div>;
  }
};
export default Auth;