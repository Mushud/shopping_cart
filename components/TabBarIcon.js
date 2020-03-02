import * as React from 'react';
import {
	Ionicons,
	Foundation,
	FontAwesome,
	AntDesign,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
	if (props.type === 'ion') {
		return (
			<Ionicons
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
				color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
	} else if (props.type === 'fou') {
		return (
			<Foundation
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
				color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
	} else if (props.type === 'awe1') {
		return (
			<FontAwesome
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
				color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
	} else if (props.type === 'ant') {
		return (
			<AntDesign
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
				color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
  } else if (props.type === 'mat'){
    	return (
				<MaterialCommunityIcons
					name={props.name}
					size={30}
					style={{ marginBottom: -3 }}
					color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				/>
			);
  }
  else
		return (
			<Ionicons
				name={props.name}
				size={30}
				style={{ marginBottom: -3 }}
				color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
}
