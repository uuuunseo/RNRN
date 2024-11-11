import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RealStoryView from './screens/RealStoryView';
import EditStoryView from "./screens/EditStoryView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RealStoryView" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RealStoryView" component={RealStoryView} />
        <Stack.Screen name="EditStoryView" component={EditStoryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};