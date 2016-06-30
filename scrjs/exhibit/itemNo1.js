import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView,ScrollView, Image , TouchableWithoutFeedback } from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';
import AudioPlayer from 'react-native-audio-manager';
var Orientation2 = require('react-native-orientation');
var Orientation = require('react-native-orientation-listener');

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");


var Item1 = React.createClass({
  getInitialState: function() {
    return{
      title:'01|風是甜的',
      subtitle:'梁任宏',
      size:'作品尺寸: 高398 x 長220 x 寬52（公分)',
      material:'作品材質: 不鏽鋼、烤漆、培林',
      content:'梁任宏受邀為各地各式節慶以及公共環境製作大型的戶外裝置，呈現出其多元精準的藝術樣貌。本次展出他的〈風是甜的〉，手持巨型的甜筒冰淇淋，色彩甜美討喜，任隨大自然的風動而擺動。在後站地下道的出口即能明顯地看到這件作品揮舞雙臂，就像是在歡迎旅客來到新竹。',
      playing:false,
      playPressing:false,
      stopPressing:false,
      outText:'Stop',
      deviceHeight:deviceHeight,
      deviceWidth:deviceWidth,
      orientationText:'No orientation',
    };
  },

// orientation handler , fire when orientation changed
  _setOrientation(data) {
    Orientation2.getOrientation((err , orientation)=>
    {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;

      if (orientation == 'PORTRAIT')
      {
        var orientationText = this.state.orientationText;
        orientationText = orientation;
        if (height < width)
        {
            this.setState({deviceHeight:width , deviceWidth:height})
        }
        this.setState({orientationText:orientationText});
      }
      if (orientation == 'LANDSCAPE')
      {
        var orientationText = this.state.orientationText;
        orientationText = orientation;
        if (height > width)
        {
            this.setState({deviceHeight:width , deviceWidth:height})
        }
        this.setState({orientationText:orientationText});
      }
    });
  },

// initial orientation handler
  componentDidMount(){
    var initial = Orientation2.getInitialOrientation();
    var orientationText = this.state.orientationText;
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

      this.setState({deviceHeight:height , deviceWidth:width});

    } else {

      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;
      var orientation = this.state.orientation;

      if (deviceWidth > deviceHeight){
        height = deviceHeight;
        width = deviceWidth;
      }
      else{
        height = deviceWidth;
        width = deviceHeight;
      }

      orientation = 'LANDSCAPE';
      this.setState({deviceHeight:height , deviceWidth:width});
    }

    Orientation.addListener(this._setOrientation);
  },



  playPressed:function()
  {
    var playing = this.state.playing;
    var playPressing = this.state.playPressing;

    if (playing == true){
      AudioPlayer.pause('i01');
      playing = false;
      playPressing = false;
      this.setState({playing:playing , playPressing:playPressing});
    }
    else
    {
      AudioPlayer.play('i01')
      playing = true;
      playPressing = false;
      this.setState({playing:playing ,  playPressing:playPressing});
    }
  },

  playPressing:function(){
    var playPressing = this.state.playPressing;
    if (playPressing === false){

      playPressing = true;
      this.setState({playPressing:playPressing});
    }

  },

  stopPressed:function(){
    var playing = this.state.playing;
    var stopPressing = this.state.stopPressing;

    if (playing == true){

      AudioPlayer.stop('i01');
      playing = false;
      stopPressing = false;
      this.setState({playing:playing , stopPressing:stopPressing})
    }
    else{

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

  // stop audio b4 popping out
  goBack:function(){
    AudioPlayer.stop('i01');
    Actions.pop();
  },


  render: function() {

    const titleConfig = {
      title:' 風是甜的 ',
    };

    const leftButtonConfig = {
      title:' Back ',
      handler:this.goBack,
    };


    if (this.state.playPressing){

      var playButtonImg = this.state.playing ?require('./components/btn_pause_pressed@2x.png') : require('./components/btn_play_pressed@2x.png');
    }
    else{

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
            <View style={{flex:1,height:deviceHeight-60, backgroundColor:'#f4f4f4',borderWidth:15,borderColor:'#FFFFFF'}}>

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
                                    backgroundColor:'#F5FC00',}} source={require('./components/01@2x.jpg')}/>
                  </View>
                <Text style={styles.subtitle}>{this.state.subtitle}</Text>
                <Text style={styles.info}>{this.state.material}</Text>
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
    color:'#32C800',
  },
  subtitle:{
    fontSize:20,
    fontWeight:"200",
    textAlign:'left',
    marginHorizontal:15,
    marginTop:10,
    color:'#32C800',
  },
  playButton:{
    height:30,
    width:60,
    marginHorizontal:0,
    marginTop:23,
    resizeMode:'cover',
  },
  stopButton:{
    height:30,
    width:60,
    marginHorizontal:0,
    marginTop:23,
    resizeMode:'cover',
    marginRight:5,
  },
  info:{
    fontSize:12,
    textAlign:'left',
    color:'#858484',
    marginTop:10,
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
  },
});

module.exports = Item1;
