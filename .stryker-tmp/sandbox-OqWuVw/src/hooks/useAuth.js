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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const useAuth = () => {
  if (stryMutAct_9fa48("2413")) {
    {}
  } else {
    stryCov_9fa48("2413");
    const navigate = useNavigate();
    useEffect(() => {
      if (stryMutAct_9fa48("2414")) {
        {}
      } else {
        stryCov_9fa48("2414");
        const token = localStorage.getItem(stryMutAct_9fa48("2415") ? "" : (stryCov_9fa48("2415"), 'token'));
        if (stryMutAct_9fa48("2418") ? false : stryMutAct_9fa48("2417") ? true : stryMutAct_9fa48("2416") ? token : (stryCov_9fa48("2416", "2417", "2418"), !token)) {
          if (stryMutAct_9fa48("2419")) {
            {}
          } else {
            stryCov_9fa48("2419");
            navigate(stryMutAct_9fa48("2420") ? "" : (stryCov_9fa48("2420"), '/auth'));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("2421")) {
            {}
          } else {
            stryCov_9fa48("2421");
            const decodedToken = jwtDecode(token);
            if (stryMutAct_9fa48("2425") ? decodedToken.exp * 1000 >= Date.now() : stryMutAct_9fa48("2424") ? decodedToken.exp * 1000 <= Date.now() : stryMutAct_9fa48("2423") ? false : stryMutAct_9fa48("2422") ? true : (stryCov_9fa48("2422", "2423", "2424", "2425"), (stryMutAct_9fa48("2426") ? decodedToken.exp / 1000 : (stryCov_9fa48("2426"), decodedToken.exp * 1000)) < Date.now())) {
              if (stryMutAct_9fa48("2427")) {
                {}
              } else {
                stryCov_9fa48("2427");
                localStorage.removeItem(stryMutAct_9fa48("2428") ? "" : (stryCov_9fa48("2428"), 'token'));
                navigate(stryMutAct_9fa48("2429") ? "" : (stryCov_9fa48("2429"), '/auth'));
              }
            }
          }
        } catch (error) {
          if (stryMutAct_9fa48("2430")) {
            {}
          } else {
            stryCov_9fa48("2430");
            console.error(stryMutAct_9fa48("2431") ? "" : (stryCov_9fa48("2431"), 'Invalid token:'), error);
            localStorage.removeItem(stryMutAct_9fa48("2432") ? "" : (stryCov_9fa48("2432"), 'token'));
            navigate(stryMutAct_9fa48("2433") ? "" : (stryCov_9fa48("2433"), '/auth'));
          }
        }
      }
    }, stryMutAct_9fa48("2434") ? [] : (stryCov_9fa48("2434"), [navigate]));
  }
};
export default useAuth;