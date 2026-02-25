import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: 'React Native | EFG',
        
        headerLeft: () => (
          <Ionicons 
            name="logo-react" 
            size={28} 
            color="black" 
            style={{ marginLeft: 15 }}
             
          />
        ),

        headerRight: () => (
          <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginRight: 15 }}
          >
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
        ),
        

        drawerPosition: 'right', 
      })}
    >
      <Drawer.Screen
        name="conta"
        options={{
          drawerLabel: 'Bem vindo',
          title: 'Bem vindo', 
        }}
      />
      <Drawer.Screen
        name="extrato"
        options={{
          drawerLabel: 'Contador',
          title: 'Contador',
        }}
      />
    </Drawer>
  );
}