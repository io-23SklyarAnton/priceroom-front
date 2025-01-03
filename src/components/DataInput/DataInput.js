import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './DataInput.css';

const DataInput = () => {
  useAuth();

  const [formData, setFormData] = useState({
    district: '',
    floor: '',
    floors_count: '',
    rooms_count: '',
    total_square_meters: '',
  });
  const [price, setPrice] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({
    district: '',
    floor: '',
    floors_count: '',
    rooms_count: '',
    total_square_meters: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value),
    });
  };

  const validateField = (fieldName, value) => {
    if (fieldName === 'district' && !value) {
      return "Це поле обов'язкове";
    }
    if (fieldName === 'floor' && (value < 1 || value > 100)) {
      return 'Поверх має бути в межах від 1 до 100';
    }
    if (fieldName === 'floors_count' && (value < 1 || value > 100)) {
      return 'Загальна кількість поверхів має бути в межах від 1 до 100';
    }
    if (fieldName === 'rooms_count' && (value < 1 || value > 10)) {
      return 'Кількість кімнат має бути в межах від 1 до 10';
    }
    if (fieldName === 'total_square_meters' && (value < 1 || value > 1000)) {
      return 'Площа має бути в межах від 1 до 1000 м²';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/auth');
      return;
    }

    const errors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setErrorMessage('Будь ласка, виправте помилки у формі.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'http://98.83.92.105:8000/api/predict-price/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setPrice(response.data.price);
      setErrorMessage('');

      await axios.post(
        'http://localhost:5000/',
        { ...formData, predict_price: response.data.price },
        { headers: { Authorization: `Bearer ${token}` } },
      );
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Не вдалося отримати прогноз ціни або зберегти дані.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="data-input-container">
      <h2>Прогнозуйте ціну нерухомості</h2>
      <form className="data-input-form" onSubmit={handleSubmit}>
        <label>
          Район:
          <select
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className={formErrors.district ? 'input-error' : ''}
            disabled={isSubmitting}
          >
            <option value="">Оберіть район</option>
            {[
              'Деснянський',
              'Святошинський',
              'Дніпровський',
              'Печерський',
              'Голосіївський',
              'Дарницький',
              'Солом’янський',
              'Оболонський',
              'Шевченківський',
              'Подільський',
            ].map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          {formErrors.district && (
            <p className="error-message">{formErrors.district}</p>
          )}
        </label>
        <label>
          Поверх:
          <input
            type="number"
            name="floor"
            value={formData.floor}
            onChange={handleInputChange}
            min="1"
            max="100"
            className={formErrors.floor ? 'input-error' : ''}
            disabled={isSubmitting}
          />
          {formErrors.floor && (
            <p className="error-message">{formErrors.floor}</p>
          )}
        </label>
        <label>
          Загальна кількість поверхів:
          <input
            type="number"
            name="floors_count"
            value={formData.floors_count}
            onChange={handleInputChange}
            min="1"
            max="100"
            className={formErrors.floors_count ? 'input-error' : ''}
            disabled={isSubmitting}
          />
          {formErrors.floors_count && (
            <p className="error-message">{formErrors.floors_count}</p>
          )}
        </label>
        <label>
          Кількість кімнат:
          <input
            type="number"
            name="rooms_count"
            value={formData.rooms_count}
            onChange={handleInputChange}
            min="1"
            max="10"
            className={formErrors.rooms_count ? 'input-error' : ''}
            disabled={isSubmitting}
          />
          {formErrors.rooms_count && (
            <p className="error-message">{formErrors.rooms_count}</p>
          )}
        </label>
        <label>
          Загальна площа квартири (м²):
          <input
            type="text"
            name="total_square_meters"
            value={formData.total_square_meters}
            onChange={handleInputChange}
            className={formErrors.total_square_meters ? 'input-error' : ''}
            disabled={isSubmitting}
            pattern="^\d+(\.\d{1,2})?$"
          />
          {formErrors.total_square_meters && (
            <p className="error-message">{formErrors.total_square_meters}</p>
          )}
        </label>

        {isSubmitting ? (
          <div className="loading-text">Завантаження...</div>
        ) : (
          <button type="submit">Підтвердити</button>
        )}

        {price !== null && !isSubmitting && (
          <p className="price-output">
            Прогнозована ціна: {price.toFixed(2)} дол.
          </p>
        )}
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default DataInput;
