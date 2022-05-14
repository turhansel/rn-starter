import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	const randomRgb = () => {
		const random = (number) => {
			return Math.floor(Math.random() * number);
		};
		return 'rgb(' + random(256) + ',' + random(256) + ',' + random(256) + ')';
	};

	return (
		<View>
			<Button
				title='Add a Color'
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
				}}
			/>
		</View>
	);
};

export default ColorScreen;
