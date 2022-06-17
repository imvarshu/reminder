import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";
import Add from "./Add";

const ReminderModal = ({visible,close}) => {
    const [title, setTitle] = useState('');

    return (
        <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                presentationStyle = 'formSheet'
                onRequestClose={() => {
                close()
                }} >
                    <View style={{flex:1,backgroundColor:'#F2F1F5',padding:20}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                            <TouchableOpacity style={{}}
                                onPress={()=>{close()}}>
                                <Text style={{color:'#007DF5',fontWeight:'500',fontSize:16}}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={{color:'black',fontWeight:'600',fontSize:16}}>New Reminder</Text>
                               <Add enabled={title.length > 0 ? true : false} />
                        </View>
                            <View
                                style={{ backgroundColor:'#fff', marginTop:20, borderRadius:8, padding: 15}}>
                                <TextInput
                                    style={{ }}
                                    onChangeText={setTitle}
                                    placeholder='Title'
                                    autoFocus={true}
                                    value={title}
                                    
                                />
                                <View style={{height: 1, backgroundColor: '#EBEBEB', marginVertical: 15}}></View>
                                <TextInput
                                    style={{ minHeight: 100}}
                                    placeholder='Notes' 
                                    onChangeText={() => {}} 
                                    multiline= {true}
                                    numberOfLines={3}
                                />
                            </View>
                    </View>


        
      </Modal>
    )
}

export default ReminderModal;