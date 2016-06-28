import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, Image,TouchableOpacity, ListView,ScrollView} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
//import NavigationBar from 'react-native-navbar';
import ToolbarAndroid from 'ToolbarAndroid';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");



var HomePage = React.createClass({
  getInitialState: function() {
    var itemsArray = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Settings',
      'It appears that the systematic use of complex symbols can be defined in such a way as to impose the extended c-command discussed in connection with (34).',
      'With this clarification, any associated supporting element is unspecified with respect to a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.'
    ];

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      ds: dataSource.cloneWithRows(itemsArray),
      contentText:'百年城市新竹，從1910年代進行現代化的硬體建設，累積深厚的文化藝術底蘊，陪伴無數的新竹人成長，也包容許多移居來此的新市民。現任市府團隊極力推動火車站後發展，動物園、玻璃工藝博物館將整合為未來的「1916園區」，作為園區即將開幕的前哨，「後新竹－新竹市國際地景藝術節」邀請國內外知名的地景藝術家，在站後用優美的藝術作品點亮被遺忘的美好時代，引導來往民眾漫步在藝術的分為內，也對未來的「1916園區」有更高的期待。',
    };
  },

  _renderRow: function(rowData, sectionID, rowID, highlightRow) {


    var cellTypesArray = [1 , 2, 2, 2 , 5 , 2];

    if (cellTypesArray[Number(rowID)] === 2){
      return (
        <ItemCell showDisclosureIndicator={true} icon={require('./hums1.jpg')}>
          Local image - {rowData}
        </ItemCell>
      )
    }
    if (rowID === '1') {
      return (
        <ItemCell
          icon={{uri: 'http://sourcefreeze.com/wp-content/uploads/2015/04/react-native.png'}}>
          URL Icon - {rowData}
        </ItemCell>
      )
    }
    if (rowID === '5') {
      return (
        <ItemCell
          icon={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}}>
          URL Icon - {rowData}
        </ItemCell>
      )
    }
    if (rowID === '6') {
      return (
        <ItemCell showDisclosureIndicator={true} icon={require('./hums1.jpg')}>
          Local image - {rowData}
        </ItemCell>
      )
    }
    //var disclosure = (rowID % 2 === 0) ? true : false;#f7f7f7
    var disclosure = false;
    return (
      <ItemCell showDisclosureIndicator={disclosure}>
        {rowData}
      </ItemCell>
    );
  },




  onActionSelected: function(position) {
    if (position === 1) { // index of 'Settings'
      Actions.mappage();
    }
    if (position === 2)
    {
      Actions.webpage();
    }
  },


  render: function() {
    /*
    const titleConfig = {
      title:' Home ',
    };

    const rightButtonConfig = {
      title:'Map',
      handler:Actions.mappage,
    };
    */
    var toolbarActions =[
      {title: 'Home' ,  icon:require('./components/ic_home_pressed@2x.png'), show: 'always'},
      {title: 'Map', icon:require('./components/ic_map_normal@2x.png'), show: 'always'},
      {title: 'Web', icon:require('./components/ic_web_normal@2x.png'), show: 'always'},
    ];

    return (
      <View style={{flex:1}}>

          <ToolbarAndroid
           actions={toolbarActions}
           onActionSelected={this.onActionSelected}
           title={'主頁'}
           style={styles.toolbar}
           ></ToolbarAndroid>

           <ScrollView style={{height: deviceHeight+300}}>
              <View style={{flex:1,backgroundColor:'#ffffff' ,borderWidth:15,borderColor:'#FFFFFF'}}>
                <Text style={styles.content}>{this.state.contentText}</Text>
              </View>
           </ScrollView>

           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={Actions.mappage}>
                  <Image style={styles.img}  source={require('./components/btn_take_a_look@2x.png')}></Image>
              </TouchableOpacity>
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
  toolbar:{
    backgroundColor: '#e9eaed',
    height: 56,
  },
  content:{
    fontSize:16,
    textAlign:'left',
    lineHeight:25,
    marginHorizontal:18,
    marginTop:10,
    marginBottom:0,
  },
  img:{
    width: 200,
    height: 44,
    marginTop:25,
    marginBottom:15,
    margin:15,
    resizeMode:'contain',
  },
});

module.exports = HomePage;
