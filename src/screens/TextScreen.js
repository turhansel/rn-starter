import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Set Password</Text>
			<TextInput
				className={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;
