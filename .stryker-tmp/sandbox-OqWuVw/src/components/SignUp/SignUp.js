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
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  if (stryMutAct_9fa48("360")) {
    {}
  } else {
    stryCov_9fa48("360");
    const [username, setUsername] = useState(stryMutAct_9fa48("361") ? "Stryker was here!" : (stryCov_9fa48("361"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("362") ? "Stryker was here!" : (stryCov_9fa48("362"), ''));
    const [confirmPassword, setConfirmPassword] = useState(stryMutAct_9fa48("363") ? "Stryker was here!" : (stryCov_9fa48("363"), ''));
    const [errorMessage, setErrorMessage] = useState(stryMutAct_9fa48("364") ? "Stryker was here!" : (stryCov_9fa48("364"), ''));
    const [successMessage, setSuccessMessage] = useState(stryMutAct_9fa48("365") ? "Stryker was here!" : (stryCov_9fa48("365"), ''));
    const navigate = useNavigate();
    useEffect(() => {
      if (stryMutAct_9fa48("366")) {
        {}
      } else {
        stryCov_9fa48("366");
        // Перевірка наявності токена в localStorage
        const token = localStorage.getItem(stryMutAct_9fa48("367") ? "" : (stryCov_9fa48("367"), 'token'));
        if (stryMutAct_9fa48("369") ? false : stryMutAct_9fa48("368") ? true : (stryCov_9fa48("368", "369"), token)) {
          if (stryMutAct_9fa48("370")) {
            {}
          } else {
            stryCov_9fa48("370");
            // Якщо токен є, перенаправляємо на домашню сторінку або профіль
            navigate(stryMutAct_9fa48("371") ? "" : (stryCov_9fa48("371"), '/'));
          }
        }
      }
    }, stryMutAct_9fa48("372") ? [] : (stryCov_9fa48("372"), [navigate]));
    const validatePassword = () => {
      if (stryMutAct_9fa48("373")) {
        {}
      } else {
        stryCov_9fa48("373");
        return stryMutAct_9fa48("377") ? password.length < 8 : stryMutAct_9fa48("376") ? password.length > 8 : stryMutAct_9fa48("375") ? false : stryMutAct_9fa48("374") ? true : (stryCov_9fa48("374", "375", "376", "377"), password.length >= 8);
      }
    };
    const handleSignUp = async () => {
      if (stryMutAct_9fa48("378")) {
        {}
      } else {
        stryCov_9fa48("378");
        setErrorMessage(stryMutAct_9fa48("379") ? "Stryker was here!" : (stryCov_9fa48("379"), ''));
        setSuccessMessage(stryMutAct_9fa48("380") ? "Stryker was here!" : (stryCov_9fa48("380"), ''));
        if (stryMutAct_9fa48("383") ? password === confirmPassword : stryMutAct_9fa48("382") ? false : stryMutAct_9fa48("381") ? true : (stryCov_9fa48("381", "382", "383"), password !== confirmPassword)) {
          if (stryMutAct_9fa48("384")) {
            {}
          } else {
            stryCov_9fa48("384");
            setErrorMessage(stryMutAct_9fa48("385") ? "" : (stryCov_9fa48("385"), 'Паролі не є однаковими.'));
            return;
          }
        }
        if (stryMutAct_9fa48("388") ? false : stryMutAct_9fa48("387") ? true : stryMutAct_9fa48("386") ? validatePassword() : (stryCov_9fa48("386", "387", "388"), !validatePassword())) {
          if (stryMutAct_9fa48("389")) {
            {}
          } else {
            stryCov_9fa48("389");
            setErrorMessage(stryMutAct_9fa48("390") ? "" : (stryCov_9fa48("390"), 'Пароль має бути довжиною мінімум у 8 символів.'));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("391")) {
            {}
          } else {
            stryCov_9fa48("391");
            const response = await axios.post(stryMutAct_9fa48("392") ? "" : (stryCov_9fa48("392"), 'http://localhost:5000/signup'), stryMutAct_9fa48("393") ? {} : (stryCov_9fa48("393"), {
              username,
              password
            }));
            if (stryMutAct_9fa48("395") ? false : stryMutAct_9fa48("394") ? true : (stryCov_9fa48("394", "395"), response.data.success)) {
              if (stryMutAct_9fa48("396")) {
                {}
              } else {
                stryCov_9fa48("396");
                setSuccessMessage(stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), 'Користувача було створено!'));
                setUsername(stryMutAct_9fa48("398") ? "Stryker was here!" : (stryCov_9fa48("398"), ''));
                setPassword(stryMutAct_9fa48("399") ? "Stryker was here!" : (stryCov_9fa48("399"), ''));
                setConfirmPassword(stryMutAct_9fa48("400") ? "Stryker was here!" : (stryCov_9fa48("400"), ''));
              }
            } else {
              if (stryMutAct_9fa48("401")) {
                {}
              } else {
                stryCov_9fa48("401");
                setErrorMessage(stryMutAct_9fa48("404") ? response.data.message && 'Виникла помилка, повторіть спробу.' : stryMutAct_9fa48("403") ? false : stryMutAct_9fa48("402") ? true : (stryCov_9fa48("402", "403", "404"), response.data.message || (stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), 'Виникла помилка, повторіть спробу.'))));
              }
            }
          }
        } catch (error) {
          if (stryMutAct_9fa48("406")) {
            {}
          } else {
            stryCov_9fa48("406");
            if (stryMutAct_9fa48("409") ? error.response || error.response.data : stryMutAct_9fa48("408") ? false : stryMutAct_9fa48("407") ? true : (stryCov_9fa48("407", "408", "409"), error.response && error.response.data)) {
              if (stryMutAct_9fa48("410")) {
                {}
              } else {
                stryCov_9fa48("410");
                setErrorMessage(stryMutAct_9fa48("413") ? error.response.data.message && 'Виникла помилка, повторіть спробу.' : stryMutAct_9fa48("412") ? false : stryMutAct_9fa48("411") ? true : (stryCov_9fa48("411", "412", "413"), error.response.data.message || (stryMutAct_9fa48("414") ? "" : (stryCov_9fa48("414"), 'Виникла помилка, повторіть спробу.'))));
              }
            } else {
              if (stryMutAct_9fa48("415")) {
                {}
              } else {
                stryCov_9fa48("415");
                setErrorMessage(stryMutAct_9fa48("416") ? "" : (stryCov_9fa48("416"), 'Виникла помилка, повторіть спробу.'));
              }
            }
            console.error(error);
          }
        }
      }
    };
    return <div className="signup-container">
      <h2 className="signup-title">Зареєструватись</h2>

      <div className="signup-step">
        <input type="text" placeholder="Юзернейм" value={username} onChange={stryMutAct_9fa48("417") ? () => undefined : (stryCov_9fa48("417"), e => setUsername(e.target.value))} className="signup-input" />
        <input type="password" placeholder="Пароль" value={password} onChange={stryMutAct_9fa48("418") ? () => undefined : (stryCov_9fa48("418"), e => setPassword(e.target.value))} className="signup-input" />
        {stryMutAct_9fa48("421") ? password && password.length < 8 || <p className="error-message">
            Пароль має бути довжиною мінімум у 8 символів.
          </p> : stryMutAct_9fa48("420") ? false : stryMutAct_9fa48("419") ? true : (stryCov_9fa48("419", "420", "421"), (stryMutAct_9fa48("423") ? password || password.length < 8 : stryMutAct_9fa48("422") ? true : (stryCov_9fa48("422", "423"), password && (stryMutAct_9fa48("426") ? password.length >= 8 : stryMutAct_9fa48("425") ? password.length <= 8 : stryMutAct_9fa48("424") ? true : (stryCov_9fa48("424", "425", "426"), password.length < 8)))) && <p className="error-message">
            Пароль має бути довжиною мінімум у 8 символів.
          </p>)}
        <input type="password" placeholder="Підтвердити пароль" value={confirmPassword} onChange={stryMutAct_9fa48("427") ? () => undefined : (stryCov_9fa48("427"), e => setConfirmPassword(e.target.value))} className="signup-input" />
        <button className="auth-button" onClick={handleSignUp}>
          Зареєструватись
        </button>
      </div>

      {stryMutAct_9fa48("430") ? errorMessage || <p className="error-message">{errorMessage}</p> : stryMutAct_9fa48("429") ? false : stryMutAct_9fa48("428") ? true : (stryCov_9fa48("428", "429", "430"), errorMessage && <p className="error-message">{errorMessage}</p>)}
      {stryMutAct_9fa48("433") ? successMessage || <p className="success-message">{successMessage}</p> : stryMutAct_9fa48("432") ? false : stryMutAct_9fa48("431") ? true : (stryCov_9fa48("431", "432", "433"), successMessage && <p className="success-message">{successMessage}</p>)}
    </div>;
  }
};
export default SignUp;