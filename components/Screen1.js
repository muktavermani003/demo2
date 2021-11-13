import * as React from "react";
import {SafeAreaView, StyleSheet,Text,TouchabeOpacity,View} from 'react-native';

 class Screen1 extends React.Component{
    render(){
        return(
            <View>
                <TouchabeOpacity style={styles.button}>
                <Text>Go to the next screen</Text>
                </TouchabeOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        justifyContent:"center",
        width:200,
        height:50,
        backgroundColor:"green",
        alignSelf:"center",
        borderWidth:2
    }
})
export default Screen1
