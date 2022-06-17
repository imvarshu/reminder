import { useState } from "react";
import { TouchableOpacity,View } from "react-native";

const Checkbox = () => {
    const[ischecked,toggle] =useState(false);
    return (
        <TouchableOpacity

            onPress={()=>{toggle(!ischecked)}}
            style={{
                width:20,
                height:20,
                borderRadius:10,
                borderWidth:2,
                padding:2,
                borderColor: ischecked ? '#F88F00' : '#C8C8C8',
                marginTop:10,
                marginLeft:10,
            }}
            >
               {ischecked && <View style={{
                        width:'100%',
                        height: '100%',
                        backgroundColor: '#F88F00',
                        borderRadius:'50%'
                    }}>
                
            </View>}
        </TouchableOpacity>
    )
}

export default Checkbox;