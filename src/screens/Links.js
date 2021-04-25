import React, {useState} from 'react'
import { SafeAreaView, View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SearchBar } from 'react-native-elements'

const data = [
		{
			id: '1',
			title: 'Social Media',
			uniqueLink: 'qwer1234',
			viewCount: 30
		},
		{
			id: '2',
			title: 'Online Shop',
			uniqueLink: 'busyhg54',
			viewCount: 10
		},
		{
			id: '3',
			title: 'Job Link',
			uniqueLink: 'jok6789',
			viewCount: 20
		}
	]

const Item = ({ title, uniqueLink, viewCount, navigation }) => (
	<View style={styles.item}>
		<View style={styles.head}>
			<View style={styles.imageLayout}>
				<Image source={require('../images/Lion-Tech-Ver-2.jpg')} style={styles.image} />
			</View>
			<View style={styles.titleLayout}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.url}>{`http://localhost:3000/`+uniqueLink}</Text>
			</View>
		</View>
	    <View style={styles.footer}>
		    <View style={styles.start}>
		    	<View styles={styles.previewLayout}>
		    		<Icon brand={true} name="eye" color="#aaa" size={25} style={{marginRight: 15}} onPress={() =>
			        navigation.navigate('Preview', { name: 'Preview' })}/>
		    	</View>
		    	<View styles={styles.editLayout}>
		    		<Icon brand={true} name="edit" color="#aaa" size={25} style={{marginRight: 15, marginTop: 1}}/>
		    	</View>
		    	<View styles={styles.deleteLayout}>
		    		<Icon brand={true} name="trash" color="#aaa" size={25}/>
		    	</View>
	    	</View>
	    	<View style={styles.end}>
		    	<View styles={styles.viewLayout}>
		    		<Text style={styles.viewCount}><Icon brand={true} name="eye" color="#aaa" size={15}/> {viewCount}</Text>
		    	</View>
		    	<View styles={styles.detailLayout}>
		    		<Button
					    title="Details"
					    type="solid"
					    buttonStyle={{
					  		backgroundColor: "#ff7614"
					    }}
					    titleStyle={{
					  		color: "#fff"
					    }}
					/>
		    	</View>
	    	</View>
	    </View>
	</View>
);

const Links = ({navigation}) => {
	const [isVisible, setIsVisible] = useState(true);
	const [search, setSearch] = useState('')
	const renderItem = ({ item }) => (
	    <Item title={item.title} uniqueLink={item.uniqueLink} viewCount={item.viewCount} navigation={navigation} />
	);
	return (
		<View style={styles.container}>
			<View>
				<SearchBar 
				placeholder="Search Here" 
				onChange={value => setSearch(value)} 
				value={search}
				containerStyle={{
					backgroundColor: "#fff",
					borderTopColor: "#fff",
					borderBottomColor: "#fff",
					paddingHorizontal: 0,
					paddingTop: 0
				}}
				inputContainerStyle={{
					backgroundColor: "rgba(255, 118, 20, 0.3)",
				}}
				inputStyle={{
					color: '#333'
				}}
				placeholderTextColor="#333"/>
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
			
		    <View>
		    	<TouchableOpacity
				   	style={styles.floatBtn}
				>
				    <Icon name="plus"  size={30} color="#ff7614" />
				</TouchableOpacity>
		    </View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 5,
		backgroundColor: '#fff',
		padding: 10
	},
	item:{
		borderColor: '#aaa',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		padding: 10,
		paddingLeft: 3
	},
	head:{
		flexDirection: 'row',
		marginLeft: 10,
	},
	image:{
		width: 70,
		height: 70
	},
	title:{
		fontSize: 20,
		marginTop: 15
	},
	url:{
		color: '#aaa'
	},
	footer:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	start:{
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 5,
		marginLeft: 7,
	},
	end:{
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	viewCount:{
		fontSize: 15,
		marginTop: 5,
		marginRight: 15
	},
	floatBtn:{
		borderWidth:1,
        borderColor:"#ff7614",
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 20,                                                    
        left: 10,
        height:70,
        backgroundColor:'#fff',
        borderRadius:100,
	}
})

export default Links