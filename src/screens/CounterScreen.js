import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button title='Increase' onPress={() => setCounter(counter + 1)} />
			<Button title='Descrease' onPress={() => setCounter(counter - 1)} />
			<Text>Current Count:{counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default CounterScreen;
