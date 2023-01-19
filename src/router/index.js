import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screen/Login';
import Profile from '../screen/Profile';
import HomeScreen from "../screen/Homescreen";
import ImportantNoturgent from "../screen/Importantnoturgent";
import ImportanUrgent from "../screen/Importanurgent";
import NotimportantNoturgent from "../screen/Notimportantnoturgent";
import NotimportantUrgent from "../screen/Notimportanturgent";
import Create from '../screen/Create';
import Register from '../screen/Register';
import Forgot from '../screen/Forgot';
import NewPassword from '../screen/Newpassword';
import { Modal } from 'react-native';

const Stack = createNativeStackNavigator();

/**
 * PARENT STACK PERTAMA (splashscreen, auth (login, register, forgot, new password))
 * PARENT STACK KEDUA (home (1 bottom tab (all, due, overdue, done)), profile, create task)
 * 
 * state / kondisi isLoggedIn 
 * jika isLoggedIn true , redirect ke home
 * jika isLoggedIn false
 */

function AuthRoute() {
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />      
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  )
}

function MainRoute() {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name='Profile' component={Profile} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="New Password" component={NewPassword} />
      <Stack.Screen options={{headerShown: true}} name="Important Urgent" component={ImportanUrgent} />
      <Stack.Screen name="Important Not Urgent" component={ImportantNoturgent} />
      <Stack.Screen name="Modal" component={Modal} />
      <Stack.Screen name="Not Important Urgent" component={NotimportantUrgent} />
      <Stack.Screen name="Not Important Not Urgent" component={NotimportantNoturgent} />
    </Stack.Navigator>
  )
}
 
function Router() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name='Profile' component={Profile} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="New Password" component={NewPassword} />
      <Stack.Screen options={{headerShown: true}} name="Important Urgent" component={ImportanUrgent} />
      <Stack.Screen name="Important Not Urgent" component={ImportantNoturgent} />
      <Stack.Screen name="Modal" component={Modal} />
      <Stack.Screen name="Not Important Urgent" component={NotimportantUrgent} />
      <Stack.Screen name="Not Important Not Urgent" component={NotimportantNoturgent} />
    </Stack.Navigator>
  );
}

export default Router;