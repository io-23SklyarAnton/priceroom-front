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
const reportWebVitals = onPerfEntry => {
  if (stryMutAct_9fa48("2436")) {
    {}
  } else {
    stryCov_9fa48("2436");
    if (stryMutAct_9fa48("2439") ? onPerfEntry || onPerfEntry instanceof Function : stryMutAct_9fa48("2438") ? false : stryMutAct_9fa48("2437") ? true : (stryCov_9fa48("2437", "2438", "2439"), onPerfEntry && onPerfEntry instanceof Function)) {
      if (stryMutAct_9fa48("2440")) {
        {}
      } else {
        stryCov_9fa48("2440");
        import(stryMutAct_9fa48("2441") ? "" : (stryCov_9fa48("2441"), 'web-vitals')).then(({
          getCLS,
          getFID,
          getFCP,
          getLCP,
          getTTFB
        }) => {
          if (stryMutAct_9fa48("2442")) {
            {}
          } else {
            stryCov_9fa48("2442");
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
          }
        });
      }
    }
  }
};
export default reportWebVitals;