import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import Logo from '../components/Logo'

const Template = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.icon}>
					<Icon brand={true} name="palette" color="#ffffff"/>
				</View>
				<View>
					<Text style={styles.titleHeader}>Template</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 35,
		flex: 5,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	header: {
		position: 'absolute',
		marginTop: 20,
		backgroundColor: '#ff7614',
		width: '100%',
		padding: 10,
		flexDirection: 'row'
	},
	icon: {
		marginTop: 3,
		marginRight: 5
	},
	titleHeader: {
		fontSize: 25,
		color: '#fff'
	}
})

export default Template