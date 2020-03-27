import * as React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	StatusBar,
	FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const stories = [
	{
		key: 1,
		url:
			'https://specials-images.forbesimg.com/imageserve/1166857942/960x0.jpg?fit=scale'
	},
	{
		key: 2,
		url:
			'https://kuulpeeps.com/wp-content/uploads/2019/10/WhatsApp-Image-2019-10-04-at-08.02.29.jpeg',
		username: 'Bra Kwaku'
	},
	{
		key: 3,
		url: 'http://presidency.gov.gh/images/nana-portrait.png',
		username: 'Addo'
	},
	{
		key: 4,
		url: 'https://pbs.twimg.com/media/D7wtTa-X4AAYf0r?format=jpg&name=small',
		username: 'jamesLomottey'
	},
	{
		key: 5,
		url:
			'https://specials-images.forbesimg.com/imageserve/1166857942/960x0.jpg?fit=scale',
		username: 'kylerJJ'
	},
	{
		key: 6,
		url:
			'https://specials-images.forbesimg.com/imageserve/1166857942/960x0.jpg?fit=scale',
		username: 'Atta Kwasi'
	},
	{
		key: 7,
		url:
			'https://specials-images.forbesimg.com/imageserve/1166857942/960x0.jpg?fit=scale',
		username: 'mmBoom'
	}
];

export default function HomeScreen() {
	var [count, setCount] = React.useState(0);
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' backgroundColor='white' />
			<View
				style={{
					elevation: 2,
					flexDirection: 'row',
					alignItems: 'center',
					padding: 5
				}}
			>
				<Feather name='camera' size={22} color='black' />
				<Text
					style={{
						flex: 2,
						fontFamily: 'ig-font',
						fontSize: 30,
						paddingLeft: 10
					}}
				>
					Instagram
				</Text>
				<Feather name='send' size={22} color='black' />
			</View>
			<View
				style={{
					borderBottomColor: 'silver',
					borderBottomWidth: 0.5,
					padding: 10
				}}
			>
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					data={stories}
					renderItem={({ item, index }) => (
						<View style={{ padding: 5, justifyContent: 'center' }}>
							<LinearGradient
								colors={['#C13584', '#F56040', '#FCAF45']}
								style={{
									width: 60,
									height: 60,
									borderRadius: 30,
									backgroundColor: 'grey',
									justifyContent: 'center',
									alignItems: 'center',

									marginVertical: 5
								}}
							>
								<Image
									source={{ uri: item.url }}
									style={{
										width: 54,
										height: 54,
										borderRadius: 27,
										backgroundColor: 'white',
										borderWidth: 1.5,
										borderColor: 'white'
									}}
								></Image>
							</LinearGradient>
							{item.key === 1 ? (
								<Text>Your Story</Text>
							) : (
								<Text style={{ textAlign: 'center' }}>{item.username}</Text>
							)}
						</View>
					)}
				/>
			</View>
			<FlatList
				data={stories}
				renderItem={({ item, index }) => (
					<View>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}
						>
							<LinearGradient
								colors={['#C13584', '#F56040', '#FCAF45']}
								style={{
									width: 36,
									height: 36,
									borderRadius: 20,
									backgroundColor: 'grey',
									justifyContent: 'center',
									alignItems: 'center',

									marginVertical: 5
								}}
							>
								<Image
									source={{
										uri:
											'https://specials-images.forbesimg.com/imageserve/1166857942/960x0.jpg?fit=scale'
									}}
									style={{
										width: 30,
										height: 30,
										borderRadius: 18,
										backgroundColor: 'white'
									}}
								></Image>
							</LinearGradient>
							<View style={{ paddingHorizontal: 5, flex: 2 }}>
								<Text style={{ fontWeight: 'bold' }}>{item.username}</Text>
								<Text>CC Eagles' Temple, Cape Coast</Text>
							</View>
							<Feather name='more-vertical' size={18} color='black' />
						</View>
						<Image
							source={{
								uri: item.url
							}}
							style={{
								resizeMode: 'cover',

								height: 300
							}}
						></Image>
						<View
							style={{
								paddingVertical: 10,
								paddingHorizontal: 10,
								flexDirection: 'row'
							}}
						>
							<AntDesign style={{ marginRight: 10 }} name='hearto' size={22} />
							<AntDesign
								style={{ marginRight: 10 }}
								name='message1'
								size={22}
							/>
							<Feather style={{ flex: 2 }} name='send' size={22} />
							<FontAwesome name='bookmark-o' size={22} />
						</View>
						<View style={{ paddingHorizontal: 15 }}>
							<Text style={{ fontSize: 18 }}>
								<Text style={{ fontWeight: 'bold' }}>48</Text> Likes
							</Text>
							<Text>
								<Text style={{ fontWeight: 'bold' }}>Glenn </Text>
								Living life to the fullest
							</Text>
							<Text style={{ color: 'grey' }}>View all 8 Comments</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
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
