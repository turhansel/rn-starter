import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDescrease }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<Button onPress={() => onDescrease()} title={`Decrease ${color}`} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;
