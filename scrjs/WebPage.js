import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity,WebView} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import NavigationBar from 'react-native-navbar';

var { width, height } = Dimensions.get('window');



var WebPage = React.createClass({
  getInitialState() {
    return {
      DEFAULT_URL : 'https://www.google.com.tw/',


    };
  },

  componentDidMount() {
    Actions.refresh();
  },


  render() {

        const titleConfig = {
          title:' WebPage ',
        };

        const leftButtonConfig = {
          title:'Back',
          handler:Actions.pop,
        };

    return (

      <View style={{flex:1}}>
          <NavigationBar tintColor='#f7f7f7'
                          title={titleConfig}
                          leftButton={leftButtonConfig}
                          />
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


});

module.exports = WebPage;
