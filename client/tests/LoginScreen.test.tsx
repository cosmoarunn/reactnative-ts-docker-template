import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../components/LoginScreen';
import { login } from '../store/authSlice'; // Import your Redux action
import { Provider } from 'react-redux'; // Import the Redux Provider
import configureStore from 'redux-mock-store'; // Use a mock store

const mockStore = configureStore(); // Create a mock store

describe('LoginScreen', () => {
  it('should handle login correctly', async () => {
    const store = mockStore({}); // Initialize mock store with empty initial state
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'test_token' }),
      })
    );

    global.fetch = mockFetch; // Correctly mock the global fetch

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}> {/* Wrap component with Provider */}
        <LoginScreen />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Login'));

    await waitFor(() => expect(mockFetch).toHaveBeenCalled()); // Check if fetch was called

    // Check if the Redux action was dispatched (important!)
    const expectedAction = login('test_token');
    const actualActions = store.getActions();
    expect(actualActions).toContainEqual(expectedAction);

  });

  it('should handle login error', async () => {
    const store = mockStore({});
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      })
    );

    global.fetch = mockFetch;

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
    fireEvent.press(getByText('Login'));

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());

    // You would add an expectation here to check for an error message being displayed
    // or some other visual indication of an error.  For example:
    // expect(getByText('Invalid credentials')).toBeTruthy();  // If you display the error message on the screen.
  });
});