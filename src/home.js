/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import{createStackNavigator,createAppContainer} from 'react-navigation'
//import Header from './header.js'
import imgdoctor from './assets/images/img_doctor.png'
import imgSearch from './assets/images/img_search.png'
import imgMenu from './assets/images/img_menu.png'

const headerStyles = StyleSheet.create({
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
                                       borderWidth: 1,
                                       borderRadius: 20,
                                       padding:10,
                                       marginLeft:10,
                                       marginRight:10,
                                       marginTop:10,
                                       },
                                       imgSearch,imgMenu:{
                                       width:30,
                                       height:30,
                                       marginLeft:10,
                                       marginRight:10,
                                       marginTop:15,
                                       resizeMode:'contain'
                                       },
                                       imgSearch:{
                                       marginTop:10,
                                       },
                                       
                                       });
const Header =()=>
{
    
    _onBtnPhoneNumTapped = () =>
    {
        alert("Phone number button tapped")
    }
    _onBtnSearchTapped = () =>
    {
        alert("Search button tapped")
    }
    _onBtnMenuTapped = () =>
    {
        alert("Menu button tapped")
        
    }
    return (
            
            <View style={headerStyles.viewHeader}>
            <Text style={headerStyles.lblHeaderLine}/>
            <View style={headerStyles.viewHorizontal}>
            <Text style = {{width:'40%',height:30}}></Text>
            <TouchableOpacity style = {headerStyles.btnBG} onPress = {this._onBtnPhoneNumTapped} >
            <Text style = {headerStyles.btnText}>+91 1234567890</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress = {this._onBtnSearchTapped} >
            <Image source ={imgSearch} style ={headerStyles.imgSearch}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress = {this._onBtnMenuTapped} >
            <Image source ={imgMenu} style ={headerStyles.imgMenu}/>
            </TouchableOpacity>
            </View>
            </View>
            );
    
}
export default class App extends Component  {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
    header: null,
    };
    
    state = {
        pressed :false
    }
    btnReadMoreTapped = () =>
    {
        alert('Dr. Shravan is a ENT/Head and Neck Surgeon currently heading the integrated Head and Neck Services at Healthway Clinic. He graduated in Medicine from Bangalore Medical College with post graduation in ENT from the same Institute. He underwent surgery to remove the nail')
    }
    btnBookAptTapped =() =>
    {
        alert("Book appointment button tapped")
    }
    _onBtnPhoneNumTapped = () =>
    {
        alert("Phone number button tapped")
    }
    render()
    {
        
        return (
                /*Main View*/
                <View style={styles.mainView}>
                {/*Header design implemented in Header Const, we are importing from there*/}
                <Header/>
                {/*ScrollView we are using for scroll the content*/}
                <ScrollView contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>
                <Text style={styles.lblTitle}>Meet The Doctor</Text>
                <View style={styles.borderView} >
                {/*To keep image center, I am keeping image inside view*/}
                <View style = {styles.imgView}>
                <Image source ={imgdoctor} style ={styles.imageDoctor}/>
                </View>
                <Text style={styles.lblNameOfDr}>Dr. Shravan Dixit</Text>
                <Text style={styles.lblSplty}> ENT & Head Neck Surgeon </Text>
                <Text style={styles.lblSpltyDesc}> MS - ENT , DNB - ENT , MRCS(UK) </Text>
                {/*Phone num and line we are keeping side by side by taking view and its flex-direction as row wise*/}
                <View style={styles.viewPhone}>
                <Button title = '+91 8096888888' color="#7DB9B9" style ={styles.btnPhone}/>
                <Text style = {styles.lblLine}/>
                </View>
                <Text style={styles.lblAboutDr}>Dr. Shravan is a ENT/Head and Neck Surgeon currently heading the integrated Head and Neck Services at Healthway Clinic. He graduated in Medicine from Bangalore Medical College with post graduation in ENT from the same Institute. He underwent...</Text>
                {/*Read More and Book Appt we are keeping side by side by taking view and its flex-direction as row wise*/}
                <View style={styles.viewPhone}>
                <TouchableHighlight style = {styles.btnBG} onPress = {this.btnReadMoreTapped} >
                <Text style = {styles.btnText}>Read More</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.btnBG} onPress = {this.btnBookAptTapped} >
                <Text style = {styles.btnText}>Book Appointment</Text>
                </TouchableHighlight>
                </View>
                
                </View>
                
                
                </ScrollView>
                </View>
                
                
                );//return()
    }
};

const styles = StyleSheet.create({
                                 
                                 mainView: {
                                 flex:1,
                                 top: Platform.OS === 'ios' ? 40 : 0,
                                 backgroundColor:'#fff',
                                 },
                                 scrollView: {
                                 backgroundColor: '#FAFAFA',
                                 paddingBottom:10
                                 },
                                 lblTitle:{
                                 color:'#7DB9B9',
                                 fontSize:25,
                                 fontWeight:'bold',
                                 marginLeft:10,
                                 marginTop:10
                                 },
                                 borderView:{
                                 marginRight:20,
                                 marginLeft:20,
                                 marginTop:10,
                                 paddingTop:20,
                                 paddingBottom:20,
                                 backgroundColor:'#fff',
                                 borderRadius:10,
                                 borderWidth: 1,
                                 borderColor: '#fff',
                                 },
                                 imgView:{
                                 justifyContent: 'center',
                                 alignItems: 'center'
                                 },
                                 imageDoctor:{
                                 width:'100%',
                                 resizeMode:'contain',
                                 },
                                 lblNameOfDr:{
                                 color:'#7DB9B9',
                                 fontSize:40,
                                 marginLeft:10,
                                 },
                                 lblSplty:{
                                 color:'black',
                                 marginLeft:10,
                                 marginTop:10,
                                 },
                                 lblSpltyDesc:{
                                 color:'gray',
                                 marginLeft:10,
                                 marginTop:10,
                                 },
                                 viewPhone:{
                                 flexDirection:'row',
                                 },
                                 btnPhone:{
                                 fontWeight:'bold',
                                 },
                                 lblLine:{
                                 backgroundColor:'#d3d3d2',
                                 height:1,
                                 width:'50%',
                                 marginRight:10,
                                 marginTop:20,
                                 },
                                 lblAboutDr:{
                                 fontStyle:'italic',
                                 marginLeft:10,
                                 marginRight:10,
                                 color:'gray',
                                 },
                                 btnBG: {
                                 backgroundColor:'#fff',
                                 borderColor: "#7DB9B9",
                                 borderWidth: 2,
                                 borderRadius: 5,
                                 marginLeft:10,
                                 marginTop:10,
                                 },
                                 btnText:{
                                 color : '#7DB9B9',
                                 fontWeight:'bold',
                                 padding:10,
                                 fontSize:18,
                                 }
                                 
                                 });

