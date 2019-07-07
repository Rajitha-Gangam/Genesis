import React from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet } from 'react-native';

export default class EmpList extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
              
              this.setState({
                            isLoading: false,
                            dataSource: responseJson.movies,
                            }, function(){
                            
                            });
              
              })
        .catch((error) =>{
               console.error(error);
               });
    }
    
    
    
    render(){
        
        if(this.state.isLoading){
            return(
                   <View style={{flex: 1, padding: 20}}>
                   <ActivityIndicator/>
                   </View>
                   )
        }
        
        return(
               <View style={styles.container}>
               <FlatList
               data={this.state.dataSource}
               renderItem={({item}) => <Text style={styles.item}>{item.title}, {item.releaseYear}</Text>}
               keyExtractor={({id}, index) => id}
               />
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
                                 }
                                 });
