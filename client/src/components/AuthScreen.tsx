// frontend/src/components/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { TextInput, Text,  Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';

const AuthScreen: React.FC = () => {
  const [username, setUsername] = useState('aeroarunn');
  const [password, setPassword] = useState('sgpajsep2');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSignup, setShowSignup] = useState(false); // State to toggle signup form
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState(''); // Add email field

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5100/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(login(data));
        navigation.navigate('Dashboard');
      } else if (response.status === 404) { // Check for 404 (user not found)
        setShowSignup(true); // Show signup form
        setErrorMessage(''); // Clear previous error messages
      }
      else {
        setErrorMessage(data.message || "Invalid credentials");
        console.error("Login Error:", data.message || "Failed to login");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
      console.error("Login Error:", error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5100/api/auth/signup', { // Call signup route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: signupUsername,
          password: signupPassword,
          email: signupEmail, // Send email in signup data
        }),
      });

      
      if (!response.ok)  { console.log(response); throw `Invalid server response!` }
        const data = await response.json()

      if(data) { 
        // Signup successful, you might want to automatically log the user in or display a success message
        console.log("Signup successful:", data);
        setUsername(signupUsername); // Set username to the new signup username
        setPassword(signupPassword); // Set password to the new signup password
        handleLogin(); // Automatically log the user in after signup
        setShowSignup(false); // Hide the signup form
      } else {
        setErrorMessage(data.message || "Signup failed");
        console.error("Signup Error:", data.message || "Signup failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred during signup.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <View style={styles.container}>
        
      

      {showSignup ?  ( 
        <View style={styles.signupContainer}>
          <Text style={styles.signupTitle}>Create an account!</Text>
          <TextInput
            style={{ marginTop: 15 }}
            label='Outlined input'
            mode='outlined'
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize='none'
            placeholderTextColor='rgba(28,53,63, 1)'
            value={signupUsername}
            onChangeText={setSignupUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='rgba(28,53,63, 1)'
            autoCapitalize='none'
            value={signupPassword}
            onChangeText={setSignupPassword}
            secureTextEntry
          />
           <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor='rgba(28,53,63, 1)'
            autoCapitalize='none'
            value={signupEmail}
            onChangeText={setSignupEmail}
          />
          <Button
            style={{ marginTop: 15 }}
            icon='send'
            mode='contained'
            onPress={ handleSignup }
          >
            Sign me up
          </Button>
          
        </View>
      ) : (
        <>
            <Text style={styles.title}>Login to your account!</Text>

         <TextInput
            style={{ margin: 15 }}
            label='Username or Mobile number'
            autoCapitalize='none'
            mode='outlined'
            
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={{ margin: 15 }}
            label='Password'
            autoCapitalize='none'
            mode='outlined'
            
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            style={{ marginTop: 15 }}
            icon='send'
            mode='contained'
            onPress={ handleLogin }
          >
            Sign in!
          </Button>

        </>
      )}

      {!showSignup && ( 
        <TouchableOpacity onPress={() => setShowSignup(true)}>
          <Text style={styles.signupLink}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        
      )}
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
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
    textAlign: 'center',
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
    textAlign: 'center',
  },
  signupContainer: {
    marginTop: 20,
  },
  signupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  signupLink: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;
