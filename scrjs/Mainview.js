import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, View , BackAndroid} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Button from "react-native-button";

import Welcome from './Welcome';
import MapPage from './MapPage';
import HomePage from './HomePage';
import WebPage from './WebPage';

import Item1 from './exhibit/itemNo1';
import Item2 from './exhibit/itemNo2';
import Item3 from './exhibit/itemNo3';
import Item4 from './exhibit/itemNo4';
import Item5 from './exhibit/itemNo5';
import Item6 from './exhibit/itemNo6';
import Item7 from './exhibit/itemNo7';
import Item8 from './exhibit/itemNo8';
import Item9 from './exhibit/itemNo9';
import Item10 from './exhibit/itemNo10';
import Item11 from './exhibit/itemNo11';
import Item12 from './exhibit/itemNo12';
import Item13 from './exhibit/itemNo13';
import Item14 from './exhibit/itemNo14';
import Item15 from './exhibit/itemNo15';



const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center",}

});

var sceneName = ' ';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        if (action.scene != undefined)
        {
          sceneName = action.scene.name;
        }
        return defaultReducer(state, action);
    }
};

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (sceneName != 'homepage')
  {
    Actions.pop();
    console.warn("BackAndroid");
    return true;
  }
  return false;
});

// define this based on the styles/dimensions you use
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};


export default class Mainview extends React.Component {



    render() {
        return <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>

                <Scene key="root" hideNavBar hideTabBar>
                    <Scene key="welcome" component={Welcome} title="Welcome"  initial={true}/>
                    <Scene key="homepage" component={HomePage} title="Home" />
                    <Scene key="mappage" component={MapPage} title="Map"/>
                    <Scene key='webpage' component={WebPage} title="Web"/>

                    <Scene key='item1' component={Item1} title="Item 1"/>
                    <Scene key='item2' component={Item2} title="Item 2"/>
                    <Scene key='item3' component={Item3} title="Item 3"/>
                    <Scene key='item4' component={Item4} title="Item 4"/>
                    <Scene key='item5' component={Item5} title="Item 5"/>
                    <Scene key='item6' component={Item6} title="Item 6"/>
                    <Scene key='item7' component={Item7} title="Item 7"/>
                    <Scene key='item8' component={Item8} title="Item 8"/>
                    <Scene key='item9' component={Item9} title="Item 9"/>
                    <Scene key='item10' component={Item10} title="Item 10"/>
                    <Scene key='item11' component={Item11} title="Item 11"/>
                    <Scene key='item12' component={Item12} title="Item 12"/>
                    <Scene key='item13' component={Item13} title="Item 13"/>
                    <Scene key='item14' component={Item14} title="Item 14"/>
                    <Scene key='item15' component={Item15} title="Item 15"/>
                </Scene>

        </Router>;
    }
}
