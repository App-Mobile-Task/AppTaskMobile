import { View, StyleSheet, Text} from 'react-native';


export default function MainScreen() {
  return (
    <View style={styles.container}>
        <Text>MainScreen</Text>
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