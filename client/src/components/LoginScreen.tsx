// frontend/src/components/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/store'; // Import your root state type

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(login(data)); // Dispatch the login action with the entire data
        
        navigation.navigate('Dashboard'); // Navigate to Dashboard

      } else {
        // Handle error: Display an alert or set an error message in state
        setErrorMessage( data.message || "Invalid credentials");
        console.error("Login Error:", data.message || "Failed to login");
      }
    } catch (error) {
      setErrorMessage( "An error occurred during login.");
      console.error("Login Error:", error);
    }
  };

  // Redirect if already authenticated (e.g., after a refresh)
  if (isAuthenticated) {
    navigation.navigate('Dashboard');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}> 
    <>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }} 
      />
      <Button title="Login" onPress={handleLogin} />
     
      {username === 'test' && <Text>Welcome, test user!</Text>}

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>} 
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;