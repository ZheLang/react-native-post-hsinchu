import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView, Image} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';
import AudioPlayer from 'react-native-audio-manager';


var Item16 = React.createClass({
  getInitialState: function() {
    return{
      title:'風是甜的',
      subtitle: '編號01  藝術家/梁任宏',
      size:'作品尺寸: 高398 x 長220 x 寬52（公分)',
      material:'作品材質: 不鏽鋼、烤漆、培林',
      content:'梁任宏受邀為各地各式節慶以及公共環境製作大型的戶外裝置，呈現出其多元精準的藝術樣貌。本次展出他的〈風是甜的〉，手持巨型的甜筒冰淇淋，色彩甜美討喜，任隨大自然的風動而擺動。在後站地下道的出口即能明顯地看到這件作品揮舞雙臂，就像是在歡迎旅客來到新竹。',
      playingText : 'Stop Playing',
      playing:true,
      outText:'Stop',
    };
  },

  componentDidMount() {

    playing = this.state.playing;
    if (playing == true){
        AudioPlayer.play('sample');
        playingText = 'Now Playing';
        this.setState({playingText:playingText});
    }
  },

  stopPress:function(){
    var playing = this.state.playing;

    if (playing == true){
      AudioPlayer.pause('sample');
      var playingText = this.state.playingText;
      var outText = this.state.outText;
      playingText = 'Stop Playing';
      outText = 'Play';
      playing = false;
      this.setState({playingText:playingText , playing:playing , outText:outText})
    }

    else
    {
      AudioPlayer.play('sample')
      var playingText = this.state.playingText;
      var outText = this.state.outText;
      playingText = 'Now Playing';
      outText = 'Stop';
      playing = true;
      this.setState({playingText:playingText , playing:playing , outText:outText})
    }


  },

  goBack:function()
  {
    AudioPlayer.stop('sample');
    Actions.pop();
  },

  render: function() {

    const titleConfig = {
      title:' Item16 ',
    };

    const leftButtonConfig = {
      title:'Back',
      handler:this.goBack,
    };

    return (
      <View style={{flex:1}}>
          <NavigationBar tintColor='#f7f7f7'
                          title={titleConfig}
                          leftButton={leftButtonConfig}
                          />

          <Text style={styles.title}> {this.state.title} </Text>
          <Text style={styles.subtitle}> {this.state.subtitle} </Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image style={styles.img} source={require('./hums1.jpg')}/>
                <Image style={styles.img} source={require('./hums2.png')}/>
            </View>

          <Text style={styles.info}> {this.state.size} </Text>
          <Text style={styles.info}> {this.state.material} </Text>

          <Text style={styles.content}> 作品介紹 </Text>
          <Text style={styles.content}> {this.state.content} </Text>
          <Text style={styles.stop} onPress={()=>this.stopPress()}> {this.state.outText} </Text>
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
    fontWeight:"300",
    textAlign:'left'
  },
  subtitle:{
    fontSize:16,
    fontWeight:"200",
    textAlign:'left',
  },
  info:{
    fontSize:14,
    textAlign:'left',
  },
  content:{
    fontSize:16,
    textAlign:'left',
  },
  img:{
    width:150,
    height:250,
    marginTop:15,
    marginBottom:15,
    margin:15,
  },
  stop:
  {
    textAlignVertical:'bottom',
    textAlign:'right',
    marginBottom:15,
    marginTop:30,
  }



});

module.exports = Item16;
