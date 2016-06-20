import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default class extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            offset: new Animated.Value(-deviceHeight)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: deviceHeight
        }).start(Actions.homepage);
    }

    render(){
        return (
            <Animated.View style={[styles.container, {backgroundColor:"rgba(52,52,52,0.5)"},
                                  {transform: [{translateY: this.state.offset}]}]}>
                <TouchableOpacity onPress={this.closeModal.bind(this)}>
                <View style={{  width:deviceWidth,
                                height:deviceHeight,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor:"white" }}>
                <Text> Welcome to hinschu </Text>
                <Text >  Tap here to begin  </Text>

                </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
