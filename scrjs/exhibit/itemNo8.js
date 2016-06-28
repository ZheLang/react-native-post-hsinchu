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


var Item8 = React.createClass({
  getInitialState: function() {
    return{
      title:'08|原來五百的家鄉在新竹',
      subtitle: '陳浚豪',
      size:'作品尺寸: 高300 x 長606 x 寬243（公分）',
      material:'作品材質: 貨櫃、透明壓克力、玻璃珠、LED燈',
      content:'計畫以新竹在地的玻璃珠材質作為創作元素,以點串成線, 線再構成面,面再構成立體的3D鈔票面額,如同層層的珠簾裝置在廿呎貨櫃 (計畫切除正面與兩個側面)之中,加上自然光的運用,讓珠簾彷若大塊假我 以文章的量化美感得以呈現在公共空間,在觀者的遠近觀察移動中,鈔票上的 圖像如群鹿、山頭、竹葉等將在具象與抽象之間轉換,期盼能創造了另一種材 質上互動性的視覺光譜。',
      playing:false,
      playPressing:false,
      stopPressing:false,
      outText:'Stop',
      deviceHeight:deviceHeight,
      deviceWidth:deviceWidth,
    };
  },

  _setOrientation(data) {
    //don't know why orientations get reversed
    Orientation2.getOrientation((err , orientation)=>
    {
      var height = this.state.deviceHeight;
      var width = this.state.deviceWidth;

      if (orientation == 'PORTRAIT')
      {
        var orientationText = this.state.orientationText;
        orientationText = orientation;
        if (height > width)
        {
            this.setState({deviceHeight:width , deviceWidth:height})
        }
        this.setState({orientationText:orientationText});
      }
      if (orientation == 'LANDSCAPE')
      {
        var orientationText = this.state.orientationText;
        orientationText = orientation;
        if (height < width)
        {
            this.setState({deviceHeight:width , deviceWidth:height})
        }
        this.setState({orientationText:orientationText});
      }
    });
    //this.setState({deviceHeight:width , deviceWidth:height});
  },

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
      this.setState({deviceHeight:height , deviceWidth:width});

    }

    Orientation.addListener(this._setOrientation);
  },


/*

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
      AudioPlayer.pause('i08');
      playing = false;
      playPressing = false;
      this.setState({playing:playing , playPressing:playPressing});
    }
    else
    {
      AudioPlayer.play('i08')
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
      AudioPlayer.stop('i08');
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
    AudioPlayer.stop('i08');
    Actions.pop();
  },


  render: function() {

    const titleConfig = {
      title:' 原來五百的家鄉在新竹 ',
    };

    const leftButtonConfig = {
      title:' Back ',
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
                                    backgroundColor:'#F5FC00',}} source={require('./components/08.jpg')}/>
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
    fontSize:18,
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

module.exports = Item8;
