import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import AppHeader from '../Components/AppHeader';
export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Image source={require('../assets/mainlogo.png')} style={{width:350,height:200,marginTop:200,marginBottom:200,marginLeft:-20}}></Image>
                <Image
                    source={{ uri: 'assets/Mainlogo.png' }}
                    style={{ width: 40, height: 40 }}
                    />
             <Text></Text>  
             <TouchableOpacity style={[styles.button,{marginBottom:20,marginBottom:100,marginTop:-50}]}
                     onPress={()=>{
                        this.props.navigation.navigate('TaskScreen')}}>
                       <Text style={styles.buttonText}>Go To Task Screen</Text>   
                     </TouchableOpacity>
                     <Image source={require('../assets/secondarylogo.png')} style={{width:150,height:100,marginBottom:200,marginTop:-50}}></Image>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        alignItems: 'center',
        justifyContent: 'center',
        width:500
      },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
    }
})

