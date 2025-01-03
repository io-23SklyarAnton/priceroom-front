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
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css';
const Menu = () => {
  if (stryMutAct_9fa48("341")) {
    {}
  } else {
    stryCov_9fa48("341");
    const [isAuthenticated, setIsAuthenticated] = useState(stryMutAct_9fa48("342") ? true : (stryCov_9fa48("342"), false));
    const navigate = useNavigate();
    useEffect(() => {
      if (stryMutAct_9fa48("343")) {
        {}
      } else {
        stryCov_9fa48("343");
        const token = localStorage.getItem(stryMutAct_9fa48("344") ? "" : (stryCov_9fa48("344"), 'token'));
        if (stryMutAct_9fa48("346") ? false : stryMutAct_9fa48("345") ? true : (stryCov_9fa48("345", "346"), token)) {
          if (stryMutAct_9fa48("347")) {
            {}
          } else {
            stryCov_9fa48("347");
            setIsAuthenticated(stryMutAct_9fa48("348") ? false : (stryCov_9fa48("348"), true));
          }
        }
      }
    }, stryMutAct_9fa48("349") ? ["Stryker was here"] : (stryCov_9fa48("349"), []));
    const handleLogout = () => {
      if (stryMutAct_9fa48("350")) {
        {}
      } else {
        stryCov_9fa48("350");
        localStorage.removeItem(stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), 'token'));
        setIsAuthenticated(stryMutAct_9fa48("352") ? true : (stryCov_9fa48("352"), false));
        navigate(stryMutAct_9fa48("353") ? "" : (stryCov_9fa48("353"), '/auth'));
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("354")) {
        {}
      } else {
        stryCov_9fa48("354");
        const token = localStorage.getItem(stryMutAct_9fa48("355") ? "" : (stryCov_9fa48("355"), 'token'));
        setIsAuthenticated(stryMutAct_9fa48("356") ? !token : (stryCov_9fa48("356"), !(stryMutAct_9fa48("357") ? token : (stryCov_9fa48("357"), !token))));
      }
    }, stryMutAct_9fa48("358") ? [] : (stryCov_9fa48("358"), [localStorage.getItem(stryMutAct_9fa48("359") ? "" : (stryCov_9fa48("359"), 'token'))]));
    return <nav className="menu">
      <div className="menu-container">
        <div className="menu-logo">
          <Link to="/">
            <h1>Priceroom</h1>
          </Link>
        </div>

        <ul className="menu-items">
          {isAuthenticated ? <>
              <li>
                <Link to="/history" className="history-link">
                  <button className="history-btn">
                    <img src="/assets/images/historyW.png" alt="Історія" className="history-icon" />
                    <span className="history-text">Історія</span>
                  </button>
                </Link>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Вийти
                </button>
              </li>
            </> : <li>
              <Link to="/auth">Увійти</Link>
            </li>}
        </ul>
      </div>
    </nav>;
  }
};
export default Menu;