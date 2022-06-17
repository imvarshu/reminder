import {View,Text,TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from '../components/Checkbox';

const Reminders = (props) => {
    const{navigation,route} =props;
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <TouchableOpacity
                                    style= {{flexDirection:'row',alignItems:'center',paddingTop:10}}
                                    onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="#007DF5" />
                                <Text style={{color:'#007DF5'}}>Lists</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingTop:10,alignItems:'center',paddingRight:10}}>
                            <Ionicons name="list-circle-outline" size={24} color="#007DF5" />
                            </TouchableOpacity>
                    </View>
                <Text style={{fontSize:25, color:'#F88F00',paddingTop:10,paddingLeft:10,fontWeight:'600'}}>Reminders</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Checkbox />
                    <Text style={{marginTop:10,marginLeft:10,fontWeight:'500'}}>BirthDay</Text>
                </View>
           
        </View>
                 <TouchableOpacity
                        style={{flexDirection:'row',position:'absolute',bottom:0,left:0,alignItems:'center',paddingBottom:10,paddingLeft:10}}
                        onPress={()=>{}} >
                        <Ionicons name="md-add-circle-sharp" size={24} color="#F88F00" />
                        <Text style={{color:'#F88F00',fontWeight:'600',paddingLeft:5}}>New Reminder</Text>
                 </TouchableOpacity>
        </View>
     

    )
}

export default Reminders;