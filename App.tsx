import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import Confirmation from './components/ConfirmationPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
