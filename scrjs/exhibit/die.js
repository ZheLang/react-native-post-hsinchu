import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView, Image} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';
import AudioPlayer from 'react-native-audio-manager';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");


var Item1 = React.createClass({
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
      title:' Item1 ',
    };

    const leftButtonConfig = {
      title:'Back',
      handler:this.goBack,
    };

    const rightButtonConfig = {
      title:'DIE!!!!',
      handler:Actions.die,
    };

    return (
      <View style={{flex:1}}>

            <NavigationBar tintColor='#f7f7f7'
                            title={titleConfig}
                            leftButton={leftButtonConfig}
                            rightButton={rightButtonConfig}
                            />
        <View style={{flex:1,backgroundColor:'#f4f4f4',borderWidth:15,borderColor:'#FFFFFF'}}>
            <Text style={styles.title}> {this.state.title} </Text>
            <Text style={styles.subtitle}> {this.state.subtitle} </Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Image style={styles.img} source={require('./hums1.jpg')}/>
                  <Image style={styles.img} source={require('./hums1rr.jpg')}/>
              </View>

            <Text style={styles.info}> {this.state.size} </Text>
            <Text style={styles.info}> {this.state.material} </Text>

            <Text style={styles.content}> 作品介紹 </Text>
            <Text style={styles.content}> {this.state.content} </Text>
            <Text style={styles.stop} onPress={()=>this.stopPress()}> {this.state.outText} </Text>
        </View>
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
  },
  subtitle:{
    fontSize:16,
    fontWeight:"200",
    textAlign:'left',
    marginHorizontal:15,
  },
  info:{
    fontSize:14,
    textAlign:'left',
    color:'#858484',
    marginHorizontal:15,
  },
  content:{
    fontSize:16,
    textAlign:'left',
    lineHeight:25,
    marginHorizontal:15,
  },
  img:{
    width:250,
    height:150,
    marginTop:15,
    marginBottom:5,
    margin:15,
    resizeMode:'contain',
  },
  stop:
  {
    textAlignVertical:'bottom',
    textAlign:'right',
    marginBottom:15,
    marginTop:30,
  }



});

module.exports = Item1;
