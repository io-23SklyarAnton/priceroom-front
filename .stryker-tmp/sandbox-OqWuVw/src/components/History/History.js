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
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './History.css';
const History = () => {
  if (stryMutAct_9fa48("226")) {
    {}
  } else {
    stryCov_9fa48("226");
    useAuth();
    const [historyData, setHistoryData] = useState(stryMutAct_9fa48("227") ? ["Stryker was here"] : (stryCov_9fa48("227"), []));
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 8;
    useEffect(() => {
      if (stryMutAct_9fa48("228")) {
        {}
      } else {
        stryCov_9fa48("228");
        const fetchHistory = async () => {
          if (stryMutAct_9fa48("229")) {
            {}
          } else {
            stryCov_9fa48("229");
            try {
              if (stryMutAct_9fa48("230")) {
                {}
              } else {
                stryCov_9fa48("230");
                const token = localStorage.getItem(stryMutAct_9fa48("231") ? "" : (stryCov_9fa48("231"), 'token'));
                if (stryMutAct_9fa48("234") ? false : stryMutAct_9fa48("233") ? true : stryMutAct_9fa48("232") ? token : (stryCov_9fa48("232", "233", "234"), !token)) {
                  if (stryMutAct_9fa48("235")) {
                    {}
                  } else {
                    stryCov_9fa48("235");
                    throw new Error(stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'No token found'));
                  }
                }
                const response = await axios.get(stryMutAct_9fa48("237") ? "" : (stryCov_9fa48("237"), 'http://localhost:5000/history'), stryMutAct_9fa48("238") ? {} : (stryCov_9fa48("238"), {
                  headers: stryMutAct_9fa48("239") ? {} : (stryCov_9fa48("239"), {
                    Authorization: stryMutAct_9fa48("240") ? `` : (stryCov_9fa48("240"), `Bearer ${token}`)
                  })
                }));
                const history = response.data;
                setHistoryData(history);
                setTotalPages(Math.ceil(stryMutAct_9fa48("241") ? history.length * itemsPerPage : (stryCov_9fa48("241"), history.length / itemsPerPage)));
              }
            } catch (error) {
              if (stryMutAct_9fa48("242")) {
                {}
              } else {
                stryCov_9fa48("242");
                console.error(stryMutAct_9fa48("243") ? "" : (stryCov_9fa48("243"), 'Error fetching history:'), error);
              }
            }
          }
        };
        fetchHistory();
      }
    }, stryMutAct_9fa48("244") ? ["Stryker was here"] : (stryCov_9fa48("244"), []));
    const formatDateTime = datetime => {
      if (stryMutAct_9fa48("245")) {
        {}
      } else {
        stryCov_9fa48("245");
        const date = new Date(datetime);
        return date.toLocaleString(stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), 'uk-UA'), stryMutAct_9fa48("247") ? {} : (stryCov_9fa48("247"), {
          year: stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), 'numeric'),
          month: stryMutAct_9fa48("249") ? "" : (stryCov_9fa48("249"), 'long'),
          day: stryMutAct_9fa48("250") ? "" : (stryCov_9fa48("250"), 'numeric'),
          hour: stryMutAct_9fa48("251") ? "" : (stryCov_9fa48("251"), '2-digit'),
          minute: stryMutAct_9fa48("252") ? "" : (stryCov_9fa48("252"), '2-digit')
        }));
      }
    };
    const handlePageChange = page => {
      if (stryMutAct_9fa48("253")) {
        {}
      } else {
        stryCov_9fa48("253");
        setCurrentPage(page);
      }
    };
    const startIndex = stryMutAct_9fa48("254") ? (currentPage - 1) / itemsPerPage : (stryCov_9fa48("254"), (stryMutAct_9fa48("255") ? currentPage + 1 : (stryCov_9fa48("255"), currentPage - 1)) * itemsPerPage);
    const currentItems = stryMutAct_9fa48("256") ? historyData : (stryCov_9fa48("256"), historyData.slice(startIndex, stryMutAct_9fa48("257") ? startIndex - itemsPerPage : (stryCov_9fa48("257"), startIndex + itemsPerPage)));
    const generatePageNumbers = () => {
      if (stryMutAct_9fa48("258")) {
        {}
      } else {
        stryCov_9fa48("258");
        const pageNumbers = stryMutAct_9fa48("259") ? ["Stryker was here"] : (stryCov_9fa48("259"), []);
        const maxPageLinks = 3;
        if (stryMutAct_9fa48("263") ? totalPages > maxPageLinks : stryMutAct_9fa48("262") ? totalPages < maxPageLinks : stryMutAct_9fa48("261") ? false : stryMutAct_9fa48("260") ? true : (stryCov_9fa48("260", "261", "262", "263"), totalPages <= maxPageLinks)) {
          if (stryMutAct_9fa48("264")) {
            {}
          } else {
            stryCov_9fa48("264");
            for (let i = 1; stryMutAct_9fa48("267") ? i > totalPages : stryMutAct_9fa48("266") ? i < totalPages : stryMutAct_9fa48("265") ? false : (stryCov_9fa48("265", "266", "267"), i <= totalPages); stryMutAct_9fa48("268") ? i-- : (stryCov_9fa48("268"), i++)) {
              if (stryMutAct_9fa48("269")) {
                {}
              } else {
                stryCov_9fa48("269");
                pageNumbers.push(i);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("270")) {
            {}
          } else {
            stryCov_9fa48("270");
            pageNumbers.push(1);
            if (stryMutAct_9fa48("274") ? currentPage <= 2 : stryMutAct_9fa48("273") ? currentPage >= 2 : stryMutAct_9fa48("272") ? false : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272", "273", "274"), currentPage > 2)) {
              if (stryMutAct_9fa48("275")) {
                {}
              } else {
                stryCov_9fa48("275");
                pageNumbers.push(stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), '•••'));
              }
            }
            const start = stryMutAct_9fa48("277") ? Math.min(2, currentPage - 1) : (stryCov_9fa48("277"), Math.max(2, stryMutAct_9fa48("278") ? currentPage + 1 : (stryCov_9fa48("278"), currentPage - 1)));
            const end = stryMutAct_9fa48("279") ? Math.max(totalPages - 1, currentPage + 1) : (stryCov_9fa48("279"), Math.min(stryMutAct_9fa48("280") ? totalPages + 1 : (stryCov_9fa48("280"), totalPages - 1), stryMutAct_9fa48("281") ? currentPage - 1 : (stryCov_9fa48("281"), currentPage + 1)));
            for (let i = start; stryMutAct_9fa48("284") ? i > end : stryMutAct_9fa48("283") ? i < end : stryMutAct_9fa48("282") ? false : (stryCov_9fa48("282", "283", "284"), i <= end); stryMutAct_9fa48("285") ? i-- : (stryCov_9fa48("285"), i++)) {
              if (stryMutAct_9fa48("286")) {
                {}
              } else {
                stryCov_9fa48("286");
                pageNumbers.push(i);
              }
            }
            if (stryMutAct_9fa48("290") ? currentPage >= totalPages - 1 : stryMutAct_9fa48("289") ? currentPage <= totalPages - 1 : stryMutAct_9fa48("288") ? false : stryMutAct_9fa48("287") ? true : (stryCov_9fa48("287", "288", "289", "290"), currentPage < (stryMutAct_9fa48("291") ? totalPages + 1 : (stryCov_9fa48("291"), totalPages - 1)))) {
              if (stryMutAct_9fa48("292")) {
                {}
              } else {
                stryCov_9fa48("292");
                pageNumbers.push(stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), '•••'));
              }
            }
            pageNumbers.push(totalPages);
          }
        }
        return pageNumbers;
      }
    };
    const handleEllipsisClick = page => {
      if (stryMutAct_9fa48("294")) {
        {}
      } else {
        stryCov_9fa48("294");
        if (stryMutAct_9fa48("297") ? page !== 'afterFirst' : stryMutAct_9fa48("296") ? false : stryMutAct_9fa48("295") ? true : (stryCov_9fa48("295", "296", "297"), page === (stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), 'afterFirst')))) {
          if (stryMutAct_9fa48("299")) {
            {}
          } else {
            stryCov_9fa48("299");
            setCurrentPage(2);
          }
        } else if (stryMutAct_9fa48("302") ? page !== 'beforeLast' : stryMutAct_9fa48("301") ? false : stryMutAct_9fa48("300") ? true : (stryCov_9fa48("300", "301", "302"), page === (stryMutAct_9fa48("303") ? "" : (stryCov_9fa48("303"), 'beforeLast')))) {
          if (stryMutAct_9fa48("304")) {
            {}
          } else {
            stryCov_9fa48("304");
            setCurrentPage(stryMutAct_9fa48("305") ? totalPages + 1 : (stryCov_9fa48("305"), totalPages - 1));
          }
        }
      }
    };
    return <div className="history-container">
      <div className="history-header">
        <img src="/assets/images/history.png" alt="History Icon" className="history-icon" />
      </div>
      <div className="history-grid">
        {currentItems.map(stryMutAct_9fa48("306") ? () => undefined : (stryCov_9fa48("306"), item => <div className="history-card" key={item.id}>
            <div className="history-card-header">
              {formatDateTime(item.datetime)}
            </div>
            <ul className="history-card-content">
              <li>
                <strong>Район:</strong> {item.district}
              </li>
              <li>
                <strong>Поверх:</strong> {item.floor}
              </li>
              <li>
                <strong>Загальна кількість поверхів:</strong>{stryMutAct_9fa48("307") ? "" : (stryCov_9fa48("307"), ' ')}
                {item.floors_count}
              </li>
              <li>
                <strong>Кількість кімнат:</strong> {item.rooms_count}
              </li>
              <li>
                <strong>Загальна площа квартири (м²):</strong>{stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), ' ')}
                {item.total_square_meters}
              </li>
              <li>
                <strong>Ціна:</strong> {item.predict_price}
              </li>
            </ul>
          </div>))}
      </div>
      <div className="pagination">
        {generatePageNumbers().map(stryMutAct_9fa48("309") ? () => undefined : (stryCov_9fa48("309"), (page, index) => <button key={index} className={stryMutAct_9fa48("310") ? `` : (stryCov_9fa48("310"), `pagination-button ${(stryMutAct_9fa48("313") ? currentPage !== page : stryMutAct_9fa48("312") ? false : stryMutAct_9fa48("311") ? true : (stryCov_9fa48("311", "312", "313"), currentPage === page)) ? stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), 'active') : stryMutAct_9fa48("315") ? "Stryker was here!" : (stryCov_9fa48("315"), '')}`)} onClick={() => {
          if (stryMutAct_9fa48("316")) {
            {}
          } else {
            stryCov_9fa48("316");
            if (stryMutAct_9fa48("319") ? page === '•••' : stryMutAct_9fa48("318") ? false : stryMutAct_9fa48("317") ? true : (stryCov_9fa48("317", "318", "319"), page !== (stryMutAct_9fa48("320") ? "" : (stryCov_9fa48("320"), '•••')))) {
              if (stryMutAct_9fa48("321")) {
                {}
              } else {
                stryCov_9fa48("321");
                handlePageChange(page);
              }
            }
          }
        }}>
            {(stryMutAct_9fa48("324") ? page !== '•••' : stryMutAct_9fa48("323") ? false : stryMutAct_9fa48("322") ? true : (stryCov_9fa48("322", "323", "324"), page === (stryMutAct_9fa48("325") ? "" : (stryCov_9fa48("325"), '•••')))) ? <span onClick={() => {
            if (stryMutAct_9fa48("326")) {
              {}
            } else {
              stryCov_9fa48("326");
              const pageNumbers = generatePageNumbers();
              if (stryMutAct_9fa48("329") ? pageNumbers.indexOf('•••') !== 1 : stryMutAct_9fa48("328") ? false : stryMutAct_9fa48("327") ? true : (stryCov_9fa48("327", "328", "329"), pageNumbers.indexOf(stryMutAct_9fa48("330") ? "" : (stryCov_9fa48("330"), '•••')) === 1)) {
                if (stryMutAct_9fa48("331")) {
                  {}
                } else {
                  stryCov_9fa48("331");
                  handleEllipsisClick(stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), 'afterFirst'));
                }
              } else if (stryMutAct_9fa48("335") ? pageNumbers.indexOf('•••') !== pageNumbers.length - 2 : stryMutAct_9fa48("334") ? false : stryMutAct_9fa48("333") ? true : (stryCov_9fa48("333", "334", "335"), pageNumbers.indexOf(stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), '•••')) === (stryMutAct_9fa48("337") ? pageNumbers.length + 2 : (stryCov_9fa48("337"), pageNumbers.length - 2)))) {
                if (stryMutAct_9fa48("338")) {
                  {}
                } else {
                  stryCov_9fa48("338");
                  handleEllipsisClick(stryMutAct_9fa48("339") ? "" : (stryCov_9fa48("339"), 'beforeLast'));
                }
              }
            }
          }}>
                {stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), '•••')}
              </span> : page}
          </button>))}
      </div>
    </div>;
  }
};
export default History;