import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView,ScrollView, Image , TouchableWithoutFeedback } from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';
import AudioPlayer from 'react-native-audio-manager';
//var Orientation = require('react-native-orientation');
var Orientation = require('react-native-orientation-listener');

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");


var Item9 = React.createClass({
  getInitialState: function() {
    return{
      title:'09|The Collector',
      subtitle: 'HOTTEA',
      size:'作品尺寸: 依現場空間而定',
      material:'作品材質: 棉線、鐵(或鋼索)',
      content:'明尼蘇達藝術家HOTTEA，擅⻑利⽤都市中的物件例如鐵絲網柵欄與異材質結合成⼀件作品，代表作就是以⽤彩色的毛線製作出美麗的幾何圖形。他的作品主要與透視有關，象徵著以不同的方法看這個世界，無論是字面上的或是作品所暗喻的意思。',
      playing:false,
      playPressing:false,
      stopPressing:false,
      outText:'Stop',
      deviceHeight:deviceHeight,
      deviceWidth:deviceWidth,
    };
  },

  _setOrientation(data) {
    var height = this.state.deviceHeight;
    var width = this.state.deviceWidth;

    this.setState({deviceHeight:width , deviceWidth:height});
  },

  componentDidMount(){
    Orientation.addListener(this._setOrientation);
  },

/*
  componentWillUnmount() {
    Orientation.removeListener(this._setOrientation);
  },


  componentWillMount:function(){
    Orientation.addOrientationListener(this._orientationDidChange);
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;
      var orientation = this.state.orientation;

      if (deviceHeight > deviceWidth)
      {
        height = deviceHeight;
        width = deviceWidth;
      }
      else
      {
        height = deviceWidth;
        width = deviceHeight;
      }

      orientation = 'PORTRAIT';
      this.setState({deviceHeight:height , deviceWidth:width , orientation:orientation});


    } else {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;
      var orientation = this.state.orientation;

      if (deviceWidth > deviceHeight)
      {
        height = deviceHeight;
        width = deviceWidth;
      }
      else
      {
        height = deviceWidth;
        width = deviceHeight;
      }
      orientation = 'LANDSCAPE';
      this.setState({deviceHeight:height , deviceWidth:width , orientation:orientation});

    }
  },

  _orientationDidChange: function(orientation) {
    if (orientation == 'LANDSCAPE') {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;
      var orientation = this.state.orientation;

      orientation = 'LANDSCAPE';
      this.setState({deviceHeight:width , deviceWidth:height , orientation:orientation});
    } else {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;


      orientation = 'PORTRAIT';
      this.setState({deviceHeight:width , deviceWidth:height , orientation:orientation});

      //do something with portrait layout
    }
  },

*/


  playPressed:function()
  {
    var playing = this.state.playing;
    var playPressing = this.state.playPressing;

    if (playing == true){
      AudioPlayer.pause('sample');
      playing = false;
      playPressing = false;
      this.setState({playing:playing , playPressing:playPressing});
    }
    else
    {
      AudioPlayer.play('sample')
      playing = true;
      playPressing = false;
      this.setState({playing:playing ,  playPressing:playPressing});
    }
  },

  playPressing:function(){
    var playPressing = this.state.playPressing;
    if (playPressing === false)
    {
      playPressing = true;
      this.setState({playPressing:playPressing});
    }

  },

  stopPressed:function(){
    var playing = this.state.playing;
    var stopPressing = this.state.stopPressing;

    if (playing == true){
      AudioPlayer.stop('sample');
      playing = false;
      stopPressing = false;
      this.setState({playing:playing , stopPressing:stopPressing})
    }
    else
    {
      playing = false;
      stopPressing = false;
      this.setState({playing:playing , stopPressing:stopPressing})
    }


  },

  stopPressing:function(){
    var stopPressing = this.state.stopPressing;
    if (stopPressing === false)
    {
      stopPressing = true;
      this.setState({stopPressing:stopPressing});
    }
  },



  goBack:function()
  {
    AudioPlayer.stop('sample');
    Actions.pop();
  },


  render: function() {

    const titleConfig = {
      title:' The Collector ',
    };

    const leftButtonConfig = {
      title:' < ',
      handler:this.goBack,
    };


    if (this.state.playPressing){
      var playButtonImg = this.state.playing ?require('./components/btn_pause_pressed@2x.png') : require('./components/btn_play_pressed@2x.png');
    }
    else
    {
      var playButtonImg = this.state.playing ? require('./components/btn_pause_normal@2x.png') : require('./components/btn_play_normal@2x.png') ;
    }


   var stopButtonImg = this.state.stopPressing ? require('./components/btn_stop_pressed@2x.png') : require('./components/btn_stop_normal@2x.png');

   var imgWidth = this.state.deviceWidth - 60;
   var imgHeight = imgWidth / 2;

    return (
      <View style={{flex:1}}>

            <NavigationBar tintColor='#f7f7f7'
                            title={titleConfig}
                            leftButton={leftButtonConfig}
                            />
        <ScrollView style={{height: deviceHeight+300}}>
            <View style={{flex:1,backgroundColor:'#f4f4f4',borderWidth:15,borderColor:'#FFFFFF'}}>

                <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                      <Text style={styles.title}> {this.state.title} </Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <TouchableWithoutFeedback onPress={this.playPressed} onPressIn={this.playPressing}>
                          <Image style={styles.playButton} source={playButtonImg}/>
                      </TouchableWithoutFeedback>

                      <TouchableWithoutFeedback onPress={this.stopPressed} onPressIn={this.stopPressing}>
                          <Image style={styles.stopButton} source={stopButtonImg}/>
                      </TouchableWithoutFeedback>

                  </View>
                </View>



                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Image style={{width:imgWidth,
                                    height:imgHeight,
                                    marginTop:15,
                                    marginBottom:5,
                                    margin:15,
                                    resizeMode:'cover',
                                    backgroundColor:'#F5FC00',}} source={require('./components/09.jpg')}/>
                  </View>

                <Text style={styles.subtitle}> {this.state.subtitle} </Text>
                <Text style={styles.info}> {this.state.material} </Text>

                <Text style={styles.mainContent}>{this.state.content}</Text>

            </View>
        </ScrollView>
     </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: 0,
  },
  title:{
    fontSize:20,
    fontWeight:"500",
    textAlign:'left',
    marginHorizontal:15,
    marginTop:25,
  },
  subtitle:{
    fontSize:20,
    fontWeight:"200",
    textAlign:'left',
    marginHorizontal:15,
    marginTop:10,
  },
  playButton:{
    height:30,
    width:60,
    marginHorizontal:0,
    marginTop:20,
    resizeMode:'cover',
  },
  stopButton:{
    height:30,
    width:60,
    marginHorizontal:0,
    marginTop:20,
    resizeMode:'cover',
    marginRight:15,
  },
  info:{
    fontSize:12,
    textAlign:'left',
    color:'#858484',
    marginHorizontal:15,
    marginBottom:15,
  },
  content:{
    fontSize:16,
    textAlign:'left',
    lineHeight:25,
    marginHorizontal:15,
    marginTop:10,
    marginBottom:0,
  },
  mainContent:{
    fontSize:16,
    textAlign:'left',
    lineHeight:25,
    marginHorizontal:15,
    marginTop:3,
    fontFamily:'標階體',
  },
  img:{
    width:deviceWidth - 60,
    height: (deviceWidth - 60) / 2,
    marginTop:15,
    marginBottom:5,
    margin:15,
    resizeMode:'cover',
    backgroundColor:'#F5FC00',
  },
  /*
  stop:
  {
    textAlignVertical:'bottom',
    textAlign:'right',
    marginBottom:15,
    marginTop:8,
  }
  */


});

module.exports = Item9;
