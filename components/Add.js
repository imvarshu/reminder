import { useState } from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const Add = ({enabled}) => {

    return(
        <TouchableOpacity disabled={!enabled}>
            <Text 
                style={{
                    color: enabled ? '#007DF5' : '#B7B7BB',
                    fontWeight:'600',
                    fontSize:16
                }}>Add</Text>
        </TouchableOpacity>
    )
}
export default Add;