import React from 'react';
import { View, TextInput, TouchableOpacity ,StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function TaskInput() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite sua tarefa"
                placeholderTextColor="#999"
                />

            <TouchableOpacity style={styles.addButton}>
                <MaterialIcons name="add" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
    },
    input:{
        flex:1,
        height:50,
        backgroundColor:'#FFF',
        borderRadius:8,
        paddingHorizontal:15,
        fontSize:16,
        borderWidth:1,
        borderColor:'#DDD',
        elevation:2,
    },
    addButton:{
        width:50,
        height:50,
        backgroundColor:'#EB4435',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        elevation:2,
    },
});
