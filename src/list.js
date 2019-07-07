import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View ,Platform,TouchableOpacity,Image,TouchableHighlight} from 'react-native';

import imgClose from './assets/images/img_close.png'


const headerStyles = StyleSheet.create({
                                       viewHeader: {
                                       backgroundColor: "#fff",
                                       height:70,
                                       },
                                       lblHeaderLine:{
                                       backgroundColor: "#7DB9B9",
                                       height:5,
                                       },
                                       imgClose:{
                                       width:30,
                                       height:30,
                                       marginRight:10,
                                       marginTop:15,
                                       resizeMode:'contain'
                                       },
                                       });

export default class List extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        _onBtnCloseTapped = () =>
        {
            alert("Close Button Tapped")
        }
        _onBtnGetAppointmentBtnTapped = () =>
        {
            alert("Get Appointment Button Tapped")
            
            this.props.navigation.toggleDrawer();

        }
        _onBtnPhoneNumTapped = () =>
        {
            alert("Phone number button tapped")
        }
        return (
                <View style={styles.container}>
                {/* Header Design*/}
                <View style={headerStyles.viewHeader}>
                <Text style={headerStyles.lblHeaderLine}/>
                <View style={{flexDirection:'row'}}>
                <Text style={{width:'90%'}}></Text>
                <TouchableOpacity  onPress = {()=>this._onBtnCloseTapped} >
                <Image source ={imgClose} style ={headerStyles.imgClose}/>
                </TouchableOpacity>
                </View>
                </View>
                {/*Header Design end*/}
                <FlatList
                data={[
                       {key: 'Home'},
                       {key: 'Our Story'},
                       {key: 'Meet the doctor'},
                       {key: 'Our Services'},
                       {key: 'Updates'},
                       {key: 'More Information'},
                       {key: 'Contact'},
                       ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                  />
                <View style={styles.viewPhone}>
                <TouchableHighlight style = {styles.btnBG} onPress = {this._onBtnGetAppointmentBtnTapped} >
                <Text style = {styles.btnText}>Get Appointment</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.btnBG} onPress = {this._onBtnPhoneNumTapped} >
                <Text style = {styles.btnText}>Call +91 123456789</Text>
                </TouchableHighlight>
                </View>
                
                </View>
                
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor:'#7DB9B9',
                                 top: Platform.OS === 'ios' ? 40 : 0,
                                 },
                                 item: {
                                 padding: 10,
                                 fontSize: 30,
                                 fontWeight:'bold',
                                 height: 60,
                                 color:'#fff',
                                 marginLeft:10,
                                 marginTop:10,
                                 },
                                 viewPhone:{
                                 flexDirection:'row',
                                 backgroundColor:'#7DB9B9',
                                 height:300,
                                 },
                                
                                 btnBG: {
                                 zIndex: 1,
                                 borderColor: "#fff",
                                 borderWidth: 1,
                                 borderRadius: 25,
                                 marginLeft:10,
                                 height:50,
                                 },
                                 btnText:{
                                 color : '#fff',
                                 fontWeight:'bold',
                                 padding:10,
                                 fontSize:18,
                                 }
                                 })

