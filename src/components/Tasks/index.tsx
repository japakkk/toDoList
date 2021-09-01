import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
	text: string;
}

export function Task({text}: Props) {
	return(
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>
				<Text style={styles.itemText}> {text}</Text>
			</View>
			<View style={styles.circular}></View>
		</View>
	)
}