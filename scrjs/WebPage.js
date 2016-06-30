import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity,WebView ,BackAndroid} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import NavigationBar from 'react-native-navbar';
import ToolbarAndroid from 'ToolbarAndroid';

var { width, height } = Dimensions.get('window');

var WebPage = React.createClass({
  getInitialState() {
    return {
      DEFAULT_URL : 'http://www.post-hsinchu.com/',
    };
  },

  onActionSelected: function(position) {
    if (position === 0){
      Actions.homepage();
    }
    if (position === 1) { // index of 'Settings'
      Actions.mappage();
    }
  },

  render() {
    
        var toolbarActions =[
          {title: 'Home' ,  icon:require('./components/ic_home_normal@2x.png'), show: 'always'},
          {title: 'Map', icon:require('./components/ic_map_normal@2x.png'), show: 'always'},
          {title: 'Web', icon:require('./components/ic_web_pressed@2x.png'), show: 'always'},
        ];


    return (

      <View style={{flex:1}}>
          <ToolbarAndroid
           actions={toolbarActions}
           onActionSelected={this.onActionSelected}
           title={'後新竹時代'}
           style={styles.toolbar}
           ></ToolbarAndroid>
          <WebView
              style={styles.webView}
              url={this.state.DEFAULT_URL}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}>
          </WebView>
      </View>

    );
  },
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  webView:{
    backgroundColor:'#f7f7f7',
    height: 350,
    flex:1,
  },
  toolbar:{
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

module.exports = WebPage;
