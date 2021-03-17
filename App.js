import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  //library called React Navigation
  // navigation: showing different content to the user
  {
    // add any item you want in the navigation to this object
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    //starting page when app loads
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'I love poop',
    },
  }
);

export default createAppContainer(navigator);
