// frontend/src/components/UsersScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { API_URL } from '../api'; // Or however you're storing your API URL

interface User {
  id: number; // Or string, depending on your backend
  username: string;
  email: string;
  // ... other user properties
}

const UsersScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/users`); // Your backend route
        if (!response.ok) {
          const errorData = await response.json(); // Try to get error details from the server
          throw new Error(errorData.message || 'Failed to fetch users'); // Throw an error with a message
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) { // Type the err as any
        setError(err.message); // Set the error message in state
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <View><Text>Loading users...</Text></View>;
  }

  if (error) {
    return <View><Text style={styles.error}>Error: {error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()} // Important: Use a unique key
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.username}</Text>
            <Text>{item.email}</Text>
            {/* ... other user properties */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    userItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default UsersScreen;