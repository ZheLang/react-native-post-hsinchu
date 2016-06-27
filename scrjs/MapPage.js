import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView,} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
import NavigationBar from 'react-native-navbar';

import MapView,{Marker} from 'react-native-maps';

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 24.80121;
const LONGITUDE = 120.975116;
const LATITUDE_DELTA = 0.0122;
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
      markers: [
                  {
                    id:1,
                    key:'1',
                    latlng:{
                    latitude:24.800953,
                    longitude: 120.973241,},
                    title: '風是甜的',
                    description: '梁任宏',
                  },
                  {
                    id:2,
                    key:'2',
                    latlng:{
                    latitude: 24.801438,
                    longitude: 120.973570,},
                    title: 'Mountain',
                    description: 'Brendan Monroe',
                   },
                   {
                     id:3,
                     key:'3',
                     latlng:{
                     latitude: 24.801773,
                     longitude: 120.974332,},
                     title: '蕊之森',
                     description: '有用主張設計x建築繁殖場',
                    },
                    {
                      id:4,
                      key:'4',
                      latlng:{
                      latitude: 24.801794,
                      longitude: 120.974797,},
                      title: 'STRANGERS',
                      description: 'STRØK/Anders Gjennestad',
                     },
                     {
                       id:5,
                       key:'5',
                       latlng:{
                       latitude: 24.801186,
                       longitude: 120.975116,},
                       title: '聲光園地',
                       description: '姚仲涵',
                      },
                      {
                        id:6,
                        key:'6',
                        latlng:{
                        latitude: 24.800513,
                        longitude: 120.977111,},
                        title: '吹泡泡',
                        description: '林建榮',
                       },
                       {
                         id:7,
                         key:'7',
                         latlng:{
                         latitude: 24.801689,
                         longitude: 120.978192,},
                         title: '光譜原色時代',
                         description: '蔡宜婷x沃手工作',
                        },
                        {
                          id:8,
                          key:'8',
                          latlng:{
                          latitude: 24.801073,
                          longitude: 120.977623},
                          title: '原來五百的家鄉在新竹',
                          description: '陳浚豪',
                         },
                         {
                           id:9,
                           key:'9',
                           latlng:{
                           latitude: 24.801153,
                           longitude: 120.977229,},
                           title: 'The Collector',
                           description: 'HOTTEA',
                          },
                          {
                            id:10,
                            key:'10',
                            latlng:{
                            latitude: 24.800271,
                            longitude:  120.976566,},
                            title: '春雪後',
                            description: '游文富',
                           },
                           {
                             id:11,
                             key:'11',
                             latlng:{
                             latitude: 24.800332,
                             longitude: 120.975872,},
                             title: '千光景',
                             description: '蔡坤霖',
                            },
                            {
                              id:12,
                              key:'12',
                              latlng:{
                              latitude: 24.800034,
                              longitude:  120.975911},
                              title: 'Passing By',
                              description: '蔡奇宏x沃手工作',
                             },
                             {
                               id:13,
                               key:'13',
                               latlng:{
                               latitude: 24.799719,
                               longitude: 120.977489,},
                               title: '新竹太郎',
                               description: '林建志',
                              },
                              {
                                id:14,
                                key:'14',
                                latlng:{
                                latitude:24.799492,
                                longitude: 120.977644,},
                                title: '時光旅行艙',
                                description: '李承亮',
                               },
                               {
                                 id:15,
                                 key:'15',
                                 latlng:{
                                 latitude: 24.798979,
                                 longitude:  120.978431,},
                                 title: '裝置微光計畫：新竹孔廟',

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
          Actions.item2,
          Actions.item3,
          Actions.item4,
          Actions.item5,
          Actions.item6,
          Actions.item7,
          Actions.item8,
          Actions.item9,
          Actions.item10,
          Actions.item11,
          Actions.item12,
          Actions.item13,
          Actions.item14,
          Actions.item15,
        ];

      var markerImg = [
        require('./marker/01.png'),
        require('./marker/02.png'),
        require('./marker/03.png'),
        require('./marker/04.png'),
        require('./marker/05.png'),
        require('./marker/06.png'),
        require('./marker/07.png'),
        require('./marker/08.png'),
        require('./marker/09.png'),
        require('./marker/10.png'),
        require('./marker/11.png'),
        require('./marker/12.png'),
        require('./marker/13.png'),
        require('./marker/14.png'),
        require('./marker/15.png'),

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
                  image={markerImg[marker.id-1]}
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
  toolbar:{
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

module.exports = MapPage;
