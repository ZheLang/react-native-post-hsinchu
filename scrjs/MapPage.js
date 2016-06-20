import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView,} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';

import MapView,{Marker} from 'react-native-maps';

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var MapPage = React.createClass({
  getInitialState() {
    return {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [  {
                    id:1,
                    latlng:{
                    latitude: 37.7882,
                    longitude: -122.4324,},
                    title: 'Foo Place',
                    description: 'Today is a good day to die',
                  },
                  {
                    id:2,
                    latlng:{
                    latitude: 37.7679,
                    longitude: -122.4320,},
                    title: 'Too bad So sad',
                    subtitle: '1234 Foo Drive',
                   },
              ],


    };
  },

  componentDidMount() {
    Actions.refresh();
  },


  render() {

        const titleConfig = {
          title:' MapPage ',
        };

        const leftButtonConfig = {
          title:'Back',
          handler:Actions.pop,
        };

        var markersAction = [
          Actions.item1,
          Actions.pop,
        ];


    return (

      <View style={{flex:1}}>
          <NavigationBar tintColor='#f7f7f7'
                          title={titleConfig}
                          leftButton={leftButtonConfig}
                          />
          <MapView
              style={styles.map}
              initialRegion={this.state.region}
              annotations={this.state.markers}
              showsUserLocation={true}
              >
              {this.state.markers.map(marker => (
                <MapView.Marker
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  onCalloutPress={markersAction[marker.id-1]}
                />
              ))}

          </MapView>
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
  map: {
    position: 'absolute',
    top: 43,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = MapPage;
