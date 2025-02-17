import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
if (__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentScreen,
		List: ListScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
		Square: SquareScreen,
		Text: TextScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App',
		},
	}
);

export default createAppContainer(navigator);
