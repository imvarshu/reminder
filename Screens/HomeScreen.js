import { useState } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Reminders from './Reminders';
import ReminderModal from '../components/ReminderModal';
import ListModal from '../components/ListModal';
const HomeScreen = (props) => {
    const {navigation,route} = props;
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showList,setShowList] = useState(false);
    return (
        <View style={{flex:1,padding:10}}>
            <View style={{flexDirection: 'row',justifyContent:'flex-end', marginTop: 20}}>
                <Text style={{color: '#007DF5',fontSize:16,}}>Edit</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TextInput
                    style={styles.search}
                    onChangeText={setSearch}
                    value={search}
                    placeholder="search"/>
            </View>
            <View>
                <Text style={{marginTop:10, fontSize:22,fontWeight:'600'}}>My Lists</Text>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Reminders')}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
                            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                                <Ionicons name="ios-list-circle-sharp" size={24} color="#F88F00" />
                                <Text style={{}}> Reminders</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingRight:10}}>
                                <Text style={{}}>0</Text>
                                <Ionicons name="chevron-forward" size={20} color="black" />
                            </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
                            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                                <Ionicons name="ios-list-circle-sharp" size={24} color="#007DF5" />
                                <Text style={{}}>Medicin</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingRight:10}}>
                                <Text style={{}}>0</Text>
                                <Ionicons name="chevron-forward" size={20} color="black" />
                            </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,marginHorizontal:10}}>
                <TouchableOpacity
                        style={{flexDirection:'row',alignItems:'center'}}
                        onPress={() =>setModalVisible(true)}>
                        <Ionicons name="md-add-circle-sharp" size={24} color="#007DF5" />
                        <Text style={{color:'#007DF5'}}>New Reminder</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={{}}
                        onPress={()=>{setShowList(true)}} >
                        <Text style={{color:'#007DF5'}}>Add List</Text>
                        
                </TouchableOpacity>
            </View>
            <ReminderModal visible={modalVisible} close ={()=>{setModalVisible(false)}} />
            <ListModal visible={showList} close ={() => {setShowList(false)}}/>
    </View>
       
    )
}

const styles = StyleSheet.create({
   
    button : {
       padding: 8,
        backgroundColor : '#fff',
        marginTop: 10,
        borderRadius: 10,
    },
    search : {
        height : 30,
        flex:1,
        backgroundColor: '#E4E3EA',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal:20
    
    },
  });

  export default HomeScreen;