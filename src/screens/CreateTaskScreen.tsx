import { View, StyleSheet, Text} from 'react-native';


export default function CreateTaskScreen() {
  return (
    <View style={styles.container}>
        <Text>CreateTaskScreen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});