import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Homescreen from './src/screen/Homescreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//   ----Bottom-Icon----
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductDetails from './src/screen/ProductDetails';
import CartScreen from './src/screen/CartScreen';
import { cartContext, CartProvider } from './src/context/cartcontext';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}

    >

      <Stack.Screen name="HOME" component={Homescreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <CartProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#E96E6E",
              }}
              initialRouteName='HOME_STACK'
            >
              <Tab.Screen
                name="HOME_STACK"
                component={MyHomeStack}
                options={{
                  tabBarIcon: ({ size, focused, color }) => {
                    return <Entypo name={'home'} size={size} color={color} />;
                  },
                }}
              />
              <Tab.Screen
                name="REORDER"
                component={Home}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    return <MaterialIcons name={'reorder'} size={size} color={color} />;
                  },
                }}
              />
              <Tab.Screen
                name="CART"
                component={CartScreen}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    const { carts }= useContext(cartContext);
                    return (
                      <View style={{position:"relative"}}>
                    <MaterialCommunityIcons 
                    name={'cart'} 
                    size={size} 
                    color={color} 
                    />
                    <View style={{
                        height:14,
                        width:14,
                        borderRadius:7,
                        backgroundColor: color,
                        alignItems:"center",
                        justifyContent:"center",
                        position:"absolute",
                        top:-10,
                        right:-5,
                      }}>
                      <Text  style={{
                        fontSize:10,
                        color: "white",
                        fontWeight:"500",
                      }}>{carts?.length}</Text>
                    </View>
                    </View>
                    );
                  },
                }}
              />
              <Tab.Screen
                name="ACCOUNT"
                component={Home}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    return <FontAwesome6 name={'user'} size={size} color={color} />;
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView >
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
