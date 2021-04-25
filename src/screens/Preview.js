import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const data = [
	{
		id: '1',
		title: 'Facebook',
		image: require('../images/FB.png')
	},
	{
		id: '2',
		title: 'Instagram',
		image: require('../images/IG.png')
	},
	{
		id: '3',
		title: 'Twitter',
		image: require('../images/TW.jpg')
	}
]

const Item = ({ title, image }) => (
	<View style={styles.item}>
		<View style={styles.listContainer}>
			<View style={styles.imageLinkLayout}>
				<Image source={image} style={styles.imageLink} />
			</View>
			<View style={styles.titleLinkLayout}>
				<Text style={styles.titleLink}>{title}</Text>
			</View>
			<View style={styles.goto}>
				<Icon name="external-link"  size={20} color="#ffffff" style={{marginTop: 11, textAlign: 'center'}} />
			</View>
		</View>
	</View>
);

const Preview = () => {
	const renderItem = ({ item }) => (
	    <Item title={item.title} image={item.image} />
	);
	return (
		<View style={styles.container}>
			<View style={styles.imageLayout}>
				<Image source={require('../images/Lion-Tech-Ver-2.jpg')} style={styles.image} />
			</View>
			<View style={styles.titleLayout}>
				<Text style={styles.title}>Social Media</Text>
			</View>
			<View style={styles.descriptionLayout}>
				<Text style={styles.description}>
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
				</Text>
			</View>
			<View>
				<SafeAreaView style={styles.list}>
				    <FlatList
				        data={data}
				        renderItem={renderItem}
				        keyExtractor={item => item.id}
				    />
			    </SafeAreaView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		paddingHorizontal: 20,
	},
	imageLayout:{
		alignItems: 'center',
	},
	image:{
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: "#ff7614",
		borderWidth: 1,
		padding: 10
	},
	titleLayout:{
		alignItems: 'center',
		marginTop: 10
	},
	title:{
		fontSize: 25
	},
	descriptionLayout:{
		alignItems: 'center',
		marginTop: 10
	},
	description:{
		textAlign: 'center'
	},
	list:{
		marginTop: 40,
	},
	listContainer:{
		flexDirection: 'row',
		marginBottom: 20,
		backgroundColor: '#333',
		padding: 5,
		borderRadius: 3
	},
	imageLinkLayout:{
		flex: 1,
	},
	imageLink:{
		width: 40,
		height: 40,
		borderRadius: 50
	},
	titleLinkLayout:{
		flex: 4,
		marginTop: 6
	},
	titleLink:{
		fontSize: 20,
		textAlign: 'center',
		color: '#fff'
	},
	goto:{
		flex: 1
	}
})

export default Preview