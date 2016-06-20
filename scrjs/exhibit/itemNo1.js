import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView, Image} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';
import Sound from 'react-native-sound';

var talk = new Sound('./Sample.mp3' , Sound.MAIN_BUNDLE);


var Item1 = React.createClass({
  getInitialState: function() {
    return{
      title:'This is Item 1',
      content:'The world ain\'t all sunshine and rainbows.It\'s a very mean and nasty place... and I don\´t care how tough you are, it will beat you to your knees and keep you there permanently, if you let it. ',
      playingText : 'Stop Playing',
      playing:true,
      outText:'Stop',
    };
  },

  componentDidMount() {

    playing = this.state.playing;
    if (playing === true){
        talk.play();
        var playingText = this.state.playingText;
        playingText = 'Now Playing';
        this.setState({playingText:playingText});
    }
  },

  stopPress:function(){
    var playing = this.state.playing;

    if (playing == true){
      talk.stop();
      var playingText = this.state.playingText;
      var outText = this.state.outText;
      playingText = 'Stop Playing';
      outText = 'Play';
      playing = false;
      this.setState({playingText:playingText , playing:playing , outText:outText})
    }

    else
    {
      talk.play();
      var playingText = this.state.playingText;
      var outText = this.state.outText;
      playingText = 'Now Playing';
      outText = 'Stop';
      playing = true;
      this.setState({playingText:playingText , playing:playing , outText:outText})
    }


  },


  render: function() {

    const titleConfig = {
      title:' Item1 ',
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

          <Text style={styles.title}> {this.state.title} </Text>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image style={styles.img} source={require('./hums1.jpg')}/>
                <Image style={styles.img} source={require('./hums2.png')}/>
            </View>

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
    fontWeight:"200",
    textAlign:'left'
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

module.exports = Item1;
