import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Identify from '../screens/Identify';
import Music from '../screens/Music';
import Search from '../screens/Search';
import Contribute from '../screens/Contribute';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
	// Set the header title on the parent stack navigator depending on the
	// currently active tab. Learn more in the documentation:
	// https://reactnavigation.org/docs/en/screen-options-resolution.html
	navigation.setOptions({ headerMode: 'none' });

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='home' type='fou' />
					)
				}}
			/>
			<BottomTab.Screen
				name='Music'
				component={Music}
				options={{
					headerTitl: null,
					title: 'Music',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='md-musical-note' />
					)
				}}
			/>
			<BottomTab.Screen
				name='Contribute'
				component={Contribute}
				options={{
					title: 'Contribute',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='google-assistant' type='mat' />
					)
				}}
			/>
			<BottomTab.Screen
				name='Identify'
				component={Identify}
				options={{
					title: 'Identify',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='dot-circle-o' type='awe1' />
					)
				}}
			/>
			<BottomTab.Screen
				name='Search'
				component={Search}
				options={{
					title: 'Search',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='search1' type='ant' />
					)
				}}
			/>
		</BottomTab.Navigator>
	);
}

function getHeaderTitle(route) {
	const routeName =
		route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

	switch (routeName) {
		case 'Home':
			return 'How to get started';
		case 'Links':
			return 'Links to learn more';
	}
}
