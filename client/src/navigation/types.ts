// frontend/src/navigation/types.ts (or navigation.d.ts)
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Settings: undefined;
  // ... other screens and their params
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;