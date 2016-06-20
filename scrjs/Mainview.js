import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import NavigationDrawer from './components/NavigationDrawer'
import Button from "react-native-button";
import Welcome from './Welcome';
import MapPage from './MapPage';
import HomePage from './HomePage';
import Item1 from './exhibit/itemNo1';
import WebPage from './WebPage';


const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center",}

});

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

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
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar hideTabBar>
                    <Scene key="welcome" component={Welcome} title="Welcome" initial={true} />
                    <Scene key="homepage" component={HomePage} title="Home"/>
                    <Scene key="mappage" component={MapPage} title="Map"/>
                    <Scene key='item1' component={Item1} title="Item 1"/>
                    <Scene key='webpage' component={WebPage} title="Web"/>

                </Scene>
            </Scene>
        </Router>;
    }
}
