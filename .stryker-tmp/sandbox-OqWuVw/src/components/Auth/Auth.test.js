// @ts-nocheck
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Auth from './Auth';
import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

test('renders Auth component and submits form', async () => {
  axios.post.mockResolvedValue({
    data: { token: 'fake-token' },
  });

  render(<Auth />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /увійти/i });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'arbuzarbuz' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(localStorage.getItem('token')).toBe('fake-token');
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});

test('shows error message on failed login', async () => {
  axios.post.mockRejectedValue({
    response: { data: { message: 'Invalid credentials' } },
  });

  render(<Auth />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /увійти/i });

  fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
  fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
  });
});
