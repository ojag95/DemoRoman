import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const MainStackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MainStackNavigator;