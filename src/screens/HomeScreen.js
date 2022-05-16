import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Button title='Go to Components Demo' onPress={() => navigation.navigate('Components')} />
			<Button title='Go to List Demo' onPress={() => navigation.navigate('List')} />
			<Button title='Go to Image Demo' onPress={() => navigation.navigate('Image')} />
			<Button title='Go to Counter Demo' onPress={() => navigation.navigate('Counter')} />
			<Button title='Go to Color Demo' onPress={() => navigation.navigate('Color')} />
			<Button title='Go to Square Demo' onPress={() => navigation.navigate('Square')} />
			<Button title='Go to Text Demo' onPress={() => navigation.navigate('Text')} />
		</View>
	);
};

export default HomeScreen;
