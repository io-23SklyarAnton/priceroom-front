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
var addSorting = function () {
  if (stryMutAct_9fa48("2268")) {
    {}
  } else {
    stryCov_9fa48("2268");
    var cols,
      currentSort = stryMutAct_9fa48("2269") ? {} : (stryCov_9fa48("2269"), {
        index: 0,
        desc: stryMutAct_9fa48("2270") ? true : (stryCov_9fa48("2270"), false)
      });

    // returns the summary table element
    function getTable() {
      if (stryMutAct_9fa48("2271")) {
        {}
      } else {
        stryCov_9fa48("2271");
        return document.querySelector(stryMutAct_9fa48("2272") ? "" : (stryCov_9fa48("2272"), '.coverage-summary'));
      }
    }
    // returns the thead element of the summary table
    function getTableHeader() {
      if (stryMutAct_9fa48("2273")) {
        {}
      } else {
        stryCov_9fa48("2273");
        return getTable().querySelector(stryMutAct_9fa48("2274") ? "" : (stryCov_9fa48("2274"), 'thead tr'));
      }
    }
    // returns the tbody element of the summary table
    function getTableBody() {
      if (stryMutAct_9fa48("2275")) {
        {}
      } else {
        stryCov_9fa48("2275");
        return getTable().querySelector(stryMutAct_9fa48("2276") ? "" : (stryCov_9fa48("2276"), 'tbody'));
      }
    }
    // returns the th element for nth column
    function getNthColumn(n) {
      if (stryMutAct_9fa48("2277")) {
        {}
      } else {
        stryCov_9fa48("2277");
        return getTableHeader().querySelectorAll(stryMutAct_9fa48("2278") ? "" : (stryCov_9fa48("2278"), 'th'))[n];
      }
    }
    function onFilterInput() {
      if (stryMutAct_9fa48("2279")) {
        {}
      } else {
        stryCov_9fa48("2279");
        const searchValue = document.getElementById(stryMutAct_9fa48("2280") ? "" : (stryCov_9fa48("2280"), 'fileSearch')).value;
        const rows = document.getElementsByTagName(stryMutAct_9fa48("2281") ? "" : (stryCov_9fa48("2281"), 'tbody'))[0].children;
        for (let i = 0; stryMutAct_9fa48("2284") ? i >= rows.length : stryMutAct_9fa48("2283") ? i <= rows.length : stryMutAct_9fa48("2282") ? false : (stryCov_9fa48("2282", "2283", "2284"), i < rows.length); stryMutAct_9fa48("2285") ? i-- : (stryCov_9fa48("2285"), i++)) {
          if (stryMutAct_9fa48("2286")) {
            {}
          } else {
            stryCov_9fa48("2286");
            const row = rows[i];
            if (stryMutAct_9fa48("2289") ? row.textContent.toUpperCase().includes(searchValue.toLowerCase()) : stryMutAct_9fa48("2288") ? false : stryMutAct_9fa48("2287") ? true : (stryCov_9fa48("2287", "2288", "2289"), row.textContent.toLowerCase().includes(stryMutAct_9fa48("2290") ? searchValue.toUpperCase() : (stryCov_9fa48("2290"), searchValue.toLowerCase())))) {
              if (stryMutAct_9fa48("2291")) {
                {}
              } else {
                stryCov_9fa48("2291");
                row.style.display = stryMutAct_9fa48("2292") ? "Stryker was here!" : (stryCov_9fa48("2292"), '');
              }
            } else {
              if (stryMutAct_9fa48("2293")) {
                {}
              } else {
                stryCov_9fa48("2293");
                row.style.display = stryMutAct_9fa48("2294") ? "" : (stryCov_9fa48("2294"), 'none');
              }
            }
          }
        }
      }
    }

    // loads the search box
    function addSearchBox() {
      if (stryMutAct_9fa48("2295")) {
        {}
      } else {
        stryCov_9fa48("2295");
        var template = document.getElementById(stryMutAct_9fa48("2296") ? "" : (stryCov_9fa48("2296"), 'filterTemplate'));
        var templateClone = template.content.cloneNode(stryMutAct_9fa48("2297") ? false : (stryCov_9fa48("2297"), true));
        templateClone.getElementById(stryMutAct_9fa48("2298") ? "" : (stryCov_9fa48("2298"), 'fileSearch')).oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
      }
    }

    // loads all columns
    function loadColumns() {
      if (stryMutAct_9fa48("2299")) {
        {}
      } else {
        stryCov_9fa48("2299");
        var colNodes = getTableHeader().querySelectorAll(stryMutAct_9fa48("2300") ? "" : (stryCov_9fa48("2300"), 'th')),
          colNode,
          cols = stryMutAct_9fa48("2301") ? ["Stryker was here"] : (stryCov_9fa48("2301"), []),
          col,
          i;
        for (i = 0; stryMutAct_9fa48("2304") ? i >= colNodes.length : stryMutAct_9fa48("2303") ? i <= colNodes.length : stryMutAct_9fa48("2302") ? false : (stryCov_9fa48("2302", "2303", "2304"), i < colNodes.length); stryMutAct_9fa48("2305") ? i -= 1 : (stryCov_9fa48("2305"), i += 1)) {
          if (stryMutAct_9fa48("2306")) {
            {}
          } else {
            stryCov_9fa48("2306");
            colNode = colNodes[i];
            col = stryMutAct_9fa48("2307") ? {} : (stryCov_9fa48("2307"), {
              key: colNode.getAttribute(stryMutAct_9fa48("2308") ? "" : (stryCov_9fa48("2308"), 'data-col')),
              sortable: stryMutAct_9fa48("2309") ? colNode.getAttribute('data-nosort') : (stryCov_9fa48("2309"), !colNode.getAttribute(stryMutAct_9fa48("2310") ? "" : (stryCov_9fa48("2310"), 'data-nosort'))),
              type: stryMutAct_9fa48("2313") ? colNode.getAttribute('data-type') && 'string' : stryMutAct_9fa48("2312") ? false : stryMutAct_9fa48("2311") ? true : (stryCov_9fa48("2311", "2312", "2313"), colNode.getAttribute(stryMutAct_9fa48("2314") ? "" : (stryCov_9fa48("2314"), 'data-type')) || (stryMutAct_9fa48("2315") ? "" : (stryCov_9fa48("2315"), 'string')))
            });
            cols.push(col);
            if (stryMutAct_9fa48("2317") ? false : stryMutAct_9fa48("2316") ? true : (stryCov_9fa48("2316", "2317"), col.sortable)) {
              if (stryMutAct_9fa48("2318")) {
                {}
              } else {
                stryCov_9fa48("2318");
                col.defaultDescSort = stryMutAct_9fa48("2321") ? col.type !== 'number' : stryMutAct_9fa48("2320") ? false : stryMutAct_9fa48("2319") ? true : (stryCov_9fa48("2319", "2320", "2321"), col.type === (stryMutAct_9fa48("2322") ? "" : (stryCov_9fa48("2322"), 'number')));
                colNode.innerHTML = colNode.innerHTML + (stryMutAct_9fa48("2323") ? "" : (stryCov_9fa48("2323"), '<span class="sorter"></span>'));
              }
            }
          }
        }
        return cols;
      }
    }
    // attaches a data attribute to every tr element with an object
    // of data values keyed by column name
    function loadRowData(tableRow) {
      if (stryMutAct_9fa48("2324")) {
        {}
      } else {
        stryCov_9fa48("2324");
        var tableCols = tableRow.querySelectorAll(stryMutAct_9fa48("2325") ? "" : (stryCov_9fa48("2325"), 'td')),
          colNode,
          col,
          data = {},
          i,
          val;
        for (i = 0; stryMutAct_9fa48("2328") ? i >= tableCols.length : stryMutAct_9fa48("2327") ? i <= tableCols.length : stryMutAct_9fa48("2326") ? false : (stryCov_9fa48("2326", "2327", "2328"), i < tableCols.length); stryMutAct_9fa48("2329") ? i -= 1 : (stryCov_9fa48("2329"), i += 1)) {
          if (stryMutAct_9fa48("2330")) {
            {}
          } else {
            stryCov_9fa48("2330");
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute(stryMutAct_9fa48("2331") ? "" : (stryCov_9fa48("2331"), 'data-value'));
            if (stryMutAct_9fa48("2334") ? col.type !== 'number' : stryMutAct_9fa48("2333") ? false : stryMutAct_9fa48("2332") ? true : (stryCov_9fa48("2332", "2333", "2334"), col.type === (stryMutAct_9fa48("2335") ? "" : (stryCov_9fa48("2335"), 'number')))) {
              if (stryMutAct_9fa48("2336")) {
                {}
              } else {
                stryCov_9fa48("2336");
                val = Number(val);
              }
            }
            data[col.key] = val;
          }
        }
        return data;
      }
    }
    // loads all row data
    function loadData() {
      if (stryMutAct_9fa48("2337")) {
        {}
      } else {
        stryCov_9fa48("2337");
        var rows = getTableBody().querySelectorAll(stryMutAct_9fa48("2338") ? "" : (stryCov_9fa48("2338"), 'tr')),
          i;
        for (i = 0; stryMutAct_9fa48("2341") ? i >= rows.length : stryMutAct_9fa48("2340") ? i <= rows.length : stryMutAct_9fa48("2339") ? false : (stryCov_9fa48("2339", "2340", "2341"), i < rows.length); stryMutAct_9fa48("2342") ? i -= 1 : (stryCov_9fa48("2342"), i += 1)) {
          if (stryMutAct_9fa48("2343")) {
            {}
          } else {
            stryCov_9fa48("2343");
            rows[i].data = loadRowData(rows[i]);
          }
        }
      }
    }
    // sorts the table using the data for the ith column
    function sortByIndex(index, desc) {
      if (stryMutAct_9fa48("2344")) {
        {}
      } else {
        stryCov_9fa48("2344");
        var key = cols[index].key,
          sorter = function (a, b) {
            if (stryMutAct_9fa48("2345")) {
              {}
            } else {
              stryCov_9fa48("2345");
              a = a.data[key];
              b = b.data[key];
              return (stryMutAct_9fa48("2349") ? a >= b : stryMutAct_9fa48("2348") ? a <= b : stryMutAct_9fa48("2347") ? false : stryMutAct_9fa48("2346") ? true : (stryCov_9fa48("2346", "2347", "2348", "2349"), a < b)) ? stryMutAct_9fa48("2350") ? +1 : (stryCov_9fa48("2350"), -1) : (stryMutAct_9fa48("2354") ? a <= b : stryMutAct_9fa48("2353") ? a >= b : stryMutAct_9fa48("2352") ? false : stryMutAct_9fa48("2351") ? true : (stryCov_9fa48("2351", "2352", "2353", "2354"), a > b)) ? 1 : 0;
            }
          },
          finalSorter = sorter,
          tableBody = document.querySelector(stryMutAct_9fa48("2355") ? "" : (stryCov_9fa48("2355"), '.coverage-summary tbody')),
          rowNodes = tableBody.querySelectorAll(stryMutAct_9fa48("2356") ? "" : (stryCov_9fa48("2356"), 'tr')),
          rows = stryMutAct_9fa48("2357") ? ["Stryker was here"] : (stryCov_9fa48("2357"), []),
          i;
        if (stryMutAct_9fa48("2359") ? false : stryMutAct_9fa48("2358") ? true : (stryCov_9fa48("2358", "2359"), desc)) {
          if (stryMutAct_9fa48("2360")) {
            {}
          } else {
            stryCov_9fa48("2360");
            finalSorter = function (a, b) {
              if (stryMutAct_9fa48("2361")) {
                {}
              } else {
                stryCov_9fa48("2361");
                return stryMutAct_9fa48("2362") ? -1 / sorter(a, b) : (stryCov_9fa48("2362"), (stryMutAct_9fa48("2363") ? +1 : (stryCov_9fa48("2363"), -1)) * sorter(a, b));
              }
            };
          }
        }
        for (i = 0; stryMutAct_9fa48("2366") ? i >= rowNodes.length : stryMutAct_9fa48("2365") ? i <= rowNodes.length : stryMutAct_9fa48("2364") ? false : (stryCov_9fa48("2364", "2365", "2366"), i < rowNodes.length); stryMutAct_9fa48("2367") ? i -= 1 : (stryCov_9fa48("2367"), i += 1)) {
          if (stryMutAct_9fa48("2368")) {
            {}
          } else {
            stryCov_9fa48("2368");
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
          }
        }
        stryMutAct_9fa48("2369") ? rows : (stryCov_9fa48("2369"), rows.sort(finalSorter));
        for (i = 0; stryMutAct_9fa48("2372") ? i >= rows.length : stryMutAct_9fa48("2371") ? i <= rows.length : stryMutAct_9fa48("2370") ? false : (stryCov_9fa48("2370", "2371", "2372"), i < rows.length); stryMutAct_9fa48("2373") ? i -= 1 : (stryCov_9fa48("2373"), i += 1)) {
          if (stryMutAct_9fa48("2374")) {
            {}
          } else {
            stryCov_9fa48("2374");
            tableBody.appendChild(rows[i]);
          }
        }
      }
    }
    // removes sort indicators for current column being sorted
    function removeSortIndicators() {
      if (stryMutAct_9fa48("2375")) {
        {}
      } else {
        stryCov_9fa48("2375");
        var col = getNthColumn(currentSort.index),
          cls = col.className;
        cls = cls.replace(stryMutAct_9fa48("2376") ? / sorted/ : (stryCov_9fa48("2376"), / sorted$/), stryMutAct_9fa48("2377") ? "Stryker was here!" : (stryCov_9fa48("2377"), '')).replace(stryMutAct_9fa48("2378") ? / sorted-desc/ : (stryCov_9fa48("2378"), / sorted-desc$/), stryMutAct_9fa48("2379") ? "Stryker was here!" : (stryCov_9fa48("2379"), ''));
        col.className = cls;
      }
    }
    // adds sort indicators for current column being sorted
    function addSortIndicators() {
      if (stryMutAct_9fa48("2380")) {
        {}
      } else {
        stryCov_9fa48("2380");
        stryMutAct_9fa48("2381") ? getNthColumn(currentSort.index).className -= currentSort.desc ? ' sorted-desc' : ' sorted' : (stryCov_9fa48("2381"), getNthColumn(currentSort.index).className += currentSort.desc ? stryMutAct_9fa48("2382") ? "" : (stryCov_9fa48("2382"), ' sorted-desc') : stryMutAct_9fa48("2383") ? "" : (stryCov_9fa48("2383"), ' sorted'));
      }
    }
    // adds event listeners for all sorter widgets
    function enableUI() {
      if (stryMutAct_9fa48("2384")) {
        {}
      } else {
        stryCov_9fa48("2384");
        var i,
          el,
          ithSorter = function ithSorter(i) {
            if (stryMutAct_9fa48("2385")) {
              {}
            } else {
              stryCov_9fa48("2385");
              var col = cols[i];
              return function () {
                if (stryMutAct_9fa48("2386")) {
                  {}
                } else {
                  stryCov_9fa48("2386");
                  var desc = col.defaultDescSort;
                  if (stryMutAct_9fa48("2389") ? currentSort.index !== i : stryMutAct_9fa48("2388") ? false : stryMutAct_9fa48("2387") ? true : (stryCov_9fa48("2387", "2388", "2389"), currentSort.index === i)) {
                    if (stryMutAct_9fa48("2390")) {
                      {}
                    } else {
                      stryCov_9fa48("2390");
                      desc = stryMutAct_9fa48("2391") ? currentSort.desc : (stryCov_9fa48("2391"), !currentSort.desc);
                    }
                  }
                  sortByIndex(i, desc);
                  removeSortIndicators();
                  currentSort.index = i;
                  currentSort.desc = desc;
                  addSortIndicators();
                }
              };
            }
          };
        for (i = 0; stryMutAct_9fa48("2394") ? i >= cols.length : stryMutAct_9fa48("2393") ? i <= cols.length : stryMutAct_9fa48("2392") ? false : (stryCov_9fa48("2392", "2393", "2394"), i < cols.length); stryMutAct_9fa48("2395") ? i -= 1 : (stryCov_9fa48("2395"), i += 1)) {
          if (stryMutAct_9fa48("2396")) {
            {}
          } else {
            stryCov_9fa48("2396");
            if (stryMutAct_9fa48("2398") ? false : stryMutAct_9fa48("2397") ? true : (stryCov_9fa48("2397", "2398"), cols[i].sortable)) {
              if (stryMutAct_9fa48("2399")) {
                {}
              } else {
                stryCov_9fa48("2399");
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector(stryMutAct_9fa48("2400") ? "" : (stryCov_9fa48("2400"), '.sorter')).parentElement;
                if (stryMutAct_9fa48("2402") ? false : stryMutAct_9fa48("2401") ? true : (stryCov_9fa48("2401", "2402"), el.addEventListener)) {
                  if (stryMutAct_9fa48("2403")) {
                    {}
                  } else {
                    stryCov_9fa48("2403");
                    el.addEventListener(stryMutAct_9fa48("2404") ? "" : (stryCov_9fa48("2404"), 'click'), ithSorter(i));
                  }
                } else {
                  if (stryMutAct_9fa48("2405")) {
                    {}
                  } else {
                    stryCov_9fa48("2405");
                    el.attachEvent(stryMutAct_9fa48("2406") ? "" : (stryCov_9fa48("2406"), 'onclick'), ithSorter(i));
                  }
                }
              }
            }
          }
        }
      }
    }
    // adds sorting functionality to the UI
    return function () {
      if (stryMutAct_9fa48("2407")) {
        {}
      } else {
        stryCov_9fa48("2407");
        if (stryMutAct_9fa48("2410") ? false : stryMutAct_9fa48("2409") ? true : stryMutAct_9fa48("2408") ? getTable() : (stryCov_9fa48("2408", "2409", "2410"), !getTable())) {
          if (stryMutAct_9fa48("2411")) {
            {}
          } else {
            stryCov_9fa48("2411");
            return;
          }
        }
        cols = loadColumns();
        loadData();
        addSearchBox();
        addSortIndicators();
        enableUI();
      }
    };
  }
}();
window.addEventListener(stryMutAct_9fa48("2412") ? "" : (stryCov_9fa48("2412"), 'load'), addSorting);