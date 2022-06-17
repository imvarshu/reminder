import {View,Text,TouchableOpacity} from 'react-native';

const Done =({active}) => {
    console.log(active)
    return(
       <TouchableOpacity disabled={!active}
        >
            <Text  style={{
                color: active ? '#007DF5' : '#B7B7BB',
                fontWeight:'600',
                fontSize:16,
            }}>Done</Text>
    </TouchableOpacity> 
       
    )
}
export default Done;