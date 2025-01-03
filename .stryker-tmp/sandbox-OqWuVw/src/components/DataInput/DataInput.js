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
import useAuth from '../../hooks/useAuth';
import './DataInput.css';
const DataInput = () => {
  if (stryMutAct_9fa48("43")) {
    {}
  } else {
    stryCov_9fa48("43");
    useAuth();
    const [formData, setFormData] = useState(stryMutAct_9fa48("44") ? {} : (stryCov_9fa48("44"), {
      district: stryMutAct_9fa48("45") ? "Stryker was here!" : (stryCov_9fa48("45"), ''),
      floor: stryMutAct_9fa48("46") ? "Stryker was here!" : (stryCov_9fa48("46"), ''),
      floors_count: stryMutAct_9fa48("47") ? "Stryker was here!" : (stryCov_9fa48("47"), ''),
      rooms_count: stryMutAct_9fa48("48") ? "Stryker was here!" : (stryCov_9fa48("48"), ''),
      total_square_meters: stryMutAct_9fa48("49") ? "Stryker was here!" : (stryCov_9fa48("49"), '')
    }));
    const [price, setPrice] = useState(null);
    const [errorMessage, setErrorMessage] = useState(stryMutAct_9fa48("50") ? "Stryker was here!" : (stryCov_9fa48("50"), ''));
    const [formErrors, setFormErrors] = useState(stryMutAct_9fa48("51") ? {} : (stryCov_9fa48("51"), {
      district: stryMutAct_9fa48("52") ? "Stryker was here!" : (stryCov_9fa48("52"), ''),
      floor: stryMutAct_9fa48("53") ? "Stryker was here!" : (stryCov_9fa48("53"), ''),
      floors_count: stryMutAct_9fa48("54") ? "Stryker was here!" : (stryCov_9fa48("54"), ''),
      rooms_count: stryMutAct_9fa48("55") ? "Stryker was here!" : (stryCov_9fa48("55"), ''),
      total_square_meters: stryMutAct_9fa48("56") ? "Stryker was here!" : (stryCov_9fa48("56"), '')
    }));
    const [isSubmitting, setIsSubmitting] = useState(stryMutAct_9fa48("57") ? true : (stryCov_9fa48("57"), false));
    const navigate = useNavigate();
    useEffect(() => {
      if (stryMutAct_9fa48("58")) {
        {}
      } else {
        stryCov_9fa48("58");
        const token = localStorage.getItem(stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), 'token'));
        if (stryMutAct_9fa48("62") ? false : stryMutAct_9fa48("61") ? true : stryMutAct_9fa48("60") ? token : (stryCov_9fa48("60", "61", "62"), !token)) {
          if (stryMutAct_9fa48("63")) {
            {}
          } else {
            stryCov_9fa48("63");
            navigate(stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), '/auth'));
          }
        }
      }
    }, stryMutAct_9fa48("65") ? [] : (stryCov_9fa48("65"), [navigate]));
    const handleInputChange = e => {
      if (stryMutAct_9fa48("66")) {
        {}
      } else {
        stryCov_9fa48("66");
        const {
          name,
          value
        } = e.target;
        setFormData(stryMutAct_9fa48("67") ? {} : (stryCov_9fa48("67"), {
          ...formData,
          [name]: value
        }));
        setFormErrors(stryMutAct_9fa48("68") ? {} : (stryCov_9fa48("68"), {
          ...formErrors,
          [name]: validateField(name, value)
        }));
      }
    };
    const validateField = (fieldName, value) => {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        if (stryMutAct_9fa48("72") ? fieldName === 'district' || !value : stryMutAct_9fa48("71") ? false : stryMutAct_9fa48("70") ? true : (stryCov_9fa48("70", "71", "72"), (stryMutAct_9fa48("74") ? fieldName !== 'district' : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74"), fieldName === (stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), 'district')))) && (stryMutAct_9fa48("76") ? value : (stryCov_9fa48("76"), !value)))) {
          if (stryMutAct_9fa48("77")) {
            {}
          } else {
            stryCov_9fa48("77");
            return stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), "Це поле обов'язкове");
          }
        }
        if (stryMutAct_9fa48("81") ? fieldName === 'floor' || value < 1 || value > 100 : stryMutAct_9fa48("80") ? false : stryMutAct_9fa48("79") ? true : (stryCov_9fa48("79", "80", "81"), (stryMutAct_9fa48("83") ? fieldName !== 'floor' : stryMutAct_9fa48("82") ? true : (stryCov_9fa48("82", "83"), fieldName === (stryMutAct_9fa48("84") ? "" : (stryCov_9fa48("84"), 'floor')))) && (stryMutAct_9fa48("86") ? value < 1 && value > 100 : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86"), (stryMutAct_9fa48("89") ? value >= 1 : stryMutAct_9fa48("88") ? value <= 1 : stryMutAct_9fa48("87") ? false : (stryCov_9fa48("87", "88", "89"), value < 1)) || (stryMutAct_9fa48("92") ? value <= 100 : stryMutAct_9fa48("91") ? value >= 100 : stryMutAct_9fa48("90") ? false : (stryCov_9fa48("90", "91", "92"), value > 100)))))) {
          if (stryMutAct_9fa48("93")) {
            {}
          } else {
            stryCov_9fa48("93");
            return stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'Поверх має бути в межах від 1 до 100');
          }
        }
        if (stryMutAct_9fa48("97") ? fieldName === 'floors_count' || value < 1 || value > 100 : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97"), (stryMutAct_9fa48("99") ? fieldName !== 'floors_count' : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99"), fieldName === (stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'floors_count')))) && (stryMutAct_9fa48("102") ? value < 1 && value > 100 : stryMutAct_9fa48("101") ? true : (stryCov_9fa48("101", "102"), (stryMutAct_9fa48("105") ? value >= 1 : stryMutAct_9fa48("104") ? value <= 1 : stryMutAct_9fa48("103") ? false : (stryCov_9fa48("103", "104", "105"), value < 1)) || (stryMutAct_9fa48("108") ? value <= 100 : stryMutAct_9fa48("107") ? value >= 100 : stryMutAct_9fa48("106") ? false : (stryCov_9fa48("106", "107", "108"), value > 100)))))) {
          if (stryMutAct_9fa48("109")) {
            {}
          } else {
            stryCov_9fa48("109");
            return stryMutAct_9fa48("110") ? "" : (stryCov_9fa48("110"), 'Загальна кількість поверхів має бути в межах від 1 до 100');
          }
        }
        if (stryMutAct_9fa48("113") ? fieldName === 'rooms_count' || value < 1 || value > 10 : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113"), (stryMutAct_9fa48("115") ? fieldName !== 'rooms_count' : stryMutAct_9fa48("114") ? true : (stryCov_9fa48("114", "115"), fieldName === (stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), 'rooms_count')))) && (stryMutAct_9fa48("118") ? value < 1 && value > 10 : stryMutAct_9fa48("117") ? true : (stryCov_9fa48("117", "118"), (stryMutAct_9fa48("121") ? value >= 1 : stryMutAct_9fa48("120") ? value <= 1 : stryMutAct_9fa48("119") ? false : (stryCov_9fa48("119", "120", "121"), value < 1)) || (stryMutAct_9fa48("124") ? value <= 10 : stryMutAct_9fa48("123") ? value >= 10 : stryMutAct_9fa48("122") ? false : (stryCov_9fa48("122", "123", "124"), value > 10)))))) {
          if (stryMutAct_9fa48("125")) {
            {}
          } else {
            stryCov_9fa48("125");
            return stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), 'Кількість кімнат має бути в межах від 1 до 10');
          }
        }
        if (stryMutAct_9fa48("129") ? fieldName === 'total_square_meters' || value < 1 || value > 1000 : stryMutAct_9fa48("128") ? false : stryMutAct_9fa48("127") ? true : (stryCov_9fa48("127", "128", "129"), (stryMutAct_9fa48("131") ? fieldName !== 'total_square_meters' : stryMutAct_9fa48("130") ? true : (stryCov_9fa48("130", "131"), fieldName === (stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'total_square_meters')))) && (stryMutAct_9fa48("134") ? value < 1 && value > 1000 : stryMutAct_9fa48("133") ? true : (stryCov_9fa48("133", "134"), (stryMutAct_9fa48("137") ? value >= 1 : stryMutAct_9fa48("136") ? value <= 1 : stryMutAct_9fa48("135") ? false : (stryCov_9fa48("135", "136", "137"), value < 1)) || (stryMutAct_9fa48("140") ? value <= 1000 : stryMutAct_9fa48("139") ? value >= 1000 : stryMutAct_9fa48("138") ? false : (stryCov_9fa48("138", "139", "140"), value > 1000)))))) {
          if (stryMutAct_9fa48("141")) {
            {}
          } else {
            stryCov_9fa48("141");
            return stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), 'Площа має бути в межах від 1 до 1000 м²');
          }
        }
        return stryMutAct_9fa48("143") ? "Stryker was here!" : (stryCov_9fa48("143"), '');
      }
    };
    const handleSubmit = async e => {
      if (stryMutAct_9fa48("144")) {
        {}
      } else {
        stryCov_9fa48("144");
        e.preventDefault();
        const token = localStorage.getItem(stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), 'token'));
        if (stryMutAct_9fa48("148") ? false : stryMutAct_9fa48("147") ? true : stryMutAct_9fa48("146") ? token : (stryCov_9fa48("146", "147", "148"), !token)) {
          if (stryMutAct_9fa48("149")) {
            {}
          } else {
            stryCov_9fa48("149");
            navigate(stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), '/auth'));
            return;
          }
        }
        const errors = Object.keys(formData).reduce((acc, key) => {
          if (stryMutAct_9fa48("151")) {
            {}
          } else {
            stryCov_9fa48("151");
            const error = validateField(key, formData[key]);
            if (stryMutAct_9fa48("153") ? false : stryMutAct_9fa48("152") ? true : (stryCov_9fa48("152", "153"), error)) acc[key] = error;
            return acc;
          }
        }, {});
        setFormErrors(errors);
        if (stryMutAct_9fa48("157") ? Object.keys(errors).length <= 0 : stryMutAct_9fa48("156") ? Object.keys(errors).length >= 0 : stryMutAct_9fa48("155") ? false : stryMutAct_9fa48("154") ? true : (stryCov_9fa48("154", "155", "156", "157"), Object.keys(errors).length > 0)) {
          if (stryMutAct_9fa48("158")) {
            {}
          } else {
            stryCov_9fa48("158");
            setErrorMessage(stryMutAct_9fa48("159") ? "" : (stryCov_9fa48("159"), 'Будь ласка, виправте помилки у формі.'));
            return;
          }
        }
        setIsSubmitting(stryMutAct_9fa48("160") ? false : (stryCov_9fa48("160"), true));
        try {
          if (stryMutAct_9fa48("161")) {
            {}
          } else {
            stryCov_9fa48("161");
            const response = await axios.post(stryMutAct_9fa48("162") ? "" : (stryCov_9fa48("162"), 'http://98.83.92.105:8000/api/predict-price/'), formData, stryMutAct_9fa48("163") ? {} : (stryCov_9fa48("163"), {
              headers: stryMutAct_9fa48("164") ? {} : (stryCov_9fa48("164"), {
                Authorization: stryMutAct_9fa48("165") ? `` : (stryCov_9fa48("165"), `Bearer ${token}`),
                'Content-Type': stryMutAct_9fa48("166") ? "" : (stryCov_9fa48("166"), 'application/json')
              })
            }));
            setPrice(response.data.price);
            setErrorMessage(stryMutAct_9fa48("167") ? "Stryker was here!" : (stryCov_9fa48("167"), ''));
            await axios.post(stryMutAct_9fa48("168") ? "" : (stryCov_9fa48("168"), 'http://localhost:5000/'), stryMutAct_9fa48("169") ? {} : (stryCov_9fa48("169"), {
              ...formData,
              predict_price: response.data.price
            }), stryMutAct_9fa48("170") ? {} : (stryCov_9fa48("170"), {
              headers: stryMutAct_9fa48("171") ? {} : (stryCov_9fa48("171"), {
                Authorization: stryMutAct_9fa48("172") ? `` : (stryCov_9fa48("172"), `Bearer ${token}`)
              })
            }));
          }
        } catch (error) {
          if (stryMutAct_9fa48("173")) {
            {}
          } else {
            stryCov_9fa48("173");
            console.error(stryMutAct_9fa48("174") ? "" : (stryCov_9fa48("174"), 'Error:'), error);
            setErrorMessage(stryMutAct_9fa48("175") ? "" : (stryCov_9fa48("175"), 'Не вдалося отримати прогноз ціни або зберегти дані.'));
          }
        } finally {
          if (stryMutAct_9fa48("176")) {
            {}
          } else {
            stryCov_9fa48("176");
            setIsSubmitting(stryMutAct_9fa48("177") ? true : (stryCov_9fa48("177"), false));
          }
        }
      }
    };
    return <div className="data-input-container">
      <h2>Прогнозуйте ціну нерухомості</h2>
      <form className="data-input-form" onSubmit={handleSubmit}>
        <label>
          Район:
          <select name="district" value={formData.district} onChange={handleInputChange} className={formErrors.district ? stryMutAct_9fa48("178") ? "" : (stryCov_9fa48("178"), 'input-error') : stryMutAct_9fa48("179") ? "Stryker was here!" : (stryCov_9fa48("179"), '')} disabled={isSubmitting}>
            <option value="">Оберіть район</option>
            {(stryMutAct_9fa48("180") ? [] : (stryCov_9fa48("180"), [stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), 'Деснянський'), stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), 'Святошинський'), stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'Дніпровський'), stryMutAct_9fa48("184") ? "" : (stryCov_9fa48("184"), 'Печерський'), stryMutAct_9fa48("185") ? "" : (stryCov_9fa48("185"), 'Голосіївський'), stryMutAct_9fa48("186") ? "" : (stryCov_9fa48("186"), 'Дарницький'), stryMutAct_9fa48("187") ? "" : (stryCov_9fa48("187"), 'Солом’янський'), stryMutAct_9fa48("188") ? "" : (stryCov_9fa48("188"), 'Оболонський'), stryMutAct_9fa48("189") ? "" : (stryCov_9fa48("189"), 'Шевченківський'), stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'Подільський')])).map(stryMutAct_9fa48("191") ? () => undefined : (stryCov_9fa48("191"), district => <option key={district} value={district}>
                {district}
              </option>))}
          </select>
          {stryMutAct_9fa48("194") ? formErrors.district || <p className="error-message">{formErrors.district}</p> : stryMutAct_9fa48("193") ? false : stryMutAct_9fa48("192") ? true : (stryCov_9fa48("192", "193", "194"), formErrors.district && <p className="error-message">{formErrors.district}</p>)}
        </label>
        <label>
          Поверх:
          <input type="number" name="floor" value={formData.floor} onChange={handleInputChange} min="1" max="100" className={formErrors.floor ? stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), 'input-error') : stryMutAct_9fa48("196") ? "Stryker was here!" : (stryCov_9fa48("196"), '')} disabled={isSubmitting} />
          {stryMutAct_9fa48("199") ? formErrors.floor || <p className="error-message">{formErrors.floor}</p> : stryMutAct_9fa48("198") ? false : stryMutAct_9fa48("197") ? true : (stryCov_9fa48("197", "198", "199"), formErrors.floor && <p className="error-message">{formErrors.floor}</p>)}
        </label>
        <label>
          Загальна кількість поверхів:
          <input type="number" name="floors_count" value={formData.floors_count} onChange={handleInputChange} min="1" max="100" className={formErrors.floors_count ? stryMutAct_9fa48("200") ? "" : (stryCov_9fa48("200"), 'input-error') : stryMutAct_9fa48("201") ? "Stryker was here!" : (stryCov_9fa48("201"), '')} disabled={isSubmitting} />
          {stryMutAct_9fa48("204") ? formErrors.floors_count || <p className="error-message">{formErrors.floors_count}</p> : stryMutAct_9fa48("203") ? false : stryMutAct_9fa48("202") ? true : (stryCov_9fa48("202", "203", "204"), formErrors.floors_count && <p className="error-message">{formErrors.floors_count}</p>)}
        </label>
        <label>
          Кількість кімнат:
          <input type="number" name="rooms_count" value={formData.rooms_count} onChange={handleInputChange} min="1" max="10" className={formErrors.rooms_count ? stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'input-error') : stryMutAct_9fa48("206") ? "Stryker was here!" : (stryCov_9fa48("206"), '')} disabled={isSubmitting} />
          {stryMutAct_9fa48("209") ? formErrors.rooms_count || <p className="error-message">{formErrors.rooms_count}</p> : stryMutAct_9fa48("208") ? false : stryMutAct_9fa48("207") ? true : (stryCov_9fa48("207", "208", "209"), formErrors.rooms_count && <p className="error-message">{formErrors.rooms_count}</p>)}
        </label>
        <label>
          Загальна площа квартири (м²):
          <input type="text" name="total_square_meters" value={formData.total_square_meters} onChange={handleInputChange} className={formErrors.total_square_meters ? stryMutAct_9fa48("210") ? "" : (stryCov_9fa48("210"), 'input-error') : stryMutAct_9fa48("211") ? "Stryker was here!" : (stryCov_9fa48("211"), '')} disabled={isSubmitting} pattern="^\d+(\.\d{1,2})?$" />
          {stryMutAct_9fa48("214") ? formErrors.total_square_meters || <p className="error-message">{formErrors.total_square_meters}</p> : stryMutAct_9fa48("213") ? false : stryMutAct_9fa48("212") ? true : (stryCov_9fa48("212", "213", "214"), formErrors.total_square_meters && <p className="error-message">{formErrors.total_square_meters}</p>)}
        </label>

        {isSubmitting ? <div className="loading-text">Завантаження...</div> : <button type="submit">Підтвердити</button>}

        {stryMutAct_9fa48("217") ? price !== null && !isSubmitting || <p className="price-output">
            Прогнозована ціна: {price.toFixed(2)} дол.
          </p> : stryMutAct_9fa48("216") ? false : stryMutAct_9fa48("215") ? true : (stryCov_9fa48("215", "216", "217"), (stryMutAct_9fa48("219") ? price !== null || !isSubmitting : stryMutAct_9fa48("218") ? true : (stryCov_9fa48("218", "219"), (stryMutAct_9fa48("221") ? price === null : stryMutAct_9fa48("220") ? true : (stryCov_9fa48("220", "221"), price !== null)) && (stryMutAct_9fa48("222") ? isSubmitting : (stryCov_9fa48("222"), !isSubmitting)))) && <p className="price-output">
            Прогнозована ціна: {price.toFixed(2)} дол.
          </p>)}
      </form>

      {stryMutAct_9fa48("225") ? errorMessage || <p className="error-message">{errorMessage}</p> : stryMutAct_9fa48("224") ? false : stryMutAct_9fa48("223") ? true : (stryCov_9fa48("223", "224", "225"), errorMessage && <p className="error-message">{errorMessage}</p>)}
    </div>;
  }
};
export default DataInput;