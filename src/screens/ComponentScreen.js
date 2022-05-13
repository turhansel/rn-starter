import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
	const name = 'Turhan';
	const renderText = <Text className={styles.subHeaderStyle}>My Name is {name}</Text>;

	return (
		<View>
			<Text className={styles.textStyle}>Getting started with React Native!</Text>
			{renderText}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	subHeaderStyle: {
		fontSize: 20,
	},
});

export default ComponentScreen;
