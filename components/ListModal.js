import { useState } from "react";
import { Modal,View,Text,TouchableOpacity,TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Done from "./Done";
const ListModal =({visible,close}) => {
    const[listName,setListName] = useState('');
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {close()}}
        presentationStyle='formSheet'>
            <View style={{flex:1,backgroundColor:'#F2F1F5',padding:20}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                                <TouchableOpacity style={{}}
                                    onPress={()=>{close()}}>
                                    <Text style={{color:'#007DF5',fontWeight:'500',fontSize:16}}>Cancel</Text>
                                </TouchableOpacity>
                                 <Text style={{color:'black',fontWeight:'600',fontSize:16}}>New List</Text>
                               <Done active={listName.length> 0 ? true : false}/>
                        </View>
                        <View style={{padding:15,minHeight:160,backgroundColor:'#fff',marginTop:20,borderRadius:10,alignItems:'center'}}>
                                <Ionicons name="ios-list-circle-sharp" size={72} color="#007DF5" />
                                <TextInput
                                        style={{padding:15,backgroundColor:'#E4E4E6',width:'100%', borderRadius:8, textAlign:'center', fontSize: 20}}
                                        onChangeText={setListName}
                                        value={listName}
                                        autoFocus={true}
                                        placeholder="List Name"
                                />
                        </View>
             </View>
       
      </Modal>
    )
}
export default ListModal;