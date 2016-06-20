import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ListView,} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import ItemCell from 'react-native-item-cell';
//import NavigationBar from 'react-native-navbar';
import ToolbarAndroid from 'ToolbarAndroid';


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
      ds: dataSource.cloneWithRows(itemsArray)
    };
  },
  _renderRow: function(rowData, sectionID, rowID, highlightRow) {


    var cellTypesArray = [1 , 2, 2, 2 , 5 , 2];

    if (cellTypesArray[Number(rowID)] === 2){
      return (
        <ItemCell showDisclosureIndicator={true} icon={require('./hums.jpg')}>
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
        <ItemCell showDisclosureIndicator={true} icon={require('./hums.jpg')}>
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
    if (position === 0) { // index of 'Settings'
      Actions.mappage();
    }
    if (position === 1)
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
      {title: 'Map', icon:require('./hums.jpg'), show: 'always'},
      {title: 'Settings', icon:require('./hums.jpg'), show: 'always'},
    ];

    return (
      <View style={{flex:1}}>

      <ToolbarAndroid
       actions={toolbarActions}
       onActionSelected={this.onActionSelected}
       style={styles.toolbar}
       title='Home'></ToolbarAndroid>


          <ListView style={styles.container}
            contentInset={{top: 0}}
            automaticallyAdjustContentInsets={true}
            dataSource={this.state.ds}
            renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
          />
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


});

module.exports = HomePage;
