import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const SignUp = ({navigation}) => {

	const [user, setUser] = useState({
		fullname: '',
		email: '',
		password: ''
	})

	const [focus, setFocus] = useState({
		fullname: false,
		email: false,
		password: false,
	})

	const onFocus = (data) => {
		setFocus(data);
	}

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.titleText}>Sign Up Here!</Text>
			</View>

			<View style={styles.form}>
				<Input
				placeholder="Fullname"
				leftIcon={{ 
					type: 'font-awesome', 
					name: 'user', 
					color: focus.fullname ? "#ff7614" : "#aaa", 
					marginRight: 10 
				}}
				onChangeText={value => setUser({ fullname: value })}
				onFocus={() => onFocus({fullname: true})}
				onBlur={() => onFocus({fullname: false})}
				inputContainerStyle={focus.fullname ? styles.inputFocused : {}}
				/>

				<Input
				placeholder="Email"
				leftIcon={{ 
					type: 'font-awesome', 
					name: 'envelope', 
					color: focus.email ? "#ff7614" : "#aaa", 
					marginRight: 10 
				}}
				onChangeText={value => setUser({ email: value })}
				onFocus={() => onFocus({email: true})}
				onBlur={() => onFocus({email: false})}
				inputContainerStyle={focus.email ? styles.inputFocused : {}}
				/>

				<Input
				placeholder="Password"
				leftIcon={{ 
					type: 'font-awesome', 
					name: 'key', color: focus.password ? "#ff7614" : "#aaa", 
					marginRight: 10 
				}}
				onChangeText={value => setUser({ password: value })}
				onFocus={() => onFocus({password: true})}
				onBlur={() => onFocus({password: false})}
				inputContainerStyle={focus.password ? styles.inputFocused : {}}
				secureTextEntry={true}
				/>

				<Button
				    title="Sign Up"
				    type="solid"
				    buttonStyle={{
				  		backgroundColor: "#ff7614"
				    }}
				    titleStyle={{
				  		color: "#fff"
				    }}
				    onPress={() =>
			        navigation.navigate('Links', { name: 'Links' })}
				/>
			</View>

			<View style={styles.footer}>
				<Text style={{fontSize: 17, color: "#333"}}>Already have an account? <Text style={{color: "#ff7614"}} onPress={() =>
			        navigation.navigate('SignIn', { name: 'SignIn' })
			    }>Sign In here</Text></Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#ffffff',
		flex: 5
	},
	form: {
		marginTop: 20,
	},
	title: {
		alignItems: 'center'
	},
	titleText: {
		fontSize: 30,
		color: '#ff7614'
	},
	inputFocused: {
		borderBottomColor: '#ff7614',
	},
	footer: {
		marginTop: 20,
		alignItems: 'center'
	}
})

export default SignUp