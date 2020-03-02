import * as React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

const musicList = [
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	},
	{
		artist: 'KIDI',
		title: 'Adiepena',
		imgUrl:
			'https://www.ghanasongs.com/wp-content/uploads/2018/04/Kidi-%E2%80%93-Adiepena-Prod.-By-Dat-BeatGod-www.Ghanasongs.com_.jpg'
	}
];

export default function Contribute() {
	return (
		<View style={styles.container}>
			<View style={{ position: 'absolute', right: 0 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Ionicons
						style={{ marginHorizontal: 10 }}
						name='ios-notifications'
						size={30}
					/>
					<View
						style={{
							width: 40,
							height: 40,
							borderRadius: 20,
							backgroundColor: '#3939a3',
							justifyContent: 'center',
							alignItems: 'center',
							marginHorizontal: 10
						}}
					>
						<Text style={{ color: 'white', fontSize: 18 }}>M</Text>
					</View>
				</View>
			</View>
			<View style={{ marginVertical: 50, marginTop: 60 }}>
				<Text style={{ fontSize: 20, color: 'grey' }}>Welcome back,</Text>
				<Text style={{ fontSize: 30, fontWeight: 'bold' }}>Melody</Text>
			</View>
			<View
				style={{
					borderRadius: 15,
					backgroundColor: '#1e81eb',
					flexDirection: 'row',
					padding: 15,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
						Complete your profile
					</Text>
					<Text style={{ color: 'white', marginTop: 10, fontSize: 18 }}>
						We will suggest you songs based on your tastes
					</Text>
				</View>
				<View
					style={{
						width: 70,
						height: 70,
						borderRadius: 45,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#0f62ba'
					}}
				>
					<Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
						40%
					</Text>
				</View>
			</View>
			<View
				style={{
					marginVertical: 30,

					padding: 20
				}}
			>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0f62ba' }}>
						Sync Lyrics
					</Text>
					<Text style={{ fontSize: 18, fontWeight: 'bold', color: '#eb6421' }}>
						View all
					</Text>
				</View>
				<FlatList
					horizontal
					data={musicList}
					renderItem={({ item }) => (
						<View style={{ marginTop: 10 }}>
							<Image
								style={{
									borderRadius: 10,
									width: 120,
									height: 120,
									marginRight: 10
								}}
								source={{ uri: item.imgUrl }}
							/>
							<Text style={{ fontSize: 20, color: 'grey' }}>{item.artist}</Text>
							<Text style={{ fontSize: 16, color: 'grey' }}>{item.title}</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

Contribute.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)'
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center'
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},
	helpLink: {
		paddingVertical: 15
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7'
	}
});
