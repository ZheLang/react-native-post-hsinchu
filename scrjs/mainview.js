import React, { Component } from 'react';
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var Sound = require('react-native-sound');

import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
} from 'react-native';

var Mainview = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {

      center: {
        latitude: 40.7223,
        longitude: -73.9878
      },

      taplocation:
      {
        latitude: 0,
        longitude: 0
      },
      outText: 'Doing Noting',
      boolOnTop:false,
      otcontent:null,
      boolaudioPlaying:true,

      annotations: [{
        coordinates: [40.7223, -73.9878],
        type: 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image',
        id: 'marker2',
        annotationImage: {
          url: 'https://cldup.com/7NLZklp8zS.png',
          height: 25,
          width: 25
        }
      }, {
        coordinates: [40.7923, -73.9178],
        type: 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image'
      }, {
        coordinates: [[40.76572150042782,-73.99429321289062],[40.743485405490695, -74.00218963623047],[40.728266950429735,-74.00218963623047],[40.728266950429735,-73.99154663085938],[40.73633186448861,-73.98983001708984],[40.74465591168391,-73.98914337158203],[40.749337730454826,-73.9870834350586] , [40.76572150042782,-73.99429321289062]],
        type: 'polyline',
        strokeColor: '#00FB00',
        strokeWidth: 3,
        alpha: 0.5,
        id: 'foobar'
      }, {
        coordinates: [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
        type: 'polygon',
        alpha:1,
        fillColor: '#FFFFFF',
        strokeColor: '#FFFFFF',
        strokeWidth: 1,
        id: 'zap'
      }]
    }
  },
  onUserLocationChange(location) {
    console.log(location);
  },
  onLongPress(location) {
    console.warn(location);
    return;
  },
  changeText: function()
  {
    var outText = this.state.outText;
    var otc = this.state.otcontent;
    var bot = this.state.boolOnTop ? false : true;
    var audplay = this.state.boolaudioPlaying;
    var talk = new Sound('./Sample.mp3' , Sound.MAIN_BUNDLE);


    if(bot)
    {
      outText = "Show Infos";
      if (audplay)
      {
        talk.play();
      }
      otc = <View style={styles.onTopBG}>
            <Text style={styles.onTopRT} onPress = {()=>this.changeText()}> Return</Text>
            <Text style={styles.onTopStop} onPress={()=>{talk.stop();outText="Audio Stop";this.setState({outText:outText});}}> Stop Playing </Text>
            <Image style={styles.onTopImg} source={require('./hums.jpg')}/>
            <Text style={styles.onTopConent}>if you stare into the abyss the abyss stares back at you</Text>
            </View>
    }
    else
    {
      outText = "Doing Nothing";
      otc = null;
      audplay = true;
      talk.stop();
    }
    this.setState({outText:outText,
                   otcontent:otc,
                   boolOnTop:bot,
                   boolaudioPlaying:audplay,
                  });
  },


  onOpenAnnotation(annotation) {
    console.warn(annotation);
    console.log(annotation);
  },
  render() {

    return (
      <View style={styles.container}>
          <Mapbox
            annotations={this.state.annotations}
            accessToken={'pk.eyJ1IjoicGFuZGFtYW5jaHVuZyIsImEiOiJjaW96NmNpbGYwMGczdmJtNXZzcDF2M2tmIn0.BGp4NodHcQXuIwSl7ICKzQ'}
            centerCoordinate={this.state.center}
            debugActive={false}
            direction={10}
            ref={mapRef}
            onRegionChange={this.onRegionChange}
            rotateEnabled={true}
            scrollEnabled={true}
            style={styles.container}
            showsUserLocation={true}
            styleURL={this.mapStyles.emerald}
            userTrackingMode={this.userTrackingMode.none}
            zoomEnabled={true}
            zoomLevel={12}
            compassIsHidden={true}
            onUserLocationChange={this.onUserLocationChange}
            onLongPress={this.onLongPress}
            onOpenAnnotation={()=>this.onOpenAnnotation()}
          />
          <Text onPress = {()=>this.changeText()}>
            Press This to change the text below
          </Text>
          <Text>
            {this.state.outText}
          </Text>
          {this.state.otcontent}
      </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  onTopBG:
  {
    width:380,
    height:350,
    top:150,
    left:20,
    position: 'absolute',
    backgroundColor : '#f7e7d1',
  },
  onTopRT:
  {
    fontSize:16,
    textAlign:'left',
    margin:5,
    textAlignVertical:'top',
  },
  onTopStop:
  {
    fontSize:16,
    textAlign:'right',
    margin:5,
    textAlignVertical:'top',
  },
  onTopConent:
  {
    fontSize:26,
    fontWeight:'200',
    textAlign:'center',
    marginVertical:10,
    textAlignVertical:'bottom',
  },
  onTopImg:
  {
      width: 100,
      height: 100,
      margin: 10,
      alignItems:'center',

  },



});

export default Mainview;
