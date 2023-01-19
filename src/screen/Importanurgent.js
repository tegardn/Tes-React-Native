import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text, ScrollView } from "react-native";
import All from "./navigation/All";
import Due from "./navigation/Due";
import OverDue from "./navigation/Overdue";
import Done from "./navigation/Done";

const Tab = createBottomTabNavigator();

export default function ImportanUrgent() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="All"
        component={All}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/Due.png")}
              style={{ height: 18, width: 16 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Due"
        component={Due}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/Due.png")}
              style={{ height: 18, width: 16 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Over Due"
        component={OverDue}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/Due.png")}
              style={{ height: 18, width: 16 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Done"
        component={Done}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/Due.png")}
              style={{ height: 18, width: 16 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
