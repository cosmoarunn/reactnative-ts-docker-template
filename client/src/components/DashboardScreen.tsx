
// frontend/src/components/DashboardScreen.tsx
import React, { useState } from 'react';
import {Colors, View, Text, TouchableOpacity, Spacings, Icon, Assets, TextField} from 'react-native-ui-lib';

import {  StyleSheet,  ScrollView, FlatList, SafeAreaView } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Import your root state type
import { useNavigation } from '@react-navigation/native'; // For navigation
import {  Drawer } from 'react-native-paper';
import { RootStackNavigationProp } from '@navigation/types';

interface Server {
  id: string;
  name: string;
  status: string;
  region: string;
}

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp<'Dashboard'>>();
  const user = useSelector((state: RootState) => state.auth.user); // Access user from Redux
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [active, setActive] = React.useState('');

  const hiredServers: Server[] = [ // Mock data
    { id: '1', name: 'Server A', status: 'Running', region: 'US' },
    { id: '2', name: 'Server B', status: 'Stopped', region: 'EU' },
  ];

  const availableServers: Server[] = [ // Mock data
    { id: '3', name: 'Server C', status: 'Available', region: 'Asia' },
    { id: '4', name: 'Server D', status: 'Available', region: 'US' },
    { id: '5', name: 'Server E', status: 'Available', region: 'EU' },
    { id: '6', name: 'Server F', status: 'Available', region: 'Asia' },
    // ... more servers
  ];

  const renderServerItem = ({ item }: { item: Server }) => (
    <View style={styles.serverItem}>
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
      <Text>{item.region}</Text>
    </View>
  );

  return (
 
      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => setIsDrawerVisible(true)}>
            <View style={styles.menuButton} />
          </TouchableOpacity>
          <Text style={styles.navTitle}>Dashboard</Text>
        </View>

        
        <Text style={styles.welcomeText}>Welcome, {user?.username || 'Guest'}!</Text>

      
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Currently Hired Servers</Text>
          {hiredServers.map(server => (
            <View key={server.id} style={styles.serverItem}>
              <Text>{server.name}</Text>
              <Text>{server.status}</Text>
              <Text>{server.region}</Text>
            </View>
          ))}
        </View>

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Servers</Text>
          <FlatList
            data={availableServers}
            renderItem={renderServerItem}
            keyExtractor={item => item.id}
            horizontal={false} 
          />
        </View>

        
        <ScrollView style={styles.scrollView}>
          <View style={styles.component}>
            <Text>Component 1</Text>
          </View>
          <View style={styles.component}>
            <Text>Component 2</Text>
          </View>
          
        </ScrollView>
        
        <Drawer.Section title="Some title" >
          <Drawer.Item
            label="First Item"
            active={active === 'first'}
            onPress={() => setActive('first')}
          />
          <Drawer.Item
            label="Second Item"
            active={active === 'second'}
            onPress={() => setActive('second')}
          />
        </Drawer.Section>
        
      </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Example color
  },
  menuButton: {
    width: 30,
    height: 30,
    borderRadius: 15, // Round button
    backgroundColor: 'gray', // Example color
    marginRight: 10,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    padding: 10,
    fontSize: 16,
  },
  section: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serverItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  scrollView: {
    flex: 1, // Make the ScrollView take up available space
    padding: 10,
  },
  component: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#eee', // Example color
    borderRadius: 5,
  },
  drawerContent: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1 // Important for drawer height
  },
});

export default DashboardScreen;

/*


<Drawer
          visible={isDrawerVisible}
          onDismiss={() => setIsDrawerVisible(false)}
          contentContainerStyle={styles.drawerContent}
        >
          
          <TouchableOpacity onPress={() => {setIsDrawerVisible(false); navigation.navigate('Profile')}}>
              <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setIsDrawerVisible(false); navigation.navigate('Settings')}}>
              <Text>Settings</Text>
          </TouchableOpacity>
        </Drawer>


        */