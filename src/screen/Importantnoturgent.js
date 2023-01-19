import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from "./navigation/All";
import Due from "./navigation/Due";
import OverDue from "./navigation/Overdue";
import Done from "./navigation/Done";

const Tab = createBottomTabNavigator()

export default function ImportantNoturgent() {
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="All" component={All}/>
        <Tab.Screen name="Due" component={Due}/>
        <Tab.Screen name="Over Due" component={OverDue}/>
        <Tab.Screen name="Done" component={Done}/>
    </Tab.Navigator>
);

}
