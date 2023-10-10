import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterCachorro from './ManterCachorro';
import ListarCachorros from './ListarCachorros';

function ListarScreen({ navigation }) {
  return (
   <ListarCachorros></ListarCachorros>
  );
}
function ManterScreen({ navigation }) {
  return (
   <ManterCachorro></ManterCachorro>
  );
}
const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    
      <Drawer.Navigator initialRouteName="Manter Cachorro">
        <Drawer.Screen name="Manter Cachorro" component={ManterScreen} />
        <Drawer.Screen name="Listar Cachorro" component={ListarScreen} />
        
      </Drawer.Navigator>
    
  );
}