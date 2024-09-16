import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const CustomTextInput = ({
	label,
	value,
	onChangeText,
	placeholder,
	style,
	...rest
}) => {
	return (
		<View style={[styles.container, style]}>
			{label && <Text style={styles.label}>{label}</Text>}
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				{...rest}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	label: {
		marginBottom: 5,
		fontSize: 16,
		color: "#333",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 5,
	},
});

export default CustomTextInput;
