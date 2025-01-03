// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import History from './History';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';

const mock = new MockAdapter(axios);

describe('History Component', () => {
  const mockHistoryData = [
    {
      id: 1,
      datetime: '2024-01-01T12:00:00Z',
      district: 'District A',
      floor: 3,
      floors_count: 5,
      rooms_count: 3,
      total_square_meters: 75,
      predict_price: 150000,
    },
    {
      id: 2,
      datetime: '2024-01-02T14:00:00Z',
      district: 'District B',
      floor: 2,
      floors_count: 4,
      rooms_count: 2,
      total_square_meters: 60,
      predict_price: 120000,
    },
  ];

  beforeEach(() => {
    mock.onGet('http://localhost:5000/history').reply(200, mockHistoryData);
  });

  afterEach(() => {
    mock.reset();
  });

  test('renders History component and fetches data', async () => {
    render(<History />);

    await waitFor(() => screen.getByText(/Район:/));

    expect(screen.getByText('Район:')).toBeInTheDocument();
    expect(screen.getByText('District A')).toBeInTheDocument();
    expect(screen.getByText('Поверх: 3')).toBeInTheDocument();
    expect(
      screen.getByText('Загальна площа квартири (м²): 75'),
    ).toBeInTheDocument();
    expect(screen.getByText('Ціна: 150000')).toBeInTheDocument();
  });

  test('pagination buttons work correctly', async () => {
    render(<History />);

    await waitFor(() => screen.getByText(/Район:/));

    const nextPageButton = screen.getByText('•••');
    fireEvent.click(nextPageButton);

    await waitFor(() => screen.getByText('1'));
  });

  test('shows ellipsis when there are more pages', async () => {
    render(<History />);

    await waitFor(() => screen.getByText('Район:'));

    expect(screen.getByText('•••')).toBeInTheDocument();
  });

  test('handles error if no token is found', async () => {
    localStorage.removeItem('token');

    render(<History />);

    await waitFor(() => screen.queryByText('Error fetching history:'));
  });
});
