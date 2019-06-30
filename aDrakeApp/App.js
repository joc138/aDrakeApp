/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Images = [

	{
		uri: "http://thesource.com/wp-content/uploads/2019/06/64826457_2572137192820548_8880560496154682771_n.jpg",
		label: "Where you movin'? I said onto better things"
	},	
	{
		uri: "http://thesource.com/wp-content/uploads/2019/06/64826457_2572137192820548_8880560496154682771_n.jpg://cdn.vox-cdn.com/thumbor/D-z_gbgbkOxpAFRNIXGeA1ekhWM=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/59375201/DrakeTooBig_Getty_Ringer.0.jpg",
		label: "My Mount Rushmore is me with four different expressions"
	},
	{
		uri: "http://canadianamphitheatre.net/wp-content/uploads/2012/06/drake.jpg",
		label: "Bury me and I'll be born again"
	}

];

type Props = {};
export default class App extends Component<Props> {
  state = {
  	index: 0,
	imageWidth: null
  }

  render() {
    const image = Images[this.state.index];
    return (
      	<View style={styles.container}>
		<View style={styles.empty} />
		<Image source={{uri: image.uri}}
			style={styles.image} />	    
		 <View style={styles.empty} />
      	</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  image:{
  	flex: 5,
	width: 320,
	justifyContent: 'flex-end',
	alignItems: 'center',
  },
  imageLabel: {
    	textAlign: 'center',
	backgroundColor: 'rgba(100,100,100,0.5)',
	color: 'white',
	width: 320
  },
  empty: {
  	flex: 1
  }
  
});
