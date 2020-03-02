import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const messageList = [
	{
		title: 'Michael Soli',
		message:
			'By default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg',
		date: '9:00am'
	},
	{
		title: 'James Clottey',
		message:
			'By default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg',
		date: '9:00am'
	},
	{
		title: 'Dennis Amanka',
		message:
			'By default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg',
		date: '9:00am'
	}
];
export default function Identify() {
	return (
		<View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white' }}>
			<Text style={{ fontSize: 30 }}>List</Text>
			<FlatList
				data={messageList}
				renderItem={({ item }) => (
					<View style={{ flexDirection: 'row', marginVertical: 10 }}>
						<Image
							source={{ uri: item.imgUrl }}
							style={{ height: 70, width: 70, borderRadius: 35 }}
						/>
						<View
							style={{
								borderBottomWidth: 0.5,
								borderBottomColor: '#e5e5e5',
								flex: 1,
								marginHorizontal: 10,
								paddingVertical: 10
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between'
								}}
							>
								<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
									{item.title}
								</Text>
								<Text style={{ color: 'silver' }}>{item.date}</Text>
							</View>
							<Text style={{ color: 'grey' }} numberOfLines={2}>
								{item.message}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	contentContainer: {
		paddingTop: 15
	},
	optionIconContainer: {
		marginRight: 12
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: 0,
		borderColor: '#ededed'
	},
	lastOption: {
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	optionText: {
		fontSize: 15,
		alignSelf: 'flex-start',
		marginTop: 1
	}
});
