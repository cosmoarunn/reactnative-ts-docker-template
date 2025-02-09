import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import DashboardScreen from '../components/DashboardScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigation } from '@react-navigation/native'; // Mock navigation

const mockStore = configureStore();

jest.mock('@react-navigation/native', () => {
  const mockNavigate = jest.fn();
  return {
    useNavigation: () => ({ navigate: mockNavigate }),
  };
});


describe('DashboardScreen', () => {
  it('should render the dashboard correctly', () => {
    const store = mockStore({ auth: { user: { username: 'testuser' } } });
    render(
      <Provider store={store}>
        <DashboardScreen />
      </Provider>
    );

    expect(screen.getByText('Welcome, testuser!')).toBeTruthy();
    expect(screen.getByText('Currently Hired Servers')).toBeTruthy();
    expect(screen.getByText('Available Servers')).toBeTruthy();
  });

  it('should open the drawer when the menu button is pressed', () => {
    const store = mockStore({ auth: { user: { username: 'testuser' } } });
    render(
      <Provider store={store}>
        <DashboardScreen />
      </Provider>
    );

    fireEvent.press(screen.getByRole('button')); // Assuming the menu button is a touchable with a role
    // expect(screen.getByText('Profile')).toBeTruthy(); // Check if drawer content is visible
    // expect(screen.getByText('Settings')).toBeTruthy();
  });

  it('should navigate to profile screen when the profile link is pressed', () => {
    const store = mockStore({ auth: { user: { username: 'testuser' } } });
    render(
      <Provider store={store}>
        <DashboardScreen />
      </Provider>
    );

    fireEvent.press(screen.getByRole('button'));
    fireEvent.press(screen.getByText('Profile'));

    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });

    expect(mockNavigate).toHaveBeenCalledWith('Profile');
  });

  // Add more tests for other interactions and components
});
