import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import Reactotron from 'reactotron-react-native';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const reducer = (state, action) => {
		switch (action.colorToChange) {
			case 'red':
				return state.red + action.amount > 255 || state.red + action.amount < 0
					? state
					: { ...state, red: state.red + action.amount };
			case 'green':
				return state.green + action.amount > 255 || state.green + action.amount < 0
					? state
					: { ...state, green: state.green + action.amount };
			case 'blue':
				return state.blue + action.amount > 255 || state.blue + action.amount < 0
					? state
					: { ...state, blue: state.blue + action.amount };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	Reactotron.log(state);

	return (
		<View>
			<ColorCounter
				color='Red'
				onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
				onDescrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
			/>
			<ColorCounter
				color='Green'
				onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
				onDescrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
			/>
			<ColorCounter
				color='Blue'
				onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
				onDescrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
			/>
			<Text>{`rgb(${red},${green},${blue})`}</Text>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
		</View>
	);
};

export default SquareScreen;
