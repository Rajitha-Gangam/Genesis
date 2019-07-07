/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    
    StyleSheet,
    View,
    Text,
TouchableOpacity,
    Image,
    
} from 'react-native';

import imgSearch from './assets/images/img_search.png'
import imgMenu from './assets/images/img_menu.png'

export default class Header extends Component {
    render(){
        _onBtnPhoneNumTapped = () =>
        {
            alert("phone num tapped")
        }
        return (
                
                <View style={styles.viewHeader}>
                <Text style={styles.lblHeaderLine}/>
                <View style={styles.viewHorizontal}>
                <Text style = {{width:100,height:30,backgroundColor:'red'}}>test</Text>
                <TouchableOpacity style = {styles.btnBG} onPress = {this._onBtnPhoneNumTapped} >
                <Text style = {styles.btnText}>+91 1234567890</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {this.btnBookAptTapped} >
                <Image source ={imgSearch} style ={styles.imgSearch}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {this.btnBookAptTapped} >
                <Image source ={imgMenu} style ={styles.imgMenu}/>
                </TouchableOpacity>
                </View>
                </View>
                );
    }
};

const styles = StyleSheet.create({
                                 viewHeader: {
                                 backgroundColor: "#fff",
                                 height:70,
                                 },
                                 lblHeaderLine:{
                                 backgroundColor: "#7DB9B9",
                                 height:5,
                                 },
                                 viewHorizontal:{
                                 flexDirection:'row',
                                 },
                                 btnBG: {
                                 backgroundColor:'#fff',
                                 borderColor: "black",
                                 borderWidth: 2,
                                 borderRadius: 10,
                                 padding:5
                                 },
                                 imgSearch,imgMenu:{
                                 width:30,
                                 height:30,
                                 }
                                
                                 });


