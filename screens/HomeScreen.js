import * as React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
	var [count, setCount] = React.useState(0);
	return (
		<View style={styles.container}>
			<View
				style={{
					borderRadius: 10,
					backgroundColor: 'green',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 20,
					margin: 5
				}}
			>
				<Text style={{ fontSize: 60, color: 'white' }}>{count}</Text>
			</View>

			<View style={{ flexDirection: 'row', paddingVertical: 15 }}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						setCount(++count);
					}}
					style={{
						backgroundColor: 'blue',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
						borderRadius: 10,
						margin: 5
					}}
				>
					<Text style={{ fontSize: 65, color: 'white' }}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						if (count > 0) {
							setCount(--count);
						}
					}}
					style={{
						backgroundColor: 'blue',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
						borderRadius: 10,
						padding: 15,
						margin: 5
					}}
				>
					<Text style={{ fontSize: 65, color: 'white' }}>-</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10
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
