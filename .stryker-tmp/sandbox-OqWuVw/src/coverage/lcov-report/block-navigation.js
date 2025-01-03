/* eslint-disable */
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
var jumpToCode = function init() {
  if (stryMutAct_9fa48("434")) {
    {}
  } else {
    stryCov_9fa48("434");
    // Classes of code we would like to highlight in the file view
    var missingCoverageClasses = stryMutAct_9fa48("435") ? [] : (stryCov_9fa48("435"), [stryMutAct_9fa48("436") ? "" : (stryCov_9fa48("436"), '.cbranch-no'), stryMutAct_9fa48("437") ? "" : (stryCov_9fa48("437"), '.cstat-no'), stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), '.fstat-no')]);

    // Elements to highlight in the file listing view
    var fileListingElements = stryMutAct_9fa48("439") ? [] : (stryCov_9fa48("439"), [stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), 'td.pct.low')]);

    // We don't want to select elements that are direct descendants of another match
    var notSelector = (stryMutAct_9fa48("441") ? "" : (stryCov_9fa48("441"), ':not(')) + missingCoverageClasses.join(stryMutAct_9fa48("442") ? "" : (stryCov_9fa48("442"), '):not(')) + (stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), ') > ')); // becomes `:not(a):not(b) > `

    // Selecter that finds elements on the page to which we can jump
    var selector = stryMutAct_9fa48("444") ? fileListingElements.join(', ') + ', ' + notSelector - missingCoverageClasses.join(', ' + notSelector) : (stryCov_9fa48("444"), fileListingElements.join(stryMutAct_9fa48("445") ? "" : (stryCov_9fa48("445"), ', ')) + (stryMutAct_9fa48("446") ? "" : (stryCov_9fa48("446"), ', ')) + notSelector + missingCoverageClasses.join((stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), ', ')) + notSelector)); // becomes `:not(a):not(b) > a, :not(a):not(b) > b`

    // The NodeList of matching elements
    var missingCoverageElements = document.querySelectorAll(selector);
    var currentIndex;
    function toggleClass(index) {
      if (stryMutAct_9fa48("448")) {
        {}
      } else {
        stryCov_9fa48("448");
        missingCoverageElements.item(currentIndex).classList.remove(stryMutAct_9fa48("449") ? "" : (stryCov_9fa48("449"), 'highlighted'));
        missingCoverageElements.item(index).classList.add(stryMutAct_9fa48("450") ? "" : (stryCov_9fa48("450"), 'highlighted'));
      }
    }
    function makeCurrent(index) {
      if (stryMutAct_9fa48("451")) {
        {}
      } else {
        stryCov_9fa48("451");
        toggleClass(index);
        currentIndex = index;
        missingCoverageElements.item(index).scrollIntoView(stryMutAct_9fa48("452") ? {} : (stryCov_9fa48("452"), {
          behavior: stryMutAct_9fa48("453") ? "" : (stryCov_9fa48("453"), 'smooth'),
          block: stryMutAct_9fa48("454") ? "" : (stryCov_9fa48("454"), 'center'),
          inline: stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), 'center')
        }));
      }
    }
    function goToPrevious() {
      if (stryMutAct_9fa48("456")) {
        {}
      } else {
        stryCov_9fa48("456");
        var nextIndex = 0;
        if (stryMutAct_9fa48("459") ? typeof currentIndex !== 'number' && currentIndex === 0 : stryMutAct_9fa48("458") ? false : stryMutAct_9fa48("457") ? true : (stryCov_9fa48("457", "458", "459"), (stryMutAct_9fa48("461") ? typeof currentIndex === 'number' : stryMutAct_9fa48("460") ? false : (stryCov_9fa48("460", "461"), typeof currentIndex !== (stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), 'number')))) || (stryMutAct_9fa48("464") ? currentIndex !== 0 : stryMutAct_9fa48("463") ? false : (stryCov_9fa48("463", "464"), currentIndex === 0)))) {
          if (stryMutAct_9fa48("465")) {
            {}
          } else {
            stryCov_9fa48("465");
            nextIndex = stryMutAct_9fa48("466") ? missingCoverageElements.length + 1 : (stryCov_9fa48("466"), missingCoverageElements.length - 1);
          }
        } else if (stryMutAct_9fa48("470") ? missingCoverageElements.length <= 1 : stryMutAct_9fa48("469") ? missingCoverageElements.length >= 1 : stryMutAct_9fa48("468") ? false : stryMutAct_9fa48("467") ? true : (stryCov_9fa48("467", "468", "469", "470"), missingCoverageElements.length > 1)) {
          if (stryMutAct_9fa48("471")) {
            {}
          } else {
            stryCov_9fa48("471");
            nextIndex = stryMutAct_9fa48("472") ? currentIndex + 1 : (stryCov_9fa48("472"), currentIndex - 1);
          }
        }
        makeCurrent(nextIndex);
      }
    }
    function goToNext() {
      if (stryMutAct_9fa48("473")) {
        {}
      } else {
        stryCov_9fa48("473");
        var nextIndex = 0;
        if (stryMutAct_9fa48("476") ? typeof currentIndex === 'number' || currentIndex < missingCoverageElements.length - 1 : stryMutAct_9fa48("475") ? false : stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474", "475", "476"), (stryMutAct_9fa48("478") ? typeof currentIndex !== 'number' : stryMutAct_9fa48("477") ? true : (stryCov_9fa48("477", "478"), typeof currentIndex === (stryMutAct_9fa48("479") ? "" : (stryCov_9fa48("479"), 'number')))) && (stryMutAct_9fa48("482") ? currentIndex >= missingCoverageElements.length - 1 : stryMutAct_9fa48("481") ? currentIndex <= missingCoverageElements.length - 1 : stryMutAct_9fa48("480") ? true : (stryCov_9fa48("480", "481", "482"), currentIndex < (stryMutAct_9fa48("483") ? missingCoverageElements.length + 1 : (stryCov_9fa48("483"), missingCoverageElements.length - 1)))))) {
          if (stryMutAct_9fa48("484")) {
            {}
          } else {
            stryCov_9fa48("484");
            nextIndex = stryMutAct_9fa48("485") ? currentIndex - 1 : (stryCov_9fa48("485"), currentIndex + 1);
          }
        }
        makeCurrent(nextIndex);
      }
    }
    return function jump(event) {
      if (stryMutAct_9fa48("486")) {
        {}
      } else {
        stryCov_9fa48("486");
        if (stryMutAct_9fa48("489") ? document.getElementById('fileSearch') === document.activeElement || document.activeElement != null : stryMutAct_9fa48("488") ? false : stryMutAct_9fa48("487") ? true : (stryCov_9fa48("487", "488", "489"), (stryMutAct_9fa48("491") ? document.getElementById('fileSearch') !== document.activeElement : stryMutAct_9fa48("490") ? true : (stryCov_9fa48("490", "491"), document.getElementById(stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), 'fileSearch')) === document.activeElement)) && (stryMutAct_9fa48("494") ? document.activeElement == null : stryMutAct_9fa48("493") ? true : (stryCov_9fa48("493", "494"), document.activeElement != null)))) {
          if (stryMutAct_9fa48("495")) {
            {}
          } else {
            stryCov_9fa48("495");
            // if we're currently focused on the search input, we don't want to navigate
            return;
          }
        }
        switch (event.which) {
          case 78: // n
          case 74:
            if (stryMutAct_9fa48("496")) {} else {
              stryCov_9fa48("496");
              // j
              goToNext();
              break;
            }
          case 66: // b
          case 75: // k
          case 80:
            if (stryMutAct_9fa48("497")) {} else {
              stryCov_9fa48("497");
              // p
              goToPrevious();
              break;
            }
        }
      }
    };
  }
}();
window.addEventListener(stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'keydown'), jumpToCode);