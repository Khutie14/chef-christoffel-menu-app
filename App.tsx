import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";

export type RootStackParamList = {
  Home: undefined;
  AddDish: undefined;
};

export type Dish = {
  name: string;
  description: string;
  course: string;
  price: string;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [menu, setMenu] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setMenu((prevMenu) => [...prevMenu, dish]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="AddDish">
          {(props) => <AddDishScreen {...props} addDish={addDish} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
