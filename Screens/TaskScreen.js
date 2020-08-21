import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput,KeyboardAvoidingView} from 'react-native';
import AppHeader from '../Components/AppHeader';
import db from  '../config';
import TaskButton from '../Components/TaskButton';
export default class TaskScreen extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            toDo:[]
        }
    }
    showContent=()=>{
        var task=[];
        var keyStore=[];
        db.ref('To-Do').on('value',(data)=>{
            var list = data.val();
            console.log('list '+ list)
            var keys = Object.keys(list);
            console.log('keys '+ keys)
            for(var read in list){
                if(list[read].status=='pending'){
                    list[read].keys=read
                    console.log('list new '+ list)
                    task.push(
                        list[read]
                    )
                    console.log('task '+ task)
                }
            }
            this.setState({
                toDo : task,
            })
            task=[]
        })
    }
    componentDidMount(){
        this.showContent();
    }

    addContent=()=>{
        var word=this.state.text.toLowerCase();
        if(this.state.text!=''){
        db.ref('To-Do').push({
            name : word,
            status : 'pending'
        })
        this.setState({
            text : ''
        })
    }
    }

    render(){
        return(
            <KeyboardAvoidingView>
            <View style={styles.container}>
           <AppHeader></AppHeader>
           <View style={{flexDirection:'row'}}>
           <TextInput style={styles.textinput} onChangeText={text => {
            this.setState({ text: text });
          }} value={this.state.text}
                  />
            <TouchableOpacity style={styles.design} onPress={
                this.addContent
            }  >
                <Text style={styles.designText}>Add Task</Text>
            </TouchableOpacity>
            </View>
            {
                this.state.toDo.map(
                    (data,index)=>{
                        return(
                            <TaskButton keys={this.state.toDo[index].keys}
                            wordChunk={this.state.toDo[index].name}
                            buttonIndex={index}></TaskButton>
                        )
                    }
                )
            }
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF0000',
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
        backgroundColor:"#710A03",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
    },
    design:{
        width:100,
        height:50,
        marginTop:50,
        backgroundColor:'#00FF33',
        alignItems:'center',
        
    },
    designText:{
        fontSize:20,
        color: '#FF0000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textinput:{
        width:200,
        height:50,
        borderWidth:3,
        borderColor:'black',
        marginTop:50,
    }
})

